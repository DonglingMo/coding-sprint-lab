import { SearchList, type SearchCard } from './react-search-list';

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

const cards: SearchCard[] = [
  { id: 'skill-1', title: 'Research Helper', kind: 'skill' },
  { id: 'agent-1', title: 'Ledger Agent', kind: 'agent' },
];

export default async function Page({ searchParams }: SearchPageProps) {
  const { q = '' } = await searchParams;
  const visibleCards = cards.filter((card) => card.title.toLowerCase().includes(q.toLowerCase()));

  return <SearchList items={visibleCards} onSelect={(item) => console.log(item.id)} />;
}
