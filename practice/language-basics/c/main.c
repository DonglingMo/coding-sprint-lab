#include <stdio.h>
#include <stddef.h>

void summarize(const int values[], size_t length, size_t *count, int *total) {
    *count = 0;
    *total = 0;

    for (size_t i = 0; i < length; i++) {
        if (values[i] >= 0) {
            (*count)++;
            *total += values[i];
        }
    }
}

int main(void) {
    const int values[] = {12, -3, 0, 18};
    size_t count;
    int total;

    summarize(values, sizeof(values) / sizeof(values[0]), &count, &total);
    printf("count=%zu total=%d\n", count, total);
    return 0;
}
