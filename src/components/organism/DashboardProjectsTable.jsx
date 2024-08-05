import PropTypes from 'prop-types';
import { projectData } from "../../constants/dashboardProjectTableData";
import { invoiceListData } from "../../constants/invoicesListData";
import DashboardProjectTableRow from "../molecule/DashboardProjectTableRow";
import AttendanceInRow from '../molecule/AttendanceInRow';
import InvoiceListTableRow from '../molecule/InvoicesListTableRow';

const projects = ['Project Name', 'Hours', 'Priority', 'Progress']
const invoices = ["Employee name ", "Employee Adress", "Per hour payment", "Condition", " Options"]
const attendance = ['id', 'Employee Name', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']



const fackData = [
  {
    id: '011',
    name: 'Ameer',
    attendance: {
      Sunday: { checkIn: '08:30', checkOut: '17:30' },
      Monday: { checkIn: '', checkOut: '' },
      Tuesday: { checkIn: '08:30', checkOut: '17:30' },
      Wednesday: { checkIn: '', checkOut: '' },
      Thursday: { checkIn: '08:30', checkOut: '17:30' },
      Friday: { checkIn: '', checkOut: '' },
      Saturday: { checkIn: '08:30', checkOut: '17:30' }
    }
  },
  {
    id: '012',
    name: 'Mohanad',
    attendance: {
      Sunday: { checkIn: '', checkOut: '' },
      Monday: { checkIn: '08:30', checkOut: '17:30' },
      Tuesday: { checkIn: '', checkOut: '' },
      Wednesday: { checkIn: '08:30', checkOut: '17:30' },
      Thursday: { checkIn: '', checkOut: '' },
      Friday: { checkIn: '08:30', checkOut: '17:30' },
      Saturday: { checkIn: '', checkOut: '' }
    }
  },
  {
    id: '013',
    name: 'Mohmoud',
    attendance: {
      Sunday: { checkIn: '08:30', checkOut: '17:30' },
      Monday: { checkIn: '08:30', checkOut: '17:30' },
      Tuesday: { checkIn: '', checkOut: '' },
      Wednesday: { checkIn: '08:30', checkOut: '17:30' },
      Thursday: { checkIn: '', checkOut: '' },
      Friday: { checkIn: '', checkOut: '' },
      Saturday: { checkIn: '08:30', checkOut: '17:30' }
    }
  },
  {
    id: '014',
    name: 'Bayan',
    attendance: {
      Sunday: { checkIn: '', checkOut: '' },
      Monday: { checkIn: '', checkOut: '' },
      Tuesday: { checkIn: '08:30', checkOut: '17:30' },
      Wednesday: { checkIn: '', checkOut: '' },
      Thursday: { checkIn: '08:30', checkOut: '17:30' },
      Friday: { checkIn: '', checkOut: '' },
      Saturday: { checkIn: '', checkOut: '' }
    }
  },
  {
    id: '015',
    name: 'Abd',
    attendance: {
      Sunday: { checkIn: '08:30', checkOut: '17:30' },
      Monday: { checkIn: '08:30', checkOut: '17:30' },
      Tuesday: { checkIn: '08:30', checkOut: '17:30' },
      Wednesday: { checkIn: '', checkOut: '' },
      Thursday: { checkIn: '', checkOut: '' },
      Friday: { checkIn: '08:30', checkOut: '17:30' },
      Saturday: { checkIn: '', checkOut: '' }
    }
  },
  {
    id: '011',
    name: 'Ameer',
    attendance: {
      Sunday: { checkIn: '08:30', checkOut: '17:30' },
      Monday: { checkIn: '', checkOut: '' },
      Tuesday: { checkIn: '08:30', checkOut: '17:30' },
      Wednesday: { checkIn: '', checkOut: '' },
      Thursday: { checkIn: '08:30', checkOut: '17:30' },
      Friday: { checkIn: '', checkOut: '' },
      Saturday: { checkIn: '08:30', checkOut: '17:30' }
    }
  },
  {
    id: '012',
    name: 'Mohanad',
    attendance: {
      Sunday: { checkIn: '', checkOut: '' },
      Monday: { checkIn: '08:30', checkOut: '17:30' },
      Tuesday: { checkIn: '', checkOut: '' },
      Wednesday: { checkIn: '08:30', checkOut: '17:30' },
      Thursday: { checkIn: '', checkOut: '' },
      Friday: { checkIn: '08:30', checkOut: '17:30' },
      Saturday: { checkIn: '', checkOut: '' }
    }
  },
  {
    id: '013',
    name: 'Mohmoud',
    attendance: {
      Sunday: { checkIn: '08:30', checkOut: '17:30' },
      Monday: { checkIn: '08:30', checkOut: '17:30' },
      Tuesday: { checkIn: '', checkOut: '' },
      Wednesday: { checkIn: '08:30', checkOut: '17:30' },
      Thursday: { checkIn: '', checkOut: '' },
      Friday: { checkIn: '', checkOut: '' },
      Saturday: { checkIn: '08:30', checkOut: '17:30' }
    }
  },
];


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
        {(tableType === 'attendance in' || tableType === 'attendance out') && fackData.map((empData, index) => (
          <AttendanceInRow
            key={index}
            employeeId={empData.id}
            employeeName={empData.name}
            attendance={empData.attendance}
            dayNow={day}
            checkInOut={tableType}
          />
        ))}
      </tbody>
    </table>
  );
};

DashboardProjectsTable.propTypes = {
  tableType: PropTypes.string.isRequired,
  day: PropTypes.string,
};
export default DashboardProjectsTable;
