import assert from 'node:assert/strict';
import test from 'node:test';
import {
  loadSearchPage,
  normalizeSearchInput,
  parseSearchInput,
} from './search.ts';

test('normalizes optional search fields', () => {
  assert.deepEqual(
    normalizeSearchInput({ kind: 'skill', q: '  research  ', category: '  ' }),
    { kind: 'skill', q: 'research', category: undefined },
  );
});

test('rejects an unknown market kind at runtime', () => {
  assert.equal(parseSearchInput({ kind: 'tool', q: 'trade' }), null);
});

test('keeps a valid kind and ignores a non-string query', () => {
  assert.deepEqual(parseSearchInput({ kind: 'agent', q: 123 }), {
    kind: 'agent',
    q: undefined,
    category: undefined,
  });
});

test('loads one normalized search page asynchronously', async () => {
  await assert.doesNotReject(async () => {
    const page = await loadSearchPage({ kind: 'agent', q: '  trade ' });
    assert.equal(page.total, 1);
    assert.deepEqual(page.items[0], { kind: 'agent', q: 'trade', category: undefined });
  });
});
