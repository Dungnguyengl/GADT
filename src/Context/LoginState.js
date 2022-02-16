import { createContext, useState } from "react";

export const Login = createContext();

const LoginProvider = (props) => {
    const [state, setState] = useState({tableInfo: ""});

     return (
          <Login.Provider value={{state: state, setState}}>
               {props.children}
          </Login.Provider>
     );
}

export default LoginProvider;