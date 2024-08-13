import PropTypes from "prop-types";
import Searchbar from "../atoms/Searchbar";
import DashboardProjectsTable from "./DashboardProjectsTable";
import PaginationRounded from "../molecule/PaginationRounded";

function InvoicesPages({ activeButtonIndex }) {
  const handlePageChange = (page) => {
    console.log('Selected Page:', page);
  };
  switch (activeButtonIndex) {
    default:
    case 0:
      return (
        <div className="w-full text-white ">

          <div className="bg-[#191c24] px-6 py-4 rounded-[4px] col-span-2 w-full overflow-x-auto">
            <div className="text-white p-4 text-xl font-medium mb-5 border-b-2 border-gray-400">
              <h5 className="flex items-center justify-between">Invoice list <Searchbar filterFor={'forInvoices'} /> </h5>
            </div>
            <DashboardProjectsTable tableType={"invoices"} />
            <PaginationRounded count={2} onPageChange={handlePageChange} />
          </div>
        </div>
      );

    case 1:
      return (
        <div className="w-full p-4 text-white border-white border-2">
          <h2>Simple Invoice</h2>
        </div>
      );

    case 2:
      return (
        <div className="w-full p-4 text-white border-white border-2">
          <h2>Email Invoice</h2>
        </div>
      );
  }
}

InvoicesPages.propTypes = {
  activeButtonIndex: PropTypes.number.isRequired,


};

export default InvoicesPages;
