import { useEffect, useState } from "react";
import PagesTitle from "../components/molecule/PagesTitle";
import EmployeeCard from "../components/organism/EmployeeCard";

import mahmoudPFP from "../assets/images/mahmoud.jpg";
import {
  jobTitleColors,
} from "../constants/employeeCardData";
import { getEmployees } from "../api/endpoints/employee";
import { toast } from "react-toastify";

function Employees() {
  const [employeesData, setEmployeesData] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await getEmployees(); // Wait for the API call to resolve
        setEmployeesData(response.data); // Set the fetched data to state
        console.log(response);
      } catch (error) {
        toast.error(error.message || "An error occurred"); // Display an error message
      }
    };

    fetchEmployees(); // Call the async function
  }, []);

  const getRandomElement = (arr) => {
    if (arr.length === 0) return "bg-blue-700"; // Handle empty array case
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  };

  return (
    <div className="w-full">
      <PagesTitle pageTitle={"Employees"} />
      <div className="my-4 flex mobile:flex-col md:flex-row flex-wrap gap-2 justify-center">
        {employeesData.map((employee, index) => {
          return (
            <EmployeeCard
              key={index}
              employee_pfp={mahmoudPFP}
              employee_name={employee.name}
              tasks={10}
              stars={14}
              followers={200}
              job_title={employee.specialty}
              address={employee.address}
              email={employee.email}
              phone={employee.phone}
              job_title_bg_color={getRandomElement(jobTitleColors)}
            />
          );
        })}
      </div>
    </div>
  );
}


export default Employees;
