import {createContext, useState, useEffect} from "react";
import lessionData from "../Services/lessionData";

export const Data = createContext();

const DataProvider = (props) => {
     const [state, setState] = useState({
          Giao_vien: {},
          Giao_an: {},
          Nam_hoc: {}
     });
     const [loading, setLoading] = useState(true);
     const [login, setLogin] = useState({
          tableInfo: "",
          isLogin: false
     })

     useEffect(() => {
          if (login.isLogin){
               setLoading(true);
               lessionData(login.tableInfo).then(data => {
                    setState(data);
                    setLoading(false)
               })
          }
     }, [login])

     return (
          <Data.Provider value={{state, loading, login: {login, setLogin}}}>
               {props.children}
          </Data.Provider>
     );
}

export default DataProvider;