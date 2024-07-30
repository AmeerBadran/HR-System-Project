import RootLayout from "../components/HOC/RootLayout";
import PagesTitle from "../components/molecule/PagesTitle";

function Employees() {
  return (
    <div className="w-full ">
      <PagesTitle pageTitle={'Employees'} />
    </div>
  )
}

const WrappedFooter = RootLayout(Employees);

export default WrappedFooter;

