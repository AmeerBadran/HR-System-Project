import { FaPeopleGroup } from "react-icons/fa6";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { FaCalendarCheck } from "react-icons/fa";

import { FaMicrosoft } from "react-icons/fa";

const dashboardCardsData = [
  { title: 'Employees', value: '54', icon: FaPeopleGroup, bgColor: 'bg-orange-600' },
  { title: 'Departments', value: '8', icon: HiBuildingOffice2, bgColor: 'bg-[#007bff]' },
  { title: 'Projects', value: '5', icon: FaMicrosoft, bgColor: 'bg-green-600' },
  { title: 'Attendees', value: '50/54', icon: FaCalendarCheck, bgColor: 'bg-cyan-500' }
];

export default dashboardCardsData;