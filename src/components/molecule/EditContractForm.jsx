import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  employeeName: Yup.string().required('Employee Name is required'),
  contractType: Yup.string().required('Contract Type is required'),
  position: Yup.string().required('Position is required'),
  startDate: Yup.date().required('Start Date is required'),
  endDate: Yup.date().required('End Date is required'),
  salary: Yup.number()
    .required('Salary is required')
    .positive('Must be a positive number'),
});

const ContractEditForm = ({ initialValues, onSave, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#191c24] rounded-lg p-8 w-1/3">
        <h2 className="text-lg font-semibold mb-4 text-white">Edit Contract</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            onSave(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-500">
                  Employee Name
                </label>
                <Field
                  type="text"
                  name="employeeName"
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
                {errors.employeeName && touched.employeeName ? (
                  <div className="text-[#d41459] text-sm">{errors.employeeName}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-500">
                  Contract Type
                </label>
                <Field
                  type="text"
                  name="contractType"
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
                {errors.contractType && touched.contractType ? (
                  <div className="text-[#d41459] text-sm">{errors.contractType}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-500">
                  Position
                </label>
                <Field
                  type="text"
                  name="position"
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
                {errors.position && touched.position ? (
                  <div className="text-[#d41459] text-sm">{errors.position}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-500">
                  Start Date
                </label>
                <Field
                  type="date"
                  name="startDate"
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
                {errors.startDate && touched.startDate ? (
                  <div className="text-[#d41459] text-sm">{errors.startDate}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-500">
                  End Date
                </label>
                <Field
                  type="date"
                  name="endDate"
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
                {errors.endDate && touched.endDate ? (
                  <div className="text-[#d41459] text-sm">{errors.endDate}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-500">
                  Salary
                </label>
                <Field
                  type="number"
                  name="salary"
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
                {errors.salary && touched.salary ? (
                  <div className="text-[#d41459] text-sm">{errors.salary}</div>
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

ContractEditForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ContractEditForm;
