import { useContext } from 'react';
import { ModalContext } from '../../Context/ModalContext';
import Error from '../Error/Error';

export function Modal() {
   const modal = useContext(ModalContext);
   if (!modal) return <Error name="Modal" />;

   const { isOpen, body, closeModal } = modal;

   return (
      <div
         className={`fixed inset-0 z-50 flex items-center justify-center ${
            isOpen ? '' : 'hidden'
         }`}
      >
         <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
         <div className="bg-white rounded-lg p-6">{body}</div>
         <button onClick={closeModal}>X</button>
      </div>
   );
}
