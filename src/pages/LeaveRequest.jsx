import RootLayout from "../components/HOC/RootLayout";
import PagesTitle from "../components/molecule/PagesTitle";
function LeaveRequest() {
  return (
    <div className="w-full">
      <PagesTitle pageTitle={'Leave Request'}/>
    </div>
  )
}

const WrappedFooter = RootLayout(LeaveRequest);

export default WrappedFooter;

