/* eslint-disable react/prop-types */
import  { useState } from 'react';

const AddProjectForm = ({ onAddProject, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [timeRequired, setTimeRequired] = useState('');
  const [status, setStatus] = useState('Started');
  const [attachment, setAttachment] = useState('');
  const [employeesCount, setEmployeesCount] = useState(1);
  const [employees, setEmployees] = useState([{ name: '', image: '' }]);

  const handleEmployeeChange = (index, field, value) => {
    const newEmployees = [...employees];
    newEmployees[index][field] = value;
    setEmployees(newEmployees);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProject({ title, description, date, timeRequired, status, attachment, employees });
    setTitle('');
    setDescription('');
    setDate('');
    setTimeRequired('');
    setStatus('Started');
    setAttachment('');
    setEmployeesCount(1);
    setEmployees([{ name: '', image: '' }]);
    onClose();
  };

  const handleAddEmployee = () => {
    setEmployeesCount(employeesCount + 1);
    setEmployees([...employees, { name: '', image: '' }]);
  };

  return (
    <div className="bg-white rounded-lg p-6 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">Add New Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Project Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 rounded bg-gray-200 text-black"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Project Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-2 rounded bg-gray-200 text-black"
          ></textarea>
        </div>
        <div className="mb-4">
          <input
            type="date"
            placeholder="Start Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full p-2 rounded bg-gray-200 text-black"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Time Required to Complete (e.g., 5 days)"
            value={timeRequired}
            onChange={(e) => setTimeRequired(e.target.value)}
            required
            className="w-full p-2 rounded bg-gray-200 text-black"
          />
        </div>
        <div className="mb-4">
          <label className="text-black font-bold">Project Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 rounded bg-gray-200 text-black"
          >
            <option value="Started">Started</option>
            <option value="Approved">Approved</option>
            <option value="Complete">Complete</option>
          </select>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Attachment URL"
            value={attachment}
            onChange={(e) => setAttachment(e.target.value)}
            className="w-full p-2 rounded bg-gray-200 text-black"
          />
        </div>
        <div className="mb-4">
          <label className="text-black font-bold">Employees</label>
          {employees.map((employee, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                placeholder="Employee Name"
                value={employee.name}
                onChange={(e) => handleEmployeeChange(index, 'name', e.target.value)}
                required
                className="w-1/2 p-2 rounded bg-gray-200 text-black mr-2"
              />
              <input
                type="text"
                placeholder="Employee Image URL"
                value={employee.image}
                onChange={(e) => handleEmployeeChange(index, 'image', e.target.value)}
                required
                className="w-1/2 p-2 rounded bg-gray-200 text-black"
              />
            </div>
          ))}
          <button type="button" onClick={handleAddEmployee} className="text-sm text-blue-600 hover:underline">
            Add Another Employee
          </button>
        </div>
        <div className="flex justify-end space-x-2">
          <button type="button" onClick={onClose} className="text-gray-500 hover:text-gray-700">
            Cancel
          </button>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
            Add Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProjectForm;
