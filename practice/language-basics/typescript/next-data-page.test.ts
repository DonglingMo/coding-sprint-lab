import assert from 'node:assert/strict';
import test from 'node:test';
import { fetchSearchCards } from './next-data.ts';

test('fetches all mock cards without a query', async () => {
  const result = await fetchSearchCards('');
  assert.equal(result.total, 2);
});

test('filters mock cards by the URL query', async () => {
  const result = await fetchSearchCards('ledger');
  assert.deepEqual(result.items.map((item) => item.id), ['agent-1']);
});
