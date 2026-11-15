'use client';

export type SearchCard = {
  id: string;
  title: string;
  kind: 'skill' | 'agent';
};

export type SearchListProps = {
  items: SearchCard[];
  onSelect: (item: SearchCard) => void;
};

export function SearchList({ items, onSelect }: SearchListProps) {
  if (items.length === 0) {
    return <p>No results</p>;
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <button onClick={() => onSelect(item)}>{item.title}</button>
        </li>
      ))}
    </ul>
  );
}
