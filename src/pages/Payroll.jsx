import RootLayout from "../components/HOC/RootLayout";
import PagesTitle from "../components/molecule/PagesTitle";
function Payroll() {
  return (
    <div className="w-full">
      <PagesTitle pageTitle={'Payroll'}/>
    </div>
  )
}

const WrappedFooter = RootLayout(Payroll);

export default WrappedFooter;

