def sum_non_negative(amounts):
    count = 0
    total = 0
    for amount in amounts:
        if amount >= 0:
            count += 1
            total += amount
    return count, total


if __name__ == "__main__":
    amounts = [12, -3, 0, 18]
    count, total = sum_non_negative(amounts)
    print(f"count={count} total={total}")
