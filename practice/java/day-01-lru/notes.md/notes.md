# Notes

- LinkedHashMap with accessOrder = true maintains least-to-most recently used order.
- get changes access order, so eviction is O(1) average with a small bounded scan for the eldest entry.
- The synchronized methods make this small exercise safe for concurrent callers; production code should document the locking strategy and performance trade-off.
