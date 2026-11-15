import Link from 'next/link';
import { buildExploreHref } from './next-routing';

export function ExploreLink({ query }: { query: string }) {
  return <Link href={buildExploreHref(query)}>Explore</Link>;
}
