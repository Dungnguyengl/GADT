import { createContext, useState } from "react";

export const ModalState = createContext();

const ModalStateProvider = (props) => {
     const [show, setShow] = useState(false);
     const [link, setLink] = useState('');
     return (
          <ModalState.Provider value={{
               state:{show, setShow}, 
               Link: {link, setLink}
          }}>
               {props.children}
          </ModalState.Provider>
     );
}

export default ModalStateProvider;