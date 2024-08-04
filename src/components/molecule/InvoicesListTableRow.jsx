import PropTypes from 'prop-types';
import { IoLocationSharp } from "react-icons/io5";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { RiDownload2Fill } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const InvoiceListTableRow = ({ name, Salary, Adress,condition }) => {
  return (
    <tr className="card-body">

      <td className="border-b border-gray-600 p-3 hover:text-yellow-200">
        <div className='flex'>
            <button className="transition-transform transform hover:scale-105 px-4 py-2 text-white rounded">
          {name}
        </button>
        </div>
        
      </td>

      <td className="border-b border-gray-600 p-3  items-center">
        <div className='flex items-center'>
        <IoLocationSharp className='mr-2' /> {Adress}    
        </div>
        
      </td>

      <td className="border-b border-gray-600 p-3  items-center">
        <div className='flex items-center'>
            <FaMoneyCheckDollar className='mr-2' /> ${Salary} per hour
        </div>

        
      </td>

      <td className="border-b border-gray-600 p-3">
        <span className={`inline-block border ${condition === 'Paid' ? 'text-[#08D25B] border-[#08D25B]':condition==='Unpaid' ? 'text-[#FFAB13] border-[#FFAB13]': condition==='Delayed' ? 'text-[#EE414A] border-[#EE414A]':''} rounded-[4px] px-3 py-1`}>
          {condition}
        </span>
      </td>

      <td className="border-b border-gray-600 p-3  justify-end space-x-2">
        <div className='flex space-x-4 '>
           <button title='Download' className='bg-cyan-500 rounded p-1 transition transform hover:scale-110 '><RiDownload2Fill /></button>
           <button title='Send' className='bg-teal-300 rounded p-1 transition transform hover:scale-110' ><IoIosSend /></button>
           <button title='Delete' className='bg-orange-500 rounded p-1 transition transform hover:scale-110'><MdDelete /></button>  
        </div>
       
      </td>
     
    </tr>
  );
};

InvoiceListTableRow.propTypes = {
  name: PropTypes.string.isRequired,
  Salary: PropTypes.number.isRequired,
  Adress: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
};

export default InvoiceListTableRow;
