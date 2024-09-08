import axiosInstance from "../axios";

export const getLeaveRequests = () => {
  axiosInstance.get('/LeaveRequestApi/GetLeaveRequests')
}

export const getProject = () => {
  axiosInstance.get('/ProjectApi/GetProject')
}
