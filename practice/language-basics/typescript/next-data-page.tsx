import { SearchForm } from './react-search-form';
import { fetchSearchCards } from './next-data';

export default async function DataPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = '' } = await searchParams;
  const result = await fetchSearchCards(q);

  return (
    <main>
      <SearchForm initialQuery={q} />
      <p>Total: {result.total}</p>
      <ul>
        {result.items.map((item) => <li key={item.id}>{item.title}</li>)}
      </ul>
    </main>
  );
}
