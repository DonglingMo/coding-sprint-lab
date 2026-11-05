function twoSum(nums: number[], target: number): number[] {
    // 明确定义 Map 的键值对类型均为 number
    // @ts-ignore
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            // 使用 non-null assertion (!) 确保返回值不为 undefined
            return [map.get(complement)!, i];
        }

        map.set(nums[i], i);
    }
    return [];
}
