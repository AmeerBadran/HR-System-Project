import PagesTitle from "../components/molecule/PagesTitle";
import EmployeeCard from "../components/organism/EmployeeCard";
import {
  employeeCardData,
  jobTitleColors,
} from "../constants/employeeCardData";

function Employees() {
  
  const getRandomElement = (arr) => {
    if (arr.length === 0) return "bg-blue-700"; // Handle empty array case
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  };

  return (
    <div className="w-full">
      <PagesTitle pageTitle={"Employees"} />
      <div className="my-4 flex mobile:flex-col md:flex-row flex-wrap gap-2 justify-center">
        {employeeCardData.map((employeeData, index) => {
          return (
            <EmployeeCard
              key={index}
              employee_pfp={employeeData.employee_pfp}
              employee_name={employeeData.employee_name}
              tasks={employeeData.tasks}
              stars={employeeData.stars}
              followers={employeeData.followers}
              job_title={employeeData.job_title}
              employee_description={employeeData.employee_description}
              job_title_bg_color={getRandomElement(jobTitleColors)}
            />
          );
        })}
      </div>
    </div>
  );
}

const WrappedFooter = RootLayout(Employees);

export default WrappedFooter;
