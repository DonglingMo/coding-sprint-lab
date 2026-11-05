package _1_two_sum

func twoSums(nums []int, target int) []int {
	m := make(map[int]int)
	for i, num := range nums {
		j := target - num

		if index, ok := m[j]; ok {
			return []int{index, i}
		}
	}
	return nil
}
