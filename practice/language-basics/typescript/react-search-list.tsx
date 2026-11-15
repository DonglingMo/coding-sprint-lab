'use client';

import { useState } from 'react';

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
  const [selectedId, setSelectedId] = useState<string | null>(null);

  if (items.length === 0) {
    return <p>No results</p>;
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <button
            aria-pressed={selectedId === item.id}
            onClick={() => {
              setSelectedId(item.id);
              onSelect(item);
            }}
          >
            {item.title}
          </button>
        </li>
      ))}
    </ul>
  );
}
