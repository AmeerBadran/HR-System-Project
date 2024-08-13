
import PropTypes from 'prop-types';


const DepartmentTableRow = ({ id, name, employees, head, location, budget, onEdit, onDelete, isEditing, onSave, onCancel }) => {
 
  return (
    <tr>
      <td className="border-b border-gray-600 p-3">
        {isEditing ? (
          <input
            type="text"
            defaultValue={name}
            className="bg-white text-black"
          />
        ) : (
          name
        )}
      </td>
      <td className="border-b border-gray-600 p-3">
        {isEditing ? (
          <input
            type="number"
            defaultValue={employees}
            className="bg-white text-black"
          />
        ) : (
          employees
        )}
      </td>
      <td className="border-b border-gray-600 p-3">
        {isEditing ? (
          <input
            type="text"
            defaultValue={head}
            className="bg-white text-black"
          />
        ) : (
          head
        )}
      </td>
      <td className="border-b border-gray-600 p-3">
        {isEditing ? (
          <input
            type="text"
            defaultValue={location}
            className="bg-white text-black"
          />
        ) : (
          location
        )}
      </td>
      <td className="border-b border-gray-600 p-3">
        {isEditing ? (
          <input
            type="number"
            defaultValue={budget}
            className="bg-white text-black"
          />
        ) : (
          budget
        )}
      </td>
      <td className="border-b border-gray-600 p-3 space-x-2">
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
DepartmentTableRow.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  employees: PropTypes.number.isRequired,
  head: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  budget: PropTypes.number.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default DepartmentTableRow;