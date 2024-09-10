import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  departmentName: Yup.string().required('Department Name is required'),
  numberOfEmployees: Yup.number()
    .required('Number of Employees is required')
    .positive('Must be a positive number')
    .integer('Must be an integer'),
    departmentHead: Yup.string().required('Head of Department is required'),
  location: Yup.string().required('Location is required'),
  budget: Yup.string().required('Budget is required'),
});

const DepartmentEditForm = ({ initialValues, onSave, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#191c24] rounded-lg p-8 w-1/3">
        <h2 className="text-lg font-semibold mb-4 text-white">Edit Department</h2>
        <Formik
        initialValues={{
          name: initialValues.departmentName,
          employees: initialValues.numberOfEmployees,
          head: initialValues.departmentHead,
          location: initialValues.location,
          budget: initialValues.budget,
        }} 
          //initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            onSave(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-500">
                  Department Name
                </label>
                <Field
                  type="text"
                  name="name"
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
                {errors.name && touched.name ? (
                  <div className="text-[#d41459] text-sm">{errors.name}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-500">
                  Number of Employees
                </label>
                <Field
                  type="number"
                  name="employees"
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
                {errors.employees && touched.employees ? (
                  <div className="text-[#d41459] text-sm">{errors.employees}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-500">
                  Head of Department
                </label>
                <Field
                  type="text"
                  name="head"
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
                {errors.head && touched.head ? (
                  <div className="text-[#d41459] text-sm">{errors.head}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-500">
                  Location
                </label>
                <Field
                  type="text"
                  name="location"
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
                {errors.location && touched.location ? (
                  <div className="text-[#d41459] text-sm">{errors.location}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-500">
                  Budget
                </label>
                <Field
                  type="text"
                  name="budget"
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
                {errors.budget && touched.budget ? (
                  <div className="text-[#d41459] text-sm">{errors.budget}</div>
                ) : null}
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={onCancel}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={onSave}
                  className="bg-gradient-to-r to-[#d41459] from-[#911a6c] hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

DepartmentEditForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default DepartmentEditForm;
