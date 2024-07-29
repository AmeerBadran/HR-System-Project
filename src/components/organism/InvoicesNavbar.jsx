import { useState } from "react";

export default function InvoicesNavbar() {
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);

  const handleClick = (index) => {
    setActiveButtonIndex(index);
  };

  return (
    <div className="text-white flex w-auto gap-[760px] border-b-2 pb-2 items-center">
      <h1 className="text-2xl">Invoices</h1>
      <ul className="flex  border-2 border-sky-400 rounded w-[24rem] justify-between">
        <li>
          <button
            onClick={() => handleClick(0)}
            className={`px-4 py-2  ${
              activeButtonIndex === 0
                ? "bg-[#4b3176] text-white border-r-2 border-r-white"
                : "bg-black text-white"
            }`}
          >
            Invoice List
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick(1)}
            className={`px-5 py-2  ${
              activeButtonIndex === 1
                ? "bg-[#4b3176] text-white border-x-2 border-x-white"
                : "bg-black text-white"
            }`}
          >
            Simple Invoice
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick(2)}
            className={`px-4 py-2 ${
              activeButtonIndex === 2
                ? "bg-[#4b3176] text-white border-l-2 border-l-white"
                : "bg-black text-white"
            }`}
          >
            Email Invoice
          </button>
        </li>
      </ul>
    </div>
  );
}
