declare namespace JSX {
  type Element = unknown;

  interface IntrinsicElements {
    button: { 'aria-pressed'?: boolean; onClick?: () => void; children?: unknown };
    li: { children?: unknown };
    p: { children?: unknown };
    ul: { children?: unknown };
  }
}

declare module 'react' {
  export type Key = string | number;
  export type ReactNode = any;
  export type ReactPortal = any;
  export function useState<T>(initialValue: T): [T, (nextValue: T | ((previous: T) => T)) => void];
}

declare module 'next/link' {
  export default function Link(props: { href: string; children?: unknown }): any;
}
