import PropTypes from 'prop-types';
import InvoicesNavbar from '../organism/InvoicesNavbar';
import DepartmentsNavbar from '../organism/DepartmentsNavbar';
import ContractsNavbar from '../organism/ContractsNavbar'; 

export default function PagesTitle({ pageTitle, setDepartmentsData, setContractsData, setActiveButtonIndex, activeButtonIndex }) {
  return (
    <div className="flex items-center justify-between w-full bg-gradient-to-r to-[#d41459] from-[#911a6c] rounded-md px-12 h-[87px]">
      <h1 className="text-white text-2xl font-semibold">{pageTitle}</h1>

      {pageTitle === 'Invoices' ? (
        <InvoicesNavbar
          activeButtonIndex={activeButtonIndex}
          setActiveButtonIndex={setActiveButtonIndex}
        />
      ) : pageTitle === 'Departments' ? (
        <DepartmentsNavbar
          activeButtonIndex={activeButtonIndex}
          setActiveButtonIndex={setActiveButtonIndex}
          setDepartmentsData={setDepartmentsData}
        />
      ) : pageTitle === 'Contracts' ? (
        <ContractsNavbar
          activeButtonIndex={activeButtonIndex}
          setActiveButtonIndex={setActiveButtonIndex}
          setContractsData={setContractsData}
        />
      ) : (
        <button
          type="button"
          className="border border-[#FFFFFF55] py-[11px] px-5 rounded-full text-white text-sm font-medium hover:bg-white hover:text-black transition-colors duration-200"
        >
          Page Action...
        </button>
      )}
    </div>
  );
}

PagesTitle.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  activeButtonIndex: PropTypes.number.isRequired,
  setActiveButtonIndex: PropTypes.func.isRequired,
  setDepartmentsData: PropTypes.func.isRequired,
  setContractsData: PropTypes.func,

};
