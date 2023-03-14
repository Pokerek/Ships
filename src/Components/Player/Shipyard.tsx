import React, { useContext } from 'react';
import { Ship } from '../Ships/Ship';
import { ShipModel, ShipTypes } from '../../Types';
import { GameContext } from '../../Context/GameContext';
import Error from '../Error/Error';
import { ModalContext } from '../../Context/ModalContext';
import ShipForm from '../Ships/ShipForm';

type props = {
   ships: ShipModel[];
   addShip: (ship: ShipTypes) => void;
};

export default function Shipyard({ ships, addShip }: props) {
   const game = useContext(GameContext);
   const modal = useContext(ModalContext);

   if (!game || !modal) return <Error name="Shipyard" />;

   const { openModal } = modal;

   return (
      <div className="">
         <div className="flex items-center gap-1">
            <h2 className="text-xl my-3">Shipyard</h2>
            <button
               onClick={() => openModal(<ShipForm />)}
               className="bg-yellow-200 rounded px-2 h-8"
            >
               Add
            </button>
         </div>
         <div className="flex flex-wrap justify-between gap-2">
            {ships?.map((ship) => (
               <Ship key={ship.id} {...ship} />
            ))}
         </div>
      </div>
   );
}
