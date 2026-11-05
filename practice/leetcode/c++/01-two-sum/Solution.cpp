#include <vector>
#include <unordered_map>

class Solution {
public:
    std::vector<int> twoSum(std::vector<int>& nums, int target) {
        // 使用 unordered_map（底层是哈希表，查找速度为 O(1)）
        std::unordered_map<int, int> map;

        for (int i = 0; i < nums.size(); ++i) {
            int complement = target - nums[i];

            // 如果在 map 中找到了补数
            if (map.find(complement) != map.end()) {
                return {map[complement], i};
            }

            // 没找到则存入当前值和索引
            map[nums[i]] = i;
        }
        return {};
    }
};
