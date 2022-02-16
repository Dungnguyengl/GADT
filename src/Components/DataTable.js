import { useContext } from "react";
import { Table} from "react-bootstrap";
import { Data } from "../Context/DataContext";
import '../styles/DataTable.css'
import DataWeek from "./DataWeek";

function DataTable() {
     const {state:{Giao_an:{GiaoAn_Data}}} = useContext(Data);
     console.log(GiaoAn_Data);
     return ( 
          <Table bordered striped className="dataTable align-middle">
              <thead>
                   <tr className="heading">
                        <th>#</th>
                        <th>Subject</th>
                        <th>Type</th>
                        <th>Class</th>
                        <th>Lesson</th>
                        <th>Time</th>
                        <th>Thematic</th>
                        <th></th>
                   </tr>
              </thead>
              {GiaoAn_Data.map(data => (
                   <DataWeek key={data.$id} giaoAn={data} />
              ))}
         </Table>
      );
}

export default DataTable;