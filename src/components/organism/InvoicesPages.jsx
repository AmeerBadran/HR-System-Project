import PropTypes from "prop-types";
//import {handleClick } from './InvoicesNavbar'
function InvoicesPages({ activeButtonIndex }) {
  console.log(activeButtonIndex);
  switch (activeButtonIndex) {
    default:
    case 0:
      return (
        <div className="w-full p-4 text-white border-white border-2">
          <h1>Invoice List</h1>
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
