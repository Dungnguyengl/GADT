import { useContext } from "react";
import { Data } from "../Context/DataContext";
import "../styles/Header.css"

function Header() {
     const {state: {Giao_vien}} = useContext(Data)
     return ( 
          <header className="header">
               <div className="schoolName font-weight-bold">{Giao_vien.Ten_don_vi}</div>
               <div className="teacher">Giáo viên: {Giao_vien.Ten_giao_vien}</div>
          </header>
      );
}

export default Header;