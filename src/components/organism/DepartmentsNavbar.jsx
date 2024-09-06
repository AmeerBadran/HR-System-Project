import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { addDepartment } from '/src/features/departments/departmentsSlice';

const validationSchema = Yup.object({
  name: Yup.string().required('Department Name is required'),
  employees: Yup.number().required('Number of Employees is required').positive('Must be a positive number').integer('Must be an integer'),
  head: Yup.string().required('Head of Department is required'),
  location: Yup.string().required('Location is required'),
  budget: Yup.string().required('Budget is required'),
});

export default function DepartmentsNavbar({ pageTitle }) {
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
        Add Department
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-[#191c24] rounded-lg p-8 w-1/3">
            <h2 className="text-lg font-semibold mb-4 text-white">Add New Department</h2>
            <Formik
              initialValues={{
                name: '',
                employees: '',
                head: '',
                location: '',
                budget: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                const newDepartment = {
                  id: Date.now(), 
                  ...values,
                };

                dispatch(addDepartment(newDepartment));

                console.log('Form data submitted:', values);
                resetForm();
                closeModal();
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Department Name</label>
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
                    <label className="block text-sm font-medium text-gray-500">Number of Employees</label>
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
                    <label className="block text-sm font-medium text-gray-500">Head of Department</label>
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
                    <label className="block text-sm font-medium text-gray-500">Location</label>
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
                    <label className="block text-sm font-medium text-gray-500">Budget</label>
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
                      onClick={closeModal}
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
      )}
    </div>
  );
}

DepartmentsNavbar.propTypes = {
  pageTitle: PropTypes.string,
};
