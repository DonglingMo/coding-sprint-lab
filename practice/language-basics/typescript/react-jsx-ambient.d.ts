declare namespace JSX {
  interface IntrinsicElements {
    button: { onClick?: () => void; children?: unknown };
    li: { children?: unknown };
    p: { children?: unknown };
    ul: { children?: unknown };
  }
}
