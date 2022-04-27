import { ReactChild, ReactFragment, ReactPortal } from 'react';

export function DraggableTile(props: {
  children:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  return <section className="tile">{props.children}</section>;
}
