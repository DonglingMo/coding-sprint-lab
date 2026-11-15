import {
  createPage,
  loadSearchPage,
  normalizeSearchInput,
  parseSearchInput,
  type SearchInput,
  type SearchPage,
} from './search.ts';

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

const search = normalizeSearchInput({ kind: 'skill', q: '  research  ', category: '  ' });
console.log(`kind=${search.kind} q=${search.q} category=${search.category}`);

const parsedSearch = parseSearchInput({ kind: 'agent', q: 'trade' });
const rejectedSearch = parseSearchInput({ kind: 'tool', q: 'trade' });
const page = createPage([{ title: 'Research Helper', kind: 'skill' }], 1);
console.log(`parsed=${parsedSearch?.kind} rejected=${rejectedSearch === null} total=${page.total}`);

async function main() {
  const remotePage: SearchPage<SearchInput> = await loadSearchPage({ kind: 'agent', q: 'trade' });
  console.log(`async=${remotePage.items[0]?.kind} total=${remotePage.total}`);
}

void main();
