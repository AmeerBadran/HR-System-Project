/* eslint-disable react/prop-types */



const DepartmentTableRow = ({ iD, departmentName, numberOfEmployees, departmentHead, location, budget, onEdit, onDelete, isEditing, onSave, onCancel }) => {
 
  return (
    <tr>
      <td className="border-b border-gray-600 p-3">
        {isEditing ? (
          <input
            type="text"
            defaultValue={departmentName}
            className="bg-white text-black"
          />
        ) : (
          departmentName
        )}
      </td>
      <td className="border-b border-gray-600 p-3">
        {isEditing ? (
          <input
            type="number"
            defaultValue={numberOfEmployees}
            className="bg-white text-black"
          />
        ) : (
          numberOfEmployees
        )}
      </td>
      <td className="border-b border-gray-600 p-3">
        {isEditing ? (
          <input
            type="text"
            defaultValue={departmentHead}
            className="bg-white text-black"
          />
        ) : (
          departmentHead
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
      <td className="border-b  border-gray-600 p-3  space-y-2 space-x-1">
        {isEditing ? (
          <>
             <button onClick={onSave} className="bg-gradient-to-r to-[#d41459] from-[#911a6c] text-white px-2 py-1 rounded">Save</button>
             <button onClick={onCancel} className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-2 py-1 rounded">Cancel</button>
          </>
        ) : (
          <>
             <button onClick={() => onEdit(iD)} className="bg-blue-500 text-white  px-2 py-1 rounded ">Edit</button>
             <button onClick={() => onDelete(iD)} className="bg-gradient-to-r to-[#d41459] from-[#911a6c] text-white px-2 py-1 rounded">Delete</button>
          </>
        )}
      </td>
    </tr>
  );
};



export default DepartmentTableRow;