import RootLayout from "../components/HOC/RootLayout";
import PagesTitle from "../components/molecule/PagesTitle";
import PayrollCard from "../components/organism/PayrollCard";

function Payroll() {
  return (
    <div className="w-full">
      <PagesTitle pageTitle={'Payroll'}/>. 
   
         <PayrollCard/>
    </div>
  )
}

const WrappedFooter = RootLayout(Payroll);

export default WrappedFooter;

