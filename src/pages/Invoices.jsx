import RootLayout from "../components/HOC/RootLayout";
import PagesTitle from "../components/molecule/PagesTitle";

function Invoices() {
  return (
    <div className="w-full">
      <PagesTitle pageTitle={'Invoices'}/>
    </div>
  )
}

const WrappedFooter = RootLayout(Invoices);

export default WrappedFooter;

