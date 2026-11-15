'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { buildExploreHref } from './next-routing';

export function SearchForm({ initialQuery = '' }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  return (
    <form onSubmit={() => router.push(buildExploreHref(query))}>
      <input value={query} onChange={(event) => setQuery(event.target.value)} />
      <button>Search</button>
    </form>
  );
}
