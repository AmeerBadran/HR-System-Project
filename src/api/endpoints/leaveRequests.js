import axiosInstance from "../axios";

export const getLeaveRequsets = () => {
  axiosInstance.get('/endpoint')
}