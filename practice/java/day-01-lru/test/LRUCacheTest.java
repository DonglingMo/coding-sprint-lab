public class LRUCacheTest {
    public static void main(String[] args) {
        evictsLeastRecentlyUsedEntry();
        updatesExistingKeyAndRefreshesOrder();
        rejectsInvalidCapacity();
        System.out.println("All LRU cache tests passed.");
    }

    private static void evictsLeastRecentlyUsedEntry() {
        LRUCache<Integer, String> cache = new LRUCache<>(2);
        cache.put(1, "one");
        cache.put(2, "two");
        assertEquals("one", cache.get(1));
        cache.put(3, "three");
        assertNull(cache.get(2));
        assertEquals("three", cache.get(3));
    }

    private static void updatesExistingKeyAndRefreshesOrder() {
        LRUCache<String, Integer> cache = new LRUCache<>(2);
        cache.put("a", 1);
        cache.put("b", 2);
        cache.put("a", 10);
        cache.put("c", 3);
        assertEquals(10, cache.get("a"));
        assertNull(cache.get("b"));
        assertEquals(2, cache.size());
    }

    private static void rejectsInvalidCapacity() {
        try {
            new LRUCache<>(0);
            throw new AssertionError("expected IllegalArgumentException");
        } catch (IllegalArgumentException expected) {
            // expected
        }
    }

    private static void assertEquals(Object expected, Object actual) {
        if (!java.util.Objects.equals(expected, actual)) {
            throw new AssertionError("expected " + expected + ", got " + actual);
        }
    }

    private static void assertNull(Object value) {
        if (value != null) {
            throw new AssertionError("expected null, got " + value);
        }
    }
}
