// src/pages/Projects.jsx

import { useState } from 'react';
import PagesTitle from "../components/molecule/PagesTitle";
import AddProjectForm from "../components/organism/AddProjectForm";
import EmployeeCard from "../components/molecule/ProjectsEmployeeCard";
//import { IoIosMore } from "react-icons/io";
//import { FaClock, FaEdit, FaTrash } from "react-icons/fa";
//import { ProgressBar } from 'react-bootstrap';
import { projectsData } from "../constants/projectsData";

function Projects() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [projects, setProjects] = useState(projectsData);
  const [showAddProjectForm, setShowAddProjectForm] = useState(false);
  const [selectedEmployees, setSelectedEmployees] = useState(null);

  const addProject = (project) => {
    setProjects([...projects, project]);
    setShowAddProjectForm(false);
  };

  const handleAddProjectClick = () => {
    setShowAddProjectForm(!showAddProjectForm);
  };

  const handleEmployeeClick = (employees) => {
    setSelectedEmployees(employees);
  };

  const handleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  return (
    <div className="w-full relative">
      <PagesTitle pageTitle={'Projects'} onAddProjectClick={handleAddProjectClick} />
      {showAddProjectForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <AddProjectForm onAddProject={addProject} onClose={() => setShowAddProjectForm(false)} />
        </div>
      )}
      {selectedEmployees && (
        <EmployeeCard
          employees={selectedEmployees}
          onClose={() => setSelectedEmployees(null)}
        />
      )}
      <div className="grid xl:grid-cols-3 2md:grid-cols-2 mt-8 gap-8 text-white">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#191c24] h-auto rounded-md p-6 flex flex-col justify-between relative">
            <div className="flex justify-between">
              <div className="flex">
                <div className="w-24 h-24 min-w-24 bg-yellow-500 rounded-md flex justify-center items-center">
                  <img className="rounded-md border-2 shadow-lg shadow-[#33333344] w-24 h-24" src={project.employees[0].image} alt="" />
                </div>
                <div className="flex flex-col ml-4 justify-between pb-1">
                  <h1 className="text-xl font-normal">{project.title}</h1>
                  <div className="flex -space-x-3 rtl:space-x-reverse">
                    {project.employees.slice(0, 3).map((employee, empIndex) => (
                      <img
                        key={empIndex}
                        className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800 cursor-pointer"
                        src={employee.image}
                        alt={employee.name}
                        onClick={() => handleEmployeeClick(project.employees)}
                      />
                    ))}
                    {project.employees.length - 3 > 0 &&
                      <a className="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">
                        +{project.employees.length - 3}
                      </a>
                    }
                  </div>
                </div>
              </div>
              <div className="flex space-x-2 relative">
                <button
                  type="button"
                  className="flex bg-gray-700 h-8 w-8 justify-center items-center rounded hover:bg-gray-600"
                  onClick={() => handleDropdown(index)}
                >
                  <IoIosMore className="text-2xl text-gray-100 cursor-pointer" />
                </button>

                {openDropdownIndex === index && (
                  <div className="absolute flex flex-col z-10 bg-gray-800 py-2 rounded right-0 top-9">
                    <button className="flex gap-3 p-3 hover:bg-gray-700">
                      <FaEdit className="text-xl text-blue-600 hover:text-blue-700 cursor-pointer" />
                      <p>Edit</p>
                    </button>
                    <button className="flex gap-3 p-3 hover:bg-gray-700">
                      <FaTrash className="text-xl text-red-600 hover:text-red-700 cursor-pointer" />
                      <p>Delete</p>
                    </button>
                  </div>
                )}
              </div>
            </div>
            <p className="text-gray-300 text-sm mt-4">{project.description}</p>
            <div className="border-t-2 border-black mt-2 mb-4"></div>
            <div className="pt-4 px-4">
              <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Status: <span className="text-green-400 text-sm">{project.status}</span></h1>
                <div className="flex items-center space-x-2 w-1/2">
                  <FaClock className="text-lg text-gray-400" />
                  <ProgressBar now={project.timeRequired} className="w-full h-2 bg-gray-500 rounded " />
                  <span className="text-gray-300 text-sm">{project.timeRequired}%</span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div >
  );
}

export default Projects;
