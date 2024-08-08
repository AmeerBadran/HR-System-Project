/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaSquareCheck, FaSquareXmark } from "react-icons/fa6";
import PopupModal from '../organism/PopupModal';

const LeaveRequestRow = ({ NoRequest, EmpId, EmpName, Type, StartDate, ExpiryDate, Message, State: initialState }) => {
  const [State, setState] = useState(initialState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType, setActionType] = useState(null);

  const openModal = (type) => {
    setActionType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActionType(null);
  };

  const handleConfirm = () => {
    if (actionType === 'approve') {
      setState('Approved');
    } else if (actionType === 'reject') {
      setState('Rejected');
    }
    closeModal();
  };

  return (
    <tr>
      <td className="border-b border-gray-600 p-3">{NoRequest}</td>
      <td className="border-b border-gray-600 p-3">{EmpId}</td>
      <td className="border-b border-gray-600 p-3">{EmpName}</td>
      <td className="border-b border-gray-600 p-3">{Type}</td>
      <td className="border-b border-gray-600 p-3">{StartDate}</td>
      <td className="border-b border-gray-600 p-3">{ExpiryDate}</td>
      <td className="border-b border-gray-600 p-3">{Message}</td>
      <td className="border-b border-gray-600 p-3">
        <span className={`inline-block border ${State === 'Approved' ? 'text-[#08D25B] border-[#08D25B]' : State === 'Pending' ? 'text-[#FFAB13] border-[#FFAB13]' : State === 'Rejected' ? 'text-[#EE414A] border-[#EE414A]' : ''} rounded-[4px] px-3 py-1`}>
          {State}
        </span>
      </td>

      <td className="border-b border-gray-600 p-3">
        {State === 'Pending' &&
          <div className='flex gap-2'>
            <button type='button' onClick={() => openModal('approve')} title='Accept Request'>
              <FaSquareCheck className='text-green-500 hover:text-green-700 w-5 h-5' />
            </button>
            <button type='button' onClick={() => openModal('reject')} title='Reject Request'>
              <FaSquareXmark className='text-red-500 hover:text-red-700 w-5 h-5' />
            </button>
          </div>
        }
      </td>
      <td>

        <PopupModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onConfirm={handleConfirm}
          message={`Are you sure you want to ${actionType === 'approve' ? 'approve' : 'reject'} this request?`}
        />
      </td>
    </tr>
  );
};

export default LeaveRequestRow;