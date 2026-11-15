import type { SearchCard } from './react-search-list';

export type SearchResponse = {
  items: SearchCard[];
  total: number;
};

const cards: SearchCard[] = [
  { id: 'skill-1', title: 'Research Helper', kind: 'skill' },
  { id: 'agent-1', title: 'Ledger Agent', kind: 'agent' },
];

export async function fetchSearchCards(query: string): Promise<SearchResponse> {
  const normalizedQuery = query.trim().toLowerCase();
  const items = normalizedQuery
    ? cards.filter((card) => card.title.toLowerCase().includes(normalizedQuery))
    : cards;

  return { items, total: items.length };
}
