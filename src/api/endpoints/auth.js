import axiosInstance from "../axios";

export const logIn = (logInData) => {
  return axiosInstance.get(`/EmployeeApi/GetAuth/${logInData.name}/${logInData.password}`);
};
