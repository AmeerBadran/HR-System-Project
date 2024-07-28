import RootLayout from "../components/HOC/RootLayout";

function Profile() {
  return (
  <h1 className="text-white">Profile</h1>
  )
}

const WrappedFooter = RootLayout(Profile);

export default WrappedFooter;
