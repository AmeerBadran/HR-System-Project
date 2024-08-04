import PropTypes from "prop-types";
import Searchbar from "../atoms/Searchbar";
import InvoiceListTable from "./InvoicesListTable";

function InvoicesPages({ activeButtonIndex }) {
  console.log(activeButtonIndex);
  switch (activeButtonIndex) {
    default:
    case 0:
      return (
        <div className="w-full p-4 text-white ">
          
          <div className="bg-[#191c24] px-6 pt-4 rounded-[4px] col-span-2 w-full h-[520px]">
          <div className="text-white p-4 text-xl font-medium mb-5 border-b-2 border-gray-400">
            <h5 className="flex items-center justify-between">Invoice list <Searchbar/> </h5>
          </div>
          <InvoiceListTable/>
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
