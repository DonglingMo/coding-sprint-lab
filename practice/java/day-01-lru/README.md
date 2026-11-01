# Day 01 - Java LRU Cache

## Learning Objectives
- 使用 HashMap / 双向链表思想实现 LRU
- 理解泛型、访问顺序和 O(1) 平均复杂度

## Requirements
- get(key)、put(key, value)
- 超过容量时淘汰最久未使用项
- 更新已有键时刷新访问顺序
- 线程安全（本练习使用 synchronized 方法）

## Test Cases
- 正常访问
- 容量满时淘汰
- 更新已有键
- 容量边界

## Run
```bash
javac src/LRUCache.java test/LRUCacheTest.java
java -ea -cp src:test LRUCacheTest
```

## Key Learnings
记录今天真正理解的内容。

## Problems
记录遇到的问题和解决方案。
