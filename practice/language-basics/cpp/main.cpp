#include <cstddef>
#include <iostream>
#include <utility>
#include <vector>

std::pair<std::size_t, int> summarize(const std::vector<int>& values) {
    std::size_t count = 0;
    int total = 0;

    for (int value : values) {
        if (value >= 0) {
            ++count;
            total += value;
        }
    }

    return {count, total};
}

int main() {
    const std::vector<int> values{12, -3, 0, 18};
    const auto [count, total] = summarize(values);
    std::cout << "count=" << count << " total=" << total << '\n';
}
