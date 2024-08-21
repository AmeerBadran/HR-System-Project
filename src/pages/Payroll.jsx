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

export default Payroll;

