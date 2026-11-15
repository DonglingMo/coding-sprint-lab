import assert from 'node:assert/strict';
import test from 'node:test';
import { buildExploreHref } from './next-routing.ts';

test('builds a localized Explore route with an encoded query', () => {
  assert.equal(buildExploreHref(' research '), '/en/market/explore?q=research');
});

test('omits an empty query parameter', () => {
  assert.equal(buildExploreHref('  '), '/en/market/explore');
});
