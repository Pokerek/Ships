import React from 'react';

type Props = {
   children: JSX.Element;
};

export default function Row({ children }: Props) {
   return <div className="grid grid-cols-11 gap-1">{children}</div>;
}
