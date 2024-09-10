/* eslint-disable react/prop-types */
import { RiDownload2Fill } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { GrMoney } from "react-icons/gr";
import { deleteInvoice } from "../../api/endpoints/invoices";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

const InvoiceListTableRow = ({ invoiceName, amount, invoiceDate, invoiceDue, invoiceDescription, status }) => {
  const handleDelete = (ID)=>{
    deleteInvoice(ID)
  }
  return (
    <tr className="card-body ">

      <td className="border-b border-gray-600 p-3 hover:text-yellow-200">
        <div className='flex '>
          <button className="transition-transform transform hover:scale-105 px-4 py-2 text-white rounded">
            {invoiceName}
          </button>
        </div>
      </td>

      <td className="border-b border-gray-600 p-3 items-center">
        <div className='flex text-center'>
          <GrMoney className='mr-2 text-cyan-400' /> {amount}$
        </div>
      </td>

      <td className="border-b border-gray-600 p-3 items-center">
        <div className='flex items-center'>
          <SlCalender className='mr-2 text-amber-900' /> {formatDate(invoiceDate)} 
        </div>
      </td>

      <td className="border-b border-gray-600 p-3 items-center">
        <div className='flex items-center'>
          <SlCalender className='mr-2 text-amber-400' /> {formatDate(invoiceDue)} 
        </div>
      </td>

      <td className="border-b border-gray-600 p-3 items-center">
        <div className='flex items-center'>
           {invoiceDescription} 
        </div>
      </td>

      <td className="border-b border-gray-600 p-3">
        <span className={`inline-block border ${status === 'Paid' ? 'text-[#08D25B] border-[#08D25B]' : status === 'Unpaid' ? 'text-[#FFAB13] border-[#FFAB13]' : status === 'Delayed' ? 'text-[#EE414A] border-[#EE414A]' : ''} rounded-[4px] px-3 py-1`}>
          {status}
        </span>
      </td>

      <td className="border-b border-gray-600 p-3 justify-end space-x-2">
        <div className='flex space-x-4 '>
          <button title='Download' className='bg-cyan-500 rounded p-1 transition transform hover:scale-110 '><RiDownload2Fill /></button>
          <button title='Send' className='bg-green-500 rounded p-1 transition transform hover:scale-110' ><IoIosSend /></button>
          <button title='Delete' onClick={()=>handleDelete(invoiceName)} className='bg-orange-500 rounded p-1 transition transform hover:scale-110'><MdDelete /></button>
        </div>
      </td>

    </tr>
  );
};

export default InvoiceListTableRow;
