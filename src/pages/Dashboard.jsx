import PagesTitle from "../components/molecule/PagesTitle";
import dashboardCardsData from "../constants/dashboardCardsData";
import DashboardCard from "../components/molecule/DashboardCard";
import DashboardChart from "../components/organism/DashboardChart";
import TransactionItem from "../components/atoms/TransactionItem";
import DashboardProjectsTable from "../components/organism/DashboardProjectsTable";
import PaginationRounded from "../components/molecule/PaginationRounded";
import Searchbar from "../components/atoms/Searchbar";

function Dashboard() {
  const handlePageChange = (page) => {
    console.log('Selected Page:', page);
  };

  const handleFilter = (value) => {
    console.log('Selected Page:', value.name);
  };

  return (
    <div className="w-full">
      <PagesTitle pageTitle="Dashboard" />
      <div className="w-full gap-8 grid xl:grid-cols-4 md:grid-cols-2 py-[1.5rem]">
        {dashboardCardsData.map((card, index) => (
          <DashboardCard
            key={index}
            title={card.title}
            value={card.value}
            icon={card.icon}
            bgColor={card.bgColor}
          />
        ))}
      </div>
      <div className="w-full grid 2md:grid-cols-3 grid-cols-1 gap-x-0 2md:gap-x-8 gap-y-8 2md:gap-y-0">
        <div className="w-full bg-[#191c24] p-6 rounded-[4px] h-[520px] overflow-y-auto ">
          <h1 className="text-xl text-white font-semibold">Transaction History</h1>
          <DashboardChart />
          <TransactionItem
            title="Transfer to Paypal"
            date="07 Jan 2019, 09:12AM"
            amount="$236"
          />
          <TransactionItem
            title="Transfer to Paypal"
            date="07 Jan 2019, 09:12AM"
            amount="$236"
          />
        </div>
        <div className="w-full bg-[#191c24] px-6 pt-4 rounded-[4px] col-span-2  h-[520px] overflow-y-auto scroll-bar scroll-p-0">
          <div className="text-white p-4 text-xl font-medium mb-5 border-b-2 border-gray-400">
            <h5>Active Projects</h5>
          </div>
          <DashboardProjectsTable tableType={'projects'} />
        </div>
      </div>
      <div className="w-full bg-[#191c24] px-6 pt-4 rounded-[4px] mt-8 pb-7 overflow-y-auto scroll-bar scroll-p-0">
        <div className="text-white p-4 text-xl font-medium mb-5 border-b-2 border-gray-400 flex justify-between items-center">
          <h5>Leave Requests</h5>
          <Searchbar filterFor={'forLeaveRequest'} onSelectValue={handleFilter} />
        </div>
        <DashboardProjectsTable tableType={'leaveRequests'} />
        <PaginationRounded count={8} onPageChange={handlePageChange} />

      </div>
    </div>
  );
}


export default Dashboard;
