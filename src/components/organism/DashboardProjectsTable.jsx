import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
//import {  updateDepartment } from '../../features/departments/departmentsSlice';
import { deleteContract, updateContract } from '../../features/contracts/contractsSlice';
import { useSelector, useDispatch } from 'react-redux';

import { projectData } from "../../constants/dashboardProjectTableData"
import DashboardProjectTableRow from "../molecule/DashboardProjectTableRow";
import { leaveRequestsData } from "../../constants/leaveRequestsData"
import AttendanceInRow from '../molecule/AttendanceInRow';
import InvoiceListTableRow from '../molecule/InvoicesListTableRow';
import LeaveRequestRow from '../molecule/LeaveRequestRow';
import DepartmentTableRow from '../molecule/DepartmentTableRow';
import ContractTableRow from '../molecule/ContractTableRow';
import DepartmentEditForm from '../molecule/EditDepartmentForm';
import ContractEditForm from '../molecule/EditContractForm';

import { toast } from 'react-toastify';
import { getInvoices } from '../../api/endpoints/invoices';
import { deleteDep, editDep, getDep } from '../../api/endpoints/departments';
import { getCon } from '../../api/endpoints/contracts';


const projects = ['Project Name', 'Hours', 'Priority', 'Progress'];
const invoices = ["Invoice Name", "Amount", "Invoice Date", "Invoice Due", "Invoice Description","Status","Actions"];
const attendance = ['ID', 'Employee Name', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const leaveRequests = ['No Request', 'Emp ID', 'Emp Name', 'Type', 'Start Date', 'Expiry Date', 'Message', 'State', ''];
const departments = ['Department Name', 'Number of Employees', 'Head of Department', 'Location', 'Budget', 'Actions'];
const contracts = ['Employee Name', 'Contract Type', 'Position', 'Start Date', 'End Date', 'Salary'];

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
  }
];

const DashboardProjectsTable = ({ tableType, day }) => {
  const dispatch = useDispatch();
 // const departmentsData = useSelector((state) => state.departments);
  const contractsData = useSelector((state) => state.contracts);
  const [invoicesData, setinvoicesData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState(null);
  const [departmentsData2, setDepartmentsData2] = useState([]);
  const [contractsData2, setContractsData2] = useState([]);



  useEffect(() => {
    const getDataForTable = async () => {
      try {
        if (tableType === 'invoices') {
          const response = await getInvoices();
          if (response && response.data) {
            setinvoicesData(response.data);
          }
        } else if (tableType === 'departments')
          {const response = await getDep();  
          if (response && response.data) {
            setDepartmentsData2(response.data);
          }

        }else if (tableType === 'contracts')
        {
        const response = await getCon();  
          if (response && response.data) {
            setContractsData2(response.data);
          }

        }
      } catch (error) {
        toast.error(error.message || 'An error occurred while fetching data');
      }
    };

    getDataForTable();
  }, [tableType]);

  const handleEdit = (id) => {
    if (tableType === 'departments') {
      const department = departmentsData2.find((dep) => dep.iD === id);
      console.log(department);
      setEditData(department);
    } else if (tableType === 'contracts') {
      const contract = contractsData.find((con) => con.id === id);
      setEditData(contract);
    }
    setEditId(id);
  };

  const handleSave = (updatedData) => {
    if (tableType === 'departments') {
      console.log("text"+ updatedData)
      editDep(updatedData) ;
    } else if (tableType === 'contracts') {
      dispatch(updateContract({ id: editId, ...updatedData }));
    }
   setEditId(null);
    setEditData(null);
  };

  const handleCancel = () => {
    setEditId(null);
    setEditData(null);
  };

  const handleDelete = (id) => {
    if (tableType === 'departments') {
      deleteDep(id);
    } else if (tableType === 'contracts') {
      dispatch(deleteContract(id));
    }
  };

  let column;
  if (tableType === 'projects') {
    column = projects;
  } else if (tableType === 'attendance in' || tableType === 'attendance out') {
    column = attendance;
  } else if (tableType === 'invoices') {
    column = invoices;
  } else if (tableType === 'leaveRequests') {
    column = leaveRequests;
  } else if (tableType === 'departments') {
    column = departments;
  } else if (tableType === 'contracts') {
    column = contracts;
  }

  return (
    <div className="w-full bg-[#191c24] p-8 rounded-[4px] mt-10">
      {(tableType === 'departments' || tableType === 'contracts') && (
        <div className="mb-8">
          <h5 className="text-white text-lg font-semibold mb-2">
            {tableType === 'departments' ? 'Departments List' : 'Contracts List'}
          </h5>
          <div className="border-b border-gray-600 mb-8 mt-4" />
        </div>
      )}
      <table className="w-full text-white overflow-x-auto">
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
          {tableType === 'invoices' && invoicesData.map((invoice, index) => (
            <InvoiceListTableRow key={index} {...invoice} />
          ))}
          {tableType === 'leaveRequests' && leaveRequestsData.map((leaveRequest, index) => (
            <LeaveRequestRow key={index} {...leaveRequest} />
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
          {tableType === 'departments' && departmentsData2.map((department, index) => (
            <DepartmentTableRow
              key={index}
              {...department}
              onEdit={() => handleEdit(department.iD)}
              onDelete={() => handleDelete(department.iD)}
            />
          ))}
          {tableType === 'contracts' && contractsData2.map((contract, index) => (
            <ContractTableRow
              key={index}
              {...contract}
              onEdit={() => handleEdit(contract.id)}
              onDelete={() => handleDelete(contract.id)}
            />
          ))}
        </tbody>
      </table>
      {editId && editData && (
        <>
          {tableType === 'departments' && (
            <DepartmentEditForm
              initialValues={editData}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          )}
          {tableType === 'contracts' && (
            <ContractEditForm
              initialValues={editData}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          )}
        </>
      )}
    </div>
  );
};

DashboardProjectsTable.propTypes = {
  tableType: PropTypes.string.isRequired,
  day: PropTypes.string,
};

export default DashboardProjectsTable;
