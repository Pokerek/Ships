import React, { createContext } from 'react';

import Board from '../Board/Board';
import Shipyard from './Shipyard';
import { Interface, Player, ShipTypes } from '../../Types';
import { getColorClass } from '../../Util/colors';
import Error from '../Error/Error';

type Props = {
   player: Player;
   type: Interface;
   addShip: (ship: ShipTypes) => void;
};

export const PlayerTypeContext = createContext<Interface>('Player');

export default function PlayerInterface({ player, type, addShip }: Props) {
   if (!player) return <Error name="PlayerInterface" />;

   const { name, ships, color } = player;
   const colorClass = getColorClass(color);

   return (
      <PlayerTypeContext.Provider value={type}>
         <div className="px-6 flex-[1_1_350px]">
            <h1
               className={`text-white font-bold text-xl text-center py-1 ${colorClass.background}`}
            >
               {`${name}'s fleet`}
            </h1>
            <Board ships={ships} />
            <Shipyard addShip={addShip} ships={ships} />
         </div>
      </PlayerTypeContext.Provider>
   );
}
