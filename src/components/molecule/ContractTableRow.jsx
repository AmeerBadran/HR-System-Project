/* eslint-disable react/prop-types */
const formatDate = (dateString) => {
  const date = new Date(dateString);
  
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};
const ContractTableRow = ({ 
  name, 
  startDate, 
  endDate, 
  position, 
  salary, 
  contractType, 
  isEditing, 
}) => {
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
            defaultValue={ formatDate(startDate)}
            className="bg-white text-black"
          />
        ) : (
          formatDate(startDate)
        )}
      </td>
      <td className="border-b border-gray-600 p-3">
        {isEditing ? (
          <input
            type="date"
            defaultValue={formatDate(endDate)}
            className="bg-white text-black"
          />
        ) : (
          formatDate(endDate)
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
      
    </tr>
  );
};




export default ContractTableRow;
