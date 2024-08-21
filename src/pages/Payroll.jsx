import RootLayout from "../components/HOC/RootLayout";
import PagesTitle from "../components/molecule/PagesTitle";
import PayRollCards from "../components/organism/PayRollCards";

function Payroll() {
  return (
    <div className="w-full">
      <PagesTitle pageTitle={'Payroll'} />.
      <PayRollCards />
    </div>
  )
}

const WrappedFooter = RootLayout(Payroll);

export default WrappedFooter;

