import PropTypes from 'prop-types';

const ProjectsEmployeeCard = ({ employees, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-4">Project Team</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">X</button>
        </div>
        <div className="flex flex-col items-center">
          {employees.map((employee, index) => (
            <div key={index} className="flex items-center mb-4 w-full">
              <img src={employee.image} alt={employee.name} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <p className="text-lg font-semibold">{employee.name}</p>
                <p className="text-sm text-gray-600">{employee.specialty}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

ProjectsEmployeeCard.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      specialty: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectsEmployeeCard;
