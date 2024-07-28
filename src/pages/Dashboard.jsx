import RootLayout from "../components/HOC/RootLayout";

function Dashboard() {
  return (
    <h1 className="text-white">Dashboard</h1>
    )
  }
  
  const WrappedFooter = RootLayout(Dashboard);
  
  export default WrappedFooter;

