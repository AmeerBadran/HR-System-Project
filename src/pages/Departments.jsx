import RootLayout from "../components/HOC/RootLayout";
import PagesTitle from "../components/molecule/PagesTitle";
function Departments() {
  return (
    <div className="w-full">
      <PagesTitle pageTitle={'Departments'}/>
    </div>
  )
}

const WrappedFooter = RootLayout(Departments);

export default WrappedFooter;

