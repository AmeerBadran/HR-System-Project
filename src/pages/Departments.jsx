import PagesTitle from "../components/molecule/PagesTitle";
import DashboardProjectsTable from "../components/organism/DashboardProjectsTable";
import { useSelector } from 'react-redux';

function Departments() {
  const departmentsData = useSelector((state) => state.departments);

  return (
    <div className="w-full">
      <PagesTitle pageTitle="Departments" />
      <DashboardProjectsTable tableType="departments" departmentsData={departmentsData} />
    </div>
  );
}

export default Departments;
