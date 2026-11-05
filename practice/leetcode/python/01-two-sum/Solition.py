from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Python 的 dict 底层就是高度优化的哈希表
        hash_map = {}

        for i, num in enumerate(nums):
            complement = target - num

            # 检查补数是否在字典的 key 中
            if complement in hash_map:
                return [hash_map[complement], i]

            # 没找到则记录当前数字的索引
            hash_map[num] = i

        return []
