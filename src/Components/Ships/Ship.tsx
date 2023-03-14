import React from 'react';
import { Part } from './Part';
import { ShipModel } from '../../Types';
import { getSide } from '../../Logic/ship';
import Field from '../Board/Field';

export function Ship({ parts }: ShipModel) {
   return (
      <div className="flex">
         {parts?.map((part, index) => {
            if (!part) return part;
            const side = getSide('horizontal', part.position);
            return (
               <Field key={index}>
                  <Part figure={part.figure} hit={part.hit} side={side} />
               </Field>
            );
         })}
      </div>
   );
}
