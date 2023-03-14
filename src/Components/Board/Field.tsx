import React from 'react';

type Props = {
   text?: string;
   children?: JSX.Element;
   type?: 'sea' | 'empty' | 'hit';
};

export default function Field({ text, children, type }: Props) {
   let styles =
      'w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 flex justify-center items-center text-xl text-slate-400 font-bold';
   switch (type) {
      case 'sea':
         styles += ' bg-blue-200';
         break;
      case 'empty':
         styles += ' bg-slate-200';
         break;
      case 'hit':
         styles += ' bg-red-200';
         break;
      default:
         break;
   }
   let content;
   if (text) content = text;
   if (children) content = children;

   return (
      <div onClick={() => alert('click')} className={styles}>
         {content || ''}
      </div>
   );
}
