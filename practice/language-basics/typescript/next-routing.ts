export function buildExploreHref(query: string): string {
  const params = new URLSearchParams();
  const normalizedQuery = query.trim();

  if (normalizedQuery) {
    params.set('q', normalizedQuery);
  }

  const suffix = params.toString();
  return `/en/market/explore${suffix ? `?${suffix}` : ''}`;
}
