import PropTypes from 'prop-types';
import InvoicesNavbar from '../organism/InvoicesNavbar';
import DepartmentsNavbar from '../organism/DepartmentsNavbar';
import ContractsNavbar from '../organism/ContractsNavbar';

export default function PagesTitle({ pageTitle, setDepartmentsData, setContractsData, setActiveButtonIndex, activeButtonIndex, onAddProjectClick }) {
  return (
    <div className="flex flex-col h-[110px] mobile:flex-row mobile:h-[87px] items-center justify-between w-full bg-gradient-to-r to-[#d41459] from-[#911a6c] rounded-md px-12">
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
      ) : pageTitle === 'Projects' ? (
        <button
          type="button"
          onClick={onAddProjectClick}
          className="border border-[#FFFFFF55] py-[11px] px-5 rounded-full text-white text-sm font-medium hover:bg-white hover:text-black transition-colors duration-200"
        >
          Add Project
        </button>
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
  pageTitle: PropTypes.string,
  activeButtonIndex: PropTypes.number,
  setActiveButtonIndex: PropTypes.func,
  setDepartmentsData: PropTypes.func,
  setContractsData: PropTypes.func,
  onAddProjectClick: PropTypes.func,
};
