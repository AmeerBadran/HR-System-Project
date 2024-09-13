import axiosInstance from "../axios";

export const getEmployees = () => {
  return axiosInstance.get('/EmployeeApi/GetEmployees');
};