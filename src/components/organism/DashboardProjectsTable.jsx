
import { projectData } from "../../constants/dashboardProjectTableData";

import DashboardProjectTableRow from "../molecule/DashboardProjectTableRow";

 const project = ['Project Name', 'Hours', 'Priority', 'Progress']
  
const DashboardProjectsTable = () => {
  
  
  
   
  
  return (
    <table className="table-container sec-table-div w-full border-b border-gray-600 text-white">
      <thead>
        <tr>
          {project.map((header, index) => (
            <th key={index} className="border-b border-gray-600 p-3 text-[#637381] text-left">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {projectData.map((project, index) => (
          <DashboardProjectTableRow key={index} {...project} />
        ))}
      </tbody>
    </table>
  );
};




export default DashboardProjectsTable;
