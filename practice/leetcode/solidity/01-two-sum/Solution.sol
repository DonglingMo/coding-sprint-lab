// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract TwoSumContract {
    // 必须定义在 storage 中，Key 是数字，Value 是 (索引 + 1)
    // 为什么要加 1 ？因为 Solidity 中 mapping 没存过的 key 默认返回 0，
    // 我们需要区分“真的索引是0”还是“没存过”。
    mapping(int256 => uint256) private indexMap;

    function twoSum(int256[] calldata nums, int256 target) external returns (uint256[] memory) {
        uint256[] memory result = new uint256[](2);

        for (uint256 i = 0; i < nums.length; i++) {
            int256 complement = target - nums[i];

            // 检查对应补数是否已经存过 (判断是否大于 0)
            if (indexMap[complement] > 0) {
                result[0] = indexMap[complement] - 1; // 恢复真实索引
                result[1] = i;

                // 找到答案后，必须手动把改过的 mapping 恢复为 0，释放状态，否则下次调用会污染数据
                for (uint256 j = 0; j <= i; j++) {
                    indexMap[nums[j]] = 0;
                }
                return result;
            }

            // 存入当前数字，索引加 1 存储
            indexMap[nums[i]] = i + 1;
        }

        // 如果没找到，同样要清理前面存进去的部分
        for (uint256 j = 0; j < nums.length; j++) {
            indexMap[nums[j]] = 0;
        }
        return result;
    }
}
