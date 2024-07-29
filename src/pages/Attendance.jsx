import RootLayout from "../components/HOC/RootLayout";
import PagesTitle from "../components/molecule/PagesTitle";
function Attendance() {
  return (
    <div className="w-full">
      <PagesTitle pageTitle={'Attendance'}/>
    </div>
  )
}

const WrappedFooter = RootLayout(Attendance);

export default WrappedFooter;

