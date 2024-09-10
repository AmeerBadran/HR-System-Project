import axiosInstance from "../axios";

export const getInvoices = () => {
  return axiosInstance.get('/InvoiceApi/GetInvoices');  // Add return statement
};
export const deleteInvoice = (InvoiceID) => {
    return axiosInstance.get(`/InvoiceApi/DeleteInvoice/${InvoiceID}`);  // Add return statement
  };
  
