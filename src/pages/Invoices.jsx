import RootLayout from "../components/HOC/RootLayout";
//import PagesTitle from "../components/molecule/PagesTitle";
import InvoicesNavbar from "../components/organism/InvoicesNavbar";
function Invoices() {
  return (
    <div className="w-full">
      <InvoicesNavbar/>
    </div>
  )
}

const WrappedFooter = RootLayout(Invoices);

export default WrappedFooter;

