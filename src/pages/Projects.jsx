import RootLayout from "../components/HOC/RootLayout";
import PagesTitle from "../components/molecule/PagesTitle";
function Projects() {
  return (
    <div className="w-full ">
      <PagesTitle pageTitle={'Projects'}/>
    </div>
  )
}

const WrappedFooter = RootLayout(Projects);

export default WrappedFooter;

