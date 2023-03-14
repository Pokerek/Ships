import React from 'react';
import Player from '../Player/Player';
import Opponent from '../Player/Opponent';

export default function Dashboard() {
   return (
      <div className="container mx-auto">
         <div className="py-4 flex flex-wrap md:divide-x gap-3">
            <Player />
            <Opponent />
         </div>
      </div>
   );
}
