#include <stdlib.h>
#include "uthash.h" // 引入 uthash 库

// 定义哈希表结构体
struct hash_table {
    int key;          // 存储数字的值
    int value;        // 存储数字的索引
    UT_hash_handle hh; // 让结构体变得可哈希
};

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    struct hash_table* map = NULL;
    struct hash_table* s;

    for (int i = 0; i < numsSize; i++) {
        int complement = target - nums[i];

        // 查找补数是否存在
        HASH_FIND_INT(map, &complement, s);
        if (s != NULL) {
            int* result = (int*)malloc(sizeof(int) * 2);
            result[0] = s->value;
            result[1] = i;
            *returnSize = 2;

            // 清理哈希表内存
            struct hash_table *current, *tmp;
            HASH_ITER(hh, map, current, tmp) {
                HASH_DEL(map, current);
                free(current);
            }
            return result;
        }

        // 没找到则插入当前元素
        s = (struct hash_table*)malloc(sizeof(struct hash_table));
        s->key = nums[i];
        s->value = i;
        HASH_ADD_INT(map, key, s);
    }

    *returnSize = 0;
    return NULL;
}
