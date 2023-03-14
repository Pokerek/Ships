import Dashboard from './Components/Dashboard/Dashboard';
import { Modal } from './Components/Modal/Modal';
import Navigation from './Components/Navigation/Navigation';
import { GameProvider } from './Context/GameContext';
import { ModalProvider } from './Context/ModalContext';

export default function Game() {
   return (
      <GameProvider>
         <ModalProvider>
            <div className="Game">
               <Navigation />
               <Dashboard />
               <Modal />
            </div>
         </ModalProvider>
      </GameProvider>
   );
}
