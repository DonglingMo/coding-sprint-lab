export type MarketKind = 'skill' | 'agent';

export type SearchPage<T> = {
  items: T[];
  total: number;
};

export type SearchInput = {
  kind: MarketKind;
  q?: string;
  category?: string;
};

export function normalizeSearchInput(input: SearchInput): SearchInput {
  return {
    kind: input.kind,
    q: input.q?.trim() ?? '',
    category: input.category?.trim() || undefined,
  };
}

export function isMarketKind(value: unknown): value is MarketKind {
  return value === 'skill' || value === 'agent';
}

export function parseSearchInput(value: unknown): SearchInput | null {
  if (typeof value !== 'object' || value === null) {
    return null;
  }

  const record = value as Record<string, unknown>;
  if (!isMarketKind(record.kind)) {
    return null;
  }

  return {
    kind: record.kind,
    q: typeof record.q === 'string' ? record.q : undefined,
    category: typeof record.category === 'string' ? record.category : undefined,
  };
}

export function createPage<T>(items: T[], total: number): SearchPage<T> {
  return { items, total };
}

export async function loadSearchPage(input: SearchInput): Promise<SearchPage<SearchInput>> {
  const normalized = normalizeSearchInput(input);
  await Promise.resolve();
  return createPage([normalized], 1);
}
