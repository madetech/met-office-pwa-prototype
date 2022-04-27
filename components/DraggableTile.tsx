import { ReactChild } from 'react';

export function DraggableTile(props: { children: ReactChild | ReactChild[] }) {
  return <section className="tile">{props.children}</section>;
}
