import PropTypes from 'prop-types';
import { projectData } from "../../constants/dashboardProjectTableData";
import { invoiceListData } from "../../constants/invoicesListData";
import DashboardProjectTableRow from "../molecule/DashboardProjectTableRow";
import InvoiceListTableRow from '../molecule/InvoicesListTableRow';

const projects = ['Project Name', 'Hours', 'Priority', 'Progress']
const invoices = ["Employee name ", "Employee Adress", "Per hour payment", "Condition", " Options"]
const attendance = ['id', 'Employee Name', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const DashboardProjectsTable = ({ tableType, day }) => {
  let column;
  if (tableType === 'projects') {
    column = projects;
  } else if (tableType === 'attendance in' || tableType === 'attendance out') {
    column = attendance;
  } else if (tableType === 'invoices') {
    column = invoices;
  }
  return (
    <table className="table-container sec-table-div w-full border-b border-gray-600 text-white">
      <thead>
        <tr>
          {column.map((header, index) => (
            <th key={index} className="border-b border-gray-600 p-3 text-[#637381] text-left">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableType === 'projects' && projectData.map((project, index) => (
          <DashboardProjectTableRow key={index} {...project} />
        ))}
        {tableType === 'invoices' && invoiceListData.map((invoices, index) => (
          <InvoiceListTableRow key={index} {...invoices} />
        ))}
      </tbody>
    </table>
  );
};

DashboardProjectsTable.propTypes = {
  tableType: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
};


export default DashboardProjectsTable;
