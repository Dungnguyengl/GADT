import DataTable from "./DataTable";
import "../styles/Content.css"
import LessonModal from "./LessonModal";

function Content() {
     return ( 
         <div className="content">
              <DataTable />
              <LessonModal />
         </div>
     );
}

export default Content;