import PagesTitle from "../components/molecule/PagesTitle";
import DashboardProjectsTable from "../components/organism/DashboardProjectsTable";
import { useSelector } from 'react-redux';

function Contracts() {
  const contractsData = useSelector((state) => state.contracts);

  return (
    <div className="w-full">
      <PagesTitle pageTitle="Contracts" />
      <DashboardProjectsTable tableType="contracts" contractsData={contractsData} />
    </div>
  );
}

export default Contracts;
