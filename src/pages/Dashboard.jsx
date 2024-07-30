import RootLayout from "../components/HOC/RootLayout";
import PagesTitle from "../components/molecule/PagesTitle";
import dashboardCardsData from "../constants/dashboardCardsData";
import DashboardCard from "../components/molecule/DashboardCard";
import DashboardChart from "../components/organism/DashboardChart";
import TransactionItem from "../components/atoms/TransactionItem";
import DashboardProjectsTable from "../components/organism/DashboardProjectsTable";

function Dashboard() {
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
        <div className="bg-[#191c24] p-6 rounded-[4px] w-full">
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
        <div className="bg-[#191c24] px-6 pt-4 rounded-[4px] col-span-2 w-full h-[520px]">
          <div className="text-white p-4 text-xl font-medium mb-5 border-b-2 border-gray-400">
            <h5>Active Projects</h5>
          </div>
          <DashboardProjectsTable />
        </div>
      </div>
    </div>
  );
}

const WrappedFooter = RootLayout(Dashboard);

export default WrappedFooter;
