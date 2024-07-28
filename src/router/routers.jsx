
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Dashboard />
    ),
  },
  {
    path: "profile",
    element:
      <Profile />
  },
  {
    path: '*',
    element: <div>
      Not Found
    </div>
  }
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
