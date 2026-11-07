package cache

import (
	"sync"
	"time"
)

// Item 代表缓存中的一个值及其过期时间
type Item struct {
	Value      interface{}
	Expiration int64 // 纳秒级时间戳，0 表示永不过期
}

// Expired 判断缓存项是否已过期
func (item *Item) Expired() bool {
	if item.Expiration == 0 {
		return false
	}
	return time.Now().UnixNano() > item.Expiration
}

// Cache 接口定义了缓存的标准行为
type Cache interface {
	Set(key string, value interface{}, ttl time.Duration)
	Get(key string) (interface{}, bool)
	Delete(key string)
	Close() // 用于停止后台清理协程
}

// memoryCache 是 Cache 接口的具体实现
type memoryCache struct {
	items      map[string]Item
	mu         sync.RWMutex
	stopEvict  chan struct{}
	evictTimer *time.Ticker
}

// NewMemoryCache 创建一个内存缓存实例
// cleanupInterval 指定后台清理过期 Key 的间隔时间
func NewMemoryCache(cleanupInterval time.Duration) Cache {
	c := &memoryCache{
		items:      make(map[string]Item),
		stopEvict:  make(chan struct{}),
		evictTimer: time.NewTicker(cleanupInterval),
	}

	// 启动后台定期清理协程
	go c.startEvictionLoop()

	return c
}

// Set 设置缓存项，ttl 为生存时间（Duration）
func (c *memoryCache) Set(key string, value interface{}, ttl time.Duration) {
	var exp int64
	if ttl > 0 {
		exp = time.Now().Add(ttl).UnixNano()
	}

	c.mu.Lock()
	c.items[key] = Item{
		Value:      value,
		Expiration: exp,
	}
	c.mu.Unlock()
}

// Get 获取缓存项（包含惰性删除逻辑）
func (c *memoryCache) Get(key string) (interface{}, bool) {
	c.mu.RLock()
	item, found := c.items[key]
	c.mu.RUnlock()

	if !found {
		return nil, false
	}

	// 惰性删除：如果发现已过期，则进行双重检查并删除
	if item.Expired() {
		c.mu.Lock()
		// 双重检查，防止在加锁前被其他协程删除了
		if item, found = c.items[key]; found && item.Expired() {
			delete(c.items, key)
		}
		c.mu.Unlock()
		return nil, false
	}

	return item.Value, true
}

// Delete 主动删除某个缓存项
func (c *memoryCache) Delete(key string) {
	c.mu.Lock()
	delete(c.items, key)
	c.mu.Unlock()
}

// startEvictionLoop 后台定期轮询清理逻辑
func (c *memoryCache) startEvictionLoop() {
	for {
		select {
		case <-c.evictTimer.C:
			c.evictExpired()
		case <-c.stopEvict:
			c.evictTimer.Stop()
			return
		}
	}
}

// evictExpired 扫描 map 并删除过期数据
func (c *memoryCache) evictExpired() {
	c.mu.Lock()
	defer c.mu.Unlock()

	now := time.Now().UnixNano()
	for k, item := range c.items {
		if item.Expiration > 0 && now > item.Expiration {
			delete(c.items, k)
		}
	}
}

// Close 关闭缓存，释放后台协程资源
func (c *memoryCache) Close() {
	close(c.stopEvict)
}
