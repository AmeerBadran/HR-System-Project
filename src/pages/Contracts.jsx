import RootLayout from "../components/HOC/RootLayout";
import PagesTitle from "../components/molecule/PagesTitle";
function Contracts() {
  return (
    <div className="w-full ">
      <PagesTitle pageTitle={'Contracts'}/>
    </div>
  )
}

const WrappedFooter = RootLayout(Contracts);

export default WrappedFooter;

