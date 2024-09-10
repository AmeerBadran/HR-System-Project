import axiosInstance from "../axios";

export const getCon = () => {
    return axiosInstance.get('/ContractApi/GetCont');
};

export const addCon = (conData) => {
    console.log(conData)
    return axiosInstance.get(`/ContractApi/AddCont/${conData.employeeName}/${conData.contractType}/${conData.position}/${conData.salary}/${conData.startDate}/${conData.endDate}`);
};