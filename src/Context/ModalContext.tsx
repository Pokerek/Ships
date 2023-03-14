import { createContext, useState } from 'react';

type props = {
   children: JSX.Element;
};

type Modal = {
   isOpen: boolean;
   body: JSX.Element;
   openModal: (body: JSX.Element) => void;
   closeModal: () => void;
};

const INIT_BODY = <div></div>;

export const ModalContext = createContext<Modal | null>(null);

export function ModalProvider({ children }: props) {
   const [isOpen, setIsOpen] = useState(false);
   const [body, setBody] = useState<JSX.Element>(INIT_BODY);

   const closeModal = () => {
      setBody(INIT_BODY);
      setIsOpen(false);
   };

   const openModal = (body: JSX.Element) => {
      setBody(body);
      setIsOpen(true);
   };

   return (
      <ModalContext.Provider
         value={{
            isOpen,
            body,
            openModal,
            closeModal
         }}
      >
         {children}
      </ModalContext.Provider>
   );
}
