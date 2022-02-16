import moment from "moment";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { ModalState } from "../Context/ModalState";
import "../styles/DataItem.scss"

function DataItem({index, data}) {
     const {Mon_hoc_NAME, Loai_giao_an_NAME, Lop_hoc, Tiet_hoc, Ngay_bat_dau_thuc_hien, Tieu_de, Noi_dung, Duong_dan} = data;
     const {state:{setShow}, Link: {setLink}} = useContext(ModalState);
     const link = `http://mangyang.qlga.edu.vn/${Duong_dan}`
     const handleView = () => {
          setShow(true)
          setLink(link)
     }
     return (
          <tr className="dataItem">
               <td>
                    <div>{index + 1}</div>
               </td>
               <td>
                    <div>{Mon_hoc_NAME}</div>
               </td>
               <td>
                    <div>{Loai_giao_an_NAME}</div>
               </td>
               <td>
                    <div>{Lop_hoc}</div>
               </td>
               <td>
                    <div>{Tiet_hoc}</div>
               </td>
               <td className="itemDay">
                    <div>{moment(Ngay_bat_dau_thuc_hien).format('DD/MM/YYYY')}</div>
               </td>
               <td>
                    <div>{Tieu_de} ({Noi_dung})</div>
               </td>
               <td>
                    <div className="btn-group">
                         <Button variant="success" size="sm" onClick={handleView}>Xem</Button>
                    </div>
               </td>
          </tr>
     );
}

export default DataItem;