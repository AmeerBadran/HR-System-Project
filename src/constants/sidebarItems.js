import { RiDashboard2Fill } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { FaCalendarCheck } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { LiaFileContractSolid } from "react-icons/lia";
import { FaMicrosoft } from "react-icons/fa";
import { PiInvoiceBold } from "react-icons/pi";

const sidebarItems = [
  { to: "/", icon: RiDashboard2Fill, label: "Dashboard", iconColor: "text-purple-700" },
  { to: "/employees", icon: FaPeopleGroup, label: "Employees", iconColor: "text-amber-500" },
  { to: "/departments", icon: HiBuildingOffice2, label: "Departments", iconColor: "text-[#007bff]" },
  { to: "/attendance", icon: FaCalendarCheck, label: "Attendance", iconColor: "text-green-600" },
  { to: "/payroll", icon: FaMoneyCheckDollar, label: "Payroll", iconColor: "text-amber-500" },
  { to: "/contracts", icon: LiaFileContractSolid, label: "Contracts", iconColor: "text-[#007bff]" },
  { to: "/projects", icon: FaMicrosoft, label: "Projects", iconColor: "text-green-600" },
  { to: "/invoices", icon: PiInvoiceBold, label: "Invoices", iconColor: "text-purple-700" },
];

export default sidebarItems;
