import java.util.LinkedHashMap;
import java.util.Map;

/** A small, synchronized, generic LRU cache. */
public class LRUCache<K, V> {
    private final int capacity;
    private final LinkedHashMap<K, V> entries;

    public LRUCache(int capacity) {
        if (capacity <= 0) {
            throw new IllegalArgumentException("capacity must be positive");
        }
        this.capacity = capacity;
        this.entries = new LinkedHashMap<>(capacity, 0.75f, true);
    }

    public synchronized V get(K key) {
        return entries.get(key);
    }

    public synchronized void put(K key, V value) {
        entries.put(key, value);
        if (entries.size() > capacity) {
            Map.Entry<K, V> eldest = entries.entrySet().iterator().next();
            entries.remove(eldest.getKey());
        }
    }

    public synchronized int size() {
        return entries.size();
    }
}
