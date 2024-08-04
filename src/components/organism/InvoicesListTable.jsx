

import { invoiceListData } from "../../constants/invoicesListData";

import InvoiceListTableRow from "../molecule/InvoicesListTableRow";

 
const invoices = ["Employee name ", "Employee Adress","Per hour payment", "Options" ]
const InvoiceListTable = () => {
    
  
  return (
    <table className="table-container sec-table-div w-full border-b border-gray-600 text-white">
      <thead>
        <tr>
          {invoices.map((header, index) => (
            <th key={index} className="border-b border-gray-600 p-3 text-[#637381] text-left">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {invoiceListData.map((invoices, index) => (
          <InvoiceListTableRow key={index} {...invoices} />
        ))}
      </tbody>
    </table>
  );
};



export default InvoiceListTable;
