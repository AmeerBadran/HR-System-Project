import axiosInstance from "../axios";

export const getProjects = () => {
  return axiosInstance.get('/ProjectApi/GetProject');
};

export const addProject = (newProjectData) => {
  console.log(newProjectData)
  return axiosInstance.get(`/ProjectApi/AddProj/${newProjectData.title}/${newProjectData.description}/${newProjectData.status}/${newProjectData.startDate}/${newProjectData.endDate}/${newProjectData.employees[0].name}/${newProjectData.attachment}`);
};

