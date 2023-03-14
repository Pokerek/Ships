import { createContext, useState } from 'react';
import { Binary, Player, Game } from '../Types';

type props = {
   children: JSX.Element;
};

const INIT_PLAYERS: Player[] = [
   {
      name: 'Player 1',
      color: 'red',
      ships: []
   },
   {
      name: 'Player 2',
      color: 'blue',
      ships: []
   }
];

export const GameContext = createContext<Game | null>(null);

export function GameProvider({ children }: props) {
   const [currentPlayer, setCurrentPlayer] = useState<Binary>(0);
   const [players, setPlayers] = useState<Player[]>(INIT_PLAYERS);

   const player = players[currentPlayer];

   const handleUpdatePlayer = (id: Binary, player: Player) => {
      const newPlayers = [...players];

      newPlayers[id] = player;

      setPlayers(newPlayers);
   };

   const handleEndTurn = () => {
      setCurrentPlayer((prevPlayer) => (prevPlayer ? 0 : 1));
   };

   return (
      <GameContext.Provider
         value={{ player, handleEndTurn, handleUpdatePlayer }}
      >
         {children}
      </GameContext.Provider>
   );
}
