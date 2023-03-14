import React from 'react';
import { ShipModel } from '../../Types';

type Props = {
   ship?: ShipModel;
};

export default function ShipForm({ ship }: Props) {
   return (
      <form>
         <h3>{ship ? 'Edit ship' : 'Add new ship'}</h3>
         <label>Name:</label>
         <input type="text" name="name" />
         <label>Orientation:</label>
         <select name="orientation">
            <option value="horizontal">Horizontal</option>
            <option value="vertical">Vertical</option>
         </select>
      </form>
   );
}
