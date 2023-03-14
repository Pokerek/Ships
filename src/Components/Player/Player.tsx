import React, { useContext, useState } from 'react';
import PlayerInterface from './PlayerInterface';
import { Game, ShipTypes } from '../../Types';
import { GameContext } from '../../Context/GameContext';
import Error from '../Error/Error';
import { createShip } from '../../Logic/ship';

export default function Player() {
   const game = useContext<Game | null>(GameContext);
   if (!game) return <Error name="Player" />;

   const [player, setPlayer] = useState(game.player);

   const handleAddShip = (ship: ShipTypes) => {
      const ships = [...player.ships];
      ships.push(createShip('horizontal', ship));

      setPlayer((prevPlayer) => {
         return {
            ...prevPlayer,
            ships
         };
      });
   };

   return (
      <PlayerInterface type="Player" addShip={handleAddShip} player={player} />
   );
}
