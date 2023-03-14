import { createContext } from 'react';
import { Player } from '../Types';

type props = {
   children: JSX.Element;
};

const PlayerContext = createContext<Player | null>(null);

export function PlayerProvider({ children }: props) {
   return (
      <PlayerContext.Provider value={null}>{children}</PlayerContext.Provider>
   );
}
