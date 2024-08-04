

import PropTypes from "prop-types";

export default function InvoicesNavbar({activeButtonIndex,setActiveButtonIndex}) {
  

  const handleClick = (index) => {
    setActiveButtonIndex(index);
  };
  
  return (
    
    <nav className="text-white flex w-auto items-center">
      
      <ul className="flex border border-[#FFFFFF]  rounded text-white text-sm font-medium  justify-between">
        <li>
          <button
            onClick={() => handleClick(0)}
            className={` p-4 ${
              activeButtonIndex === 0
                ? "bg-[#FFFFFF55] text-white  border-white rounded-l-sm "
                : "border-[#FFFFFF55] text-sm font-medium hover:bg-white hover:text-black transition-colors duration-200 rounded"
            }`}
          >
            Invoice List
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick(1)}
            className={`p-4  ${
              activeButtonIndex === 1
                ? "bg-[#FFFFFF55] text-white "
                : "border-[#FFFFFF55] text-sm font-medium hover:bg-white hover:text-black transition-colors duration-200 rounded"
            }`}
          >
            Simple Invoice
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick(2)}
            className={`p-4 ${
              activeButtonIndex === 2
                ? "bg-[#FFFFFF55] text-white rounded-r-sm"
                : "border-[#FFFFFF55] text-sm font-medium hover:bg-white hover:text-black transition-colors duration-200 rounded"
            }`}
          >
            Email Invoice
          </button>
        </li>
      </ul>
     
    </nav>
   
   
   
   
  );
}
InvoicesNavbar.propTypes = {
  activeButtonIndex: PropTypes.number.isRequired,
  setActiveButtonIndex: PropTypes.func.isRequired
};