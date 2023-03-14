import React from 'react';

type props = {
   name: string;
};
export default function Error({ name }: props) {
   return (
      <div className="bg-red-700 flex items-center justify-center">
         <div className="bg-white m-2 p-2">
            Something went wrong on create{' '}
            <span className="text-blue-500 font-bold">{name}</span> component
         </div>
      </div>
   );
}
