package main

import "fmt"

func sumNonNegative(amounts []int) (int, int) {
	count := 0
	total := 0
	for _, amount := range amounts {
		if amount >= 0 {
			count++
			total += amount
		}
	}
	return count, total
}

func main() {
	amounts := []int{12, -3, 0, 18}
	count, total := sumNonNegative(amounts)
	fmt.Printf("count=%d total=%d\n", count, total)
}
