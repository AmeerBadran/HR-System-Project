/* eslint-disable react/prop-types */
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addProject } from '../../api/endpoints/projects';

const AddProjectForm = ({ onAddProject, onClose }) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      timeRequired: '',
      status: 'Started',
      attachment: '',
      employees: [{ name: '', image: '' }],
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
      startDate: Yup.date().required('Required'),
      endDate: Yup.date().required('Required'),
      timeRequired: Yup.string().required('Required'),
      status: Yup.string().required('Required'),
      attachment: Yup.string(),
      employees: Yup.array().of(
        Yup.object({
          name: Yup.string().required('Required'),
          image: Yup.string().required('Required'),
        })
      ),
    }),
    onSubmit: (values) => {
      console.log(values);
      addProject(values)
        .then(() => {
          onAddProject(values);
          onClose();
        })
        .catch((err) => console.error("Error while adding project: ", err));  // Check for API errors
    }
  });

  return (
    <div className="bg-white rounded-lg p-6 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">Add New Project</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 rounded bg-gray-200 text-black"
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="text-red-500">{formik.errors.title}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <textarea
            name="description"
            placeholder="Project Description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 rounded bg-gray-200 text-black"
          ></textarea>
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-500">{formik.errors.description}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label>Start Date</label>
          <input
            type="date"
            name="startDate"
            placeholder="Start Date"
            value={formik.values.startDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 rounded bg-gray-200 text-black"
          />
          {formik.touched.startDate && formik.errors.startDate ? (
            <div className="text-red-500">{formik.errors.startDate}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label>End Date</label>
          <input
            type="date"
            name="endDate"
            placeholder="End Date"
            value={formik.values.endDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 rounded bg-gray-200 text-black"
          />
          {formik.touched.endDate && formik.errors.endDate ? (
            <div className="text-red-500">{formik.errors.endDate}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="timeRequired"
            placeholder="Time Required to Complete (e.g., 5 days)"
            value={formik.values.timeRequired}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 rounded bg-gray-200 text-black"
          />
          {formik.touched.timeRequired && formik.errors.timeRequired ? (
            <div className="text-red-500">{formik.errors.timeRequired}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label className="text-black font-bold">Project Status</label>
          <select
            name="status"
            value={formik.values.status}
            onChange={formik.handleChange}
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
            name="attachment"
            placeholder="Attachment URL"
            value={formik.values.attachment}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 rounded bg-gray-200 text-black"
          />
          {formik.touched.attachment && formik.errors.attachment ? (
            <div className="text-red-500">{formik.errors.attachment}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label className="text-black font-bold">Employees</label>
          {formik.values.employees.map((employee, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                name={`employees[${index}].name`}
                placeholder="Employee Name"
                value={employee.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-1/2 p-2 rounded bg-gray-200 text-black mr-2"
              />
              <input
                type="text"
                name={`employees[${index}].image`}
                placeholder="Employee Image URL"
                value={employee.image}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-1/2 p-2 rounded bg-gray-200 text-black"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => formik.setFieldValue('employees', [...formik.values.employees, { name: '', image: '' }])}
            className="text-sm text-blue-600 hover:underline"
          >
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
