import { useState } from "react";

export default function InvoicesNavbar() {
  const [activeButtonIndex, setActiveButtonIndex] = useState(()=>null);

  const handleClick = (index) => {
    setActiveButtonIndex(index);
  };
  
  return (
    <div className="text-white flex w-auto gap-[760px]  items-center">
      
      <ul className="flex border border-[#FFFFFF55]  rounded-full text-white text-sm font-medium   w-[24rem] justify-between">
        <li>
          <button
            onClick={() => handleClick(0)}
            className={`px-5 py-4  ${
              activeButtonIndex === 0
                ? "bg-[#FFFFFF55] text-white border-r-2 border-r-white rounded-full"
                : "border-[#FFFFFF55] text-sm font-medium hover:bg-white hover:text-black transition-colors duration-200 rounded-full"
            }`}
          >
            Invoice List
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick(1)}
            className={`px-6 py-4  ${
              activeButtonIndex === 1
                ? "bg-[#FFFFFF55] text-white  rounded-full border-x-2 border-x-white"
                : "border-[#FFFFFF55] text-sm font-medium hover:bg-white hover:text-black transition-colors duration-200 rounded-full"
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
                ? "bg-[#FFFFFF55] text-white rounded-full border-l-2 border-l-white"
                : "border-[#FFFFFF55] text-sm font-medium hover:bg-white hover:text-black transition-colors duration-200 rounded-full"
            }`}
          >
            Email Invoice
          </button>
        </li>
      </ul>
    </div>
  );
}
