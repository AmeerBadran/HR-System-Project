import RootLayout from "../components/HOC/RootLayout";
import PagesTitle from "../components/molecule/PagesTitle";

function Profile() {
  return (
    <div className="w-full ">
      <PagesTitle pageTitle={'Profile'}/>
    </div>
  )
}

const WrappedFooter = RootLayout(Profile);

export default WrappedFooter;
