

import PropTypes from "prop-types";

export default function InvoicesNavbar({activeButtonIndex,setActiveButtonIndex}) {
  

  const handleClick = (index) => {
    setActiveButtonIndex(index);
  };
  
  return (
    
    <nav className="text-white flex w-auto gap-[760px]  items-center">
      
      <ul className="flex border border-[#FFFFFF55]  rounded text-white text-sm font-medium   w-[24rem] justify-between">
        <li>
          <button
            onClick={() => handleClick(0)}
            className={`px-5 py-4  ${
              activeButtonIndex === 0
                ? "bg-[#FFFFFF55] text-white border-r-2 border-r-white "
                : "border-[#FFFFFF55] text-sm font-medium hover:bg-white hover:text-black transition-colors duration-200 rounded"
            }`}
          >
            Invoice List
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick(1)}
            className={`px-[1.61rem] py-4  ${
              activeButtonIndex === 1
                ? "bg-[#FFFFFF55] text-white border-x-2 border-x-white"
                : "border-[#FFFFFF55] text-sm font-medium hover:bg-white hover:text-black transition-colors duration-200 rounded"
            }`}
          >
            Simple Invoice
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick(2)}
            className={`px-5 py-4 ${
              activeButtonIndex === 2
                ? "bg-[#FFFFFF55] text-white border-l-2 border-l-white"
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