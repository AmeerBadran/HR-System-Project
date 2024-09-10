import axiosInstance from "../axios";

export const getDep = () => {
    return axiosInstance.get('/DepartmentApi/GetDep');
};

export const addDep = (depData) => {
    return axiosInstance.get(`/DepartmentApi/AddDep/${depData.name}/${depData.employees}/${depData.head}/${depData.location}/${depData.budget}`);
};

export const deleteDep = (DepId) => {
    return axiosInstance.delete(`/DepartmentApi/DelDep/${DepId}`);
};
export const editDep = (depData) => {
    console.log(depData)
    return axiosInstance.get(`/DepartmentApi/EditDep/${depData.departmentName}/${depData.numberOfEmployees}/${depData.departmentHead}/${depData.location}/${depData.budget}`);
};