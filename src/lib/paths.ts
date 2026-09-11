const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

export function href(path = '/'): string {
  const clean = path.replace(/^\/+/, '').replace(/\/+$/, '');
  return clean ? `${BASE}/${clean}/` : `${BASE}/`;
}

export function asset(path: string): string {
  return `${BASE}/${path.replace(/^\/+/, '')}`;
}

export function isCurrent(pathname: string, path: string): boolean {
  const strip = (s: string) => s.replace(/\/+$/, '');
  return strip(pathname) === strip(href(path));
}
