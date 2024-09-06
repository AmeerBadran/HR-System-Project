import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { addContract } from '/src/features/contracts/contractsSlice'; 

const validationSchema = Yup.object({
  employeeName: Yup.string().required('Employee Name is required'),
  contractType: Yup.string().required('Contract Type is required'),
  position: Yup.string().required('Position is required'),
  salary: Yup.number().required('Salary is required').positive('Must be a positive number'),
  startDate: Yup.date().required('Start Date is required'),
  endDate: Yup.date().required('End Date is required'),
});

export default function ContractsNavbar({ pageTitle }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-between w-full bg-gradient-to-r to-[#d41459] from-[#911a6c] rounded-md px-12 h-[87px]">
      <h1 className="text-white text-2xl font-semibold">{pageTitle}</h1>
      <button
        onClick={openModal}
        type="button"
        className="border border-[#FFFFFF55] py-[11px] px-5 rounded-full text-white text-sm font-medium hover:bg-white hover:text-black transition-colors duration-200"
      >
        Add Contract
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-[#191c24] rounded-lg p-8 w-1/3">
            <h2 className="text-lg font-semibold mb-4 text-white">Add New Contract</h2>
            <Formik
              initialValues={{
                employeeName: '',
                contractType: '',
                position: '',
                salary: '',
                startDate: '',
                endDate: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                const newContract = {
                  id: Date.now(),
                  ...values,
                };

                dispatch(addContract(newContract));

                console.log('Form data submitted:', values);
                resetForm();
                closeModal();
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Employee Name</label>
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
                    <label className="block text-sm font-medium text-gray-500">Contract Type</label>
                    <Field
                      as="select"
                      name="contractType"
                      className="mt-1 p-2 border border-gray-300 rounded w-full"
                    >
                      <option value="">Select Contract Type</option>
                      <option value="Full-Time">Full-Time</option>
                      <option value="Part-Time">Part-Time</option>
                      <option value="Temporary">Temporary</option>
                      <option value="Internship">Internship</option>
                    </Field>
                    {errors.contractType && touched.contractType ? (
                      <div className="text-[#d41459]  text-sm">{errors.contractType}</div>
                    ) : null}
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Position</label>
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
                    <label className="block text-sm font-medium text-gray-500">Salary</label>
                    <Field
                      type="number"
                      name="salary"
                      className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                    {errors.salary && touched.salary ? (
                      <div className="text-[#d41459] text-sm">{errors.salary}</div>
                    ) : null}
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Start Date</label>
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
                    <label className="block text-sm font-medium text-gray-500">End Date</label>
                    <Field
                      type="date"
                      name="endDate"
                      className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                    {errors.endDate && touched.endDate ? (
                      <div className="text-[#d41459] text-sm">{errors.endDate}</div>
                    ) : null}
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-gradient-to-r to-[#d41459] from-[#911a6c] hover:bg-white text-white font-bold py-2 px-4 rounded"
                    >
                      Save
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
}

ContractsNavbar.propTypes = {
  pageTitle: PropTypes.string,
};
