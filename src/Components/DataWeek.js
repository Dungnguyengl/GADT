import DataItem from "./DataItem";
import '../styles/DataWeek.scss'

function DataWeek({giaoAn}) {     
     return (
          <tbody className="dataWeek">
               <tr>
                    <td colSpan={8} className="heading">*Week {giaoAn.Tuan_hoc_ID}</td>
               </tr>
               {giaoAn.GiaoAn_Data.map((data, index) => (
                    <DataItem key={data.$id} index={index} data={data} />
               ))}
          </tbody>
     );
}

export default DataWeek;