import PropTypes from 'prop-types';

const ContractTableRow = ({ 
  id, 
  employeeName, 
  startDate, 
  endDate, 
  position, 
  salary, 
  contractType, 
  onEdit, 
  onDelete, 
  isEditing, 
  onSave, 
  onCancel 
}) => {
  return (
    <tr>
      <td className="border-b border-gray-600 p-3">
        {isEditing ? (
          <input
            type="text"
            defaultValue={employeeName}
            className="bg-white text-black"
          />
        ) : (
          employeeName
        )}
      </td>
      <td className="border-b border-gray-600 p-3">
        {isEditing ? (
          <input
            type="text"
            defaultValue={contractType} 
            className="bg-white text-black"
          />
        ) : (
          contractType 
        )}
      </td>
      <td className="border-b border-gray-600 p-3">
        {isEditing ? (
          <input
            type="text"
            defaultValue={position}
            className="bg-white text-black"
          />
        ) : (
          position
        )}
      </td>
      <td className="border-b border-gray-600 p-3">
        {isEditing ? (
          <input
            type="date"
            defaultValue={startDate}
            className="bg-white text-black"
          />
        ) : (
          startDate
        )}
      </td>
      <td className="border-b border-gray-600 p-3">
        {isEditing ? (
          <input
            type="date"
            defaultValue={endDate}
            className="bg-white text-black"
          />
        ) : (
          endDate
        )}
      </td>
      <td className="border-b border-gray-600 p-3">
        {isEditing ? (
          <input
            type="number"
            defaultValue={salary}
            className="bg-white text-black"
          />
        ) : (
          salary
        )}
      </td>
      <td className="border-b border-gray-600 p-3  space-x-3">
        {isEditing ? (
          <>
            <button onClick={onSave} className="bg-gradient-to-r to-[#d41459] from-[#911a6c] text-white px-2 py-1 rounded">Save</button>
            <button onClick={onCancel} className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-2 py-1 rounded">Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => onEdit(id)} className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
            <button onClick={() => onDelete(id)} className="bg-gradient-to-r to-[#d41459] from-[#911a6c] text-white px-2 py-1 rounded">Delete</button>
          </>
        )}
      </td>
    </tr>
  );
};

ContractTableRow.propTypes = {
  id: PropTypes.string.isRequired,
  employeeName: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  salary: PropTypes.number.isRequired,
  contractType: PropTypes.string.isRequired, 
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ContractTableRow;
