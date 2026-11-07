type Summary = { count: number; total: number };

function sumNonNegative(amounts: number[]): Summary {
  let count = 0;
  let total = 0;
  for (const amount of amounts) {
    if (amount >= 0) {
      count += 1;
      total += amount;
    }
  }
  return { count, total };
}

const amounts: number[] = [12, -3, 0, 18];
const result = sumNonNegative(amounts);
console.log(`count=${result.count} total=${result.total}`);
