
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "../components/HOC/RootLayout";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Employees from "../pages/Employees";
import Departments from "../pages/Departments";
import Attendance from "../pages/Attendance";
import LeaveRequest from "../pages/LeaveRequest";
import Payroll from "../pages/Payroll";
import Contracts from "../pages/Contracts";
import Projects from "../pages/Projects";
import Invoices from "../pages/Invoices";
import LogIn from "../pages/LogIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
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
        path: "employees",
        element: (
          <Employees />
        ),
      },
      {
        path: "departments",
        element:
          <Departments />
      },
      {
        path: "attendance",
        element: (
          <Attendance />
        ),
      },
      {
        path: "leaveRequest",
        element:
          <LeaveRequest />
      },
      {
        path: "payroll",
        element: (
          <Payroll />
        ),
      },
      {
        path: "contracts",
        element:
          <Contracts />
      },
      {
        path: "projects",
        element: (
          <Projects />
        ),
      },
      {
        path: "invoices",
        element:
          <Invoices />
      },
    ],
  },
  {
    path: "/Login",
    element:
      <LogIn />
  },
  {
    path: '*',
    element: <div>
      Not Found
    </div>
  }
],
  {
    basename: "/HR-System-Project",
  }
);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
