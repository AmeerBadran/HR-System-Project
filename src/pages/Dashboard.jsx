import RootLayout from "../components/HOC/RootLayout";
import PagesTitle from "../components/molecule/PagesTitle";

function Dashboard() {
  return (
    <div className="w-full">
      <PagesTitle pageTitle={'Dashboard'}/>
    </div>
  )
}

const WrappedFooter = RootLayout(Dashboard);

export default WrappedFooter;

