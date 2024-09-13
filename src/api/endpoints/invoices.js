import axiosInstance from "../axios";

export const getInvoices = () => {
  return axiosInstance.get('/InvoiceApi/GetInvoices');
};
export const deleteInvoice = (InvoiceID) => {
    return axiosInstance.get(`/InvoiceApi/DeleteInvoice/${InvoiceID}`);
  };
  
