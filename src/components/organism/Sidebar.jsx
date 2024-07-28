import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import profileImage from "../../assets/images/vaiolet.png";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { FaCalendarCheck } from "react-icons/fa";
import { HiInbox } from "react-icons/hi2";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { LiaFileContractSolid } from "react-icons/lia";
import { FaMicrosoft } from "react-icons/fa";
import { PiInvoiceBold } from "react-icons/pi";
export default function Sidebar({ sidebarSize }) {
  return (
    <div className={`flex flex-col w-[244px] h-[100vh] bg-[#191c24] fixed bottom-0 top-0 left-0 text-white ${sidebarSize === 'big' ? 'w-[244px]' : sidebarSize === 'small' ? 'w-[70px]' : ''} transition-all ease-in-out duration-300`}>
      <h1 className={` mx-auto  mt-4 bg-gray-300 text-gray-800 font-bold  shadow-inner shadow-gray-700 ${sidebarSize === 'big' ? ' px-3 py-2 tracking-wider text-3xl rounded-2xl' : sidebarSize === 'small' ? ' px-1 py-1 tracking-wide text-xl rounded-xl' : ''} delay-100 transition-all ease-in-out duration-300`}>{sidebarSize === 'big' ? 'HR System ' : sidebarSize === 'small' ? 'HR' : ''}</h1>
      <div className="flex flex-col">
        <div className={`py-3 mb-0 mt-[18px] border-y border-gray-700 ${sidebarSize === 'big' ? 'mx-4 gap-3 pr-[2px] flex items-center' : sidebarSize === 'small' ? 'mx-auto' : ''}`}>

          <img src={profileImage} alt="profileImage" className="w-[35px] h-[35px] rounded-full shadow-md shadow-gray-950 object-cover mx-2" />

          <div className="flex items-center justify-between w-full">
            {sidebarSize === 'big' && <p className="text-lg text-white">Ameer Badran</p>}
          </div>
        </div>
        {sidebarSize === 'big' && <h1 className="ml-6 my-5 w-full text-lg font-semibold text-gray-300">Navigation</h1>}
        <ul className={`${sidebarSize === 'small' && 'mt-5'}`}>
          <li className={` group transition-all duration-500 ${sidebarSize === 'big' ? 'pr-5' : sidebarSize === 'small' ? 'pr-2' : ''}`}>
            <NavLink to="/" className={`flex items-center  py-[6px] w-full rounded-r-full group-hover:bg-[#0F1015] transition-all duration-300 ${sidebarSize === 'big' ? 'px-5' : sidebarSize === 'small' ? 'px-4' : ''}`}>
              <div className="p-[8px] bg-[#4b506844] rounded-full mr-3 group-hover:bg-[#22242E] transition-all duration-500">
                <RiDashboard2Fill className="text-purple-700 text-mg " />
              </div>
              {sidebarSize === 'big' && <p className="text-[#6c7293] group-hover:text-white transition-all duration-300">Dashboard</p>}
            </NavLink>
          </li>
          <li className={` group transition-all duration-500 ${sidebarSize === 'big' ? 'pr-5' : sidebarSize === 'small' ? 'pr-2' : ''}`}>
            <NavLink to="/profile" className={`flex items-center  py-[6px] w-full rounded-r-full group-hover:bg-[#0F1015] transition-all duration-300 ${sidebarSize === 'big' ? 'px-5' : sidebarSize === 'small' ? 'px-4' : ''}`}>
              <div className="p-[8px] bg-[#4b506844] rounded-full mr-3 group-hover:bg-[#22242E] transition-all duration-500">
                <FaPeopleGroup className="text-amber-500 text-mg " />
              </div>
              {sidebarSize === 'big' && <p className="text-[#6c7293] group-hover:text-white transition-all duration-300">Employees</p>}
            </NavLink>
          </li>
          <li className={` group transition-all duration-500 ${sidebarSize === 'big' ? 'pr-5' : sidebarSize === 'small' ? 'pr-3' : ''}`}>
            <NavLink to="/departments" className={`flex items-center  py-[6px] w-full rounded-r-full group-hover:bg-[#0F1015] transition-all duration-300 ${sidebarSize === 'big' ? 'px-5' : sidebarSize === 'small' ? 'px-4' : ''}`}>
              <div className="p-[8px] bg-[#4b506844] rounded-full mr-3 group-hover:bg-[#22242E] transition-all duration-500">
                <HiBuildingOffice2 className="text-[#007bff] text-mg " />
              </div>
              {sidebarSize === 'big' && <p className="text-[#6c7293] group-hover:text-white transition-all duration-300">Departments</p>}
            </NavLink>
          </li>
          <li className={` group transition-all duration-500 ${sidebarSize === 'big' ? 'pr-5' : sidebarSize === 'small' ? 'pr-3' : ''}`}>
            <NavLink to="/attendance" className={`flex items-center  py-[6px] w-full rounded-r-full group-hover:bg-[#0F1015] transition-all duration-300 ${sidebarSize === 'big' ? 'px-5' : sidebarSize === 'small' ? 'px-4' : ''}`}>
              <div className="p-[8px] bg-[#4b506844] rounded-full mr-3 group-hover:bg-[#22242E] transition-all duration-500">
                <FaCalendarCheck className="text-green-600 text-mg " />
              </div>
              {sidebarSize === 'big' && <p className="text-[#6c7293] group-hover:text-white transition-all duration-300">Attendance</p>}
            </NavLink>
          </li>
          <li className={` group transition-all duration-500 ${sidebarSize === 'big' ? 'pr-5' : sidebarSize === 'small' ? 'pr-3' : ''}`}>
            <NavLink to="/leaveRequest" className={`flex items-center  py-[6px] w-full rounded-r-full group-hover:bg-[#0F1015] transition-all duration-300 ${sidebarSize === 'big' ? 'px-5' : sidebarSize === 'small' ? 'px-4' : ''}`}>
              <div className="p-[8px] bg-[#4b506844] rounded-full mr-3 group-hover:bg-[#22242E] transition-all duration-500">
                <HiInbox className="text-purple-700 text-mg " />
              </div>
              {sidebarSize === 'big' && <p className="text-[#6c7293] group-hover:text-white transition-all duration-300">Leave Request</p>}
            </NavLink>
          </li>
          <li className={` group transition-all duration-500 ${sidebarSize === 'big' ? 'pr-5' : sidebarSize === 'small' ? 'pr-3' : ''}`}>
            <NavLink to="/payroll" className={`flex items-center  py-[6px] w-full rounded-r-full group-hover:bg-[#0F1015] transition-all duration-300 ${sidebarSize === 'big' ? 'px-5' : sidebarSize === 'small' ? 'px-4' : ''}`}>
              <div className="p-[8px] bg-[#4b506844] rounded-full mr-3 group-hover:bg-[#22242E] transition-all duration-500">
                <FaMoneyCheckDollar className="text-amber-500 text-mg " />
              </div>
              {sidebarSize === 'big' && <p className="text-[#6c7293] group-hover:text-white transition-all duration-300">Payroll</p>}
            </NavLink>
          </li>
          <li className={` group transition-all duration-500 ${sidebarSize === 'big' ? 'pr-5' : sidebarSize === 'small' ? 'pr-3' : ''}`}>
            <NavLink to="/contracts" className={`flex items-center  py-[6px] w-full rounded-r-full group-hover:bg-[#0F1015] transition-all duration-300 ${sidebarSize === 'big' ? 'px-5' : sidebarSize === 'small' ? 'px-4' : ''}`}>
              <div className="p-[8px] bg-[#4b506844] rounded-full mr-3 group-hover:bg-[#22242E] transition-all duration-500">
                <LiaFileContractSolid className="text-[#007bff] text-mg " />
              </div>
              {sidebarSize === 'big' && <p className="text-[#6c7293] group-hover:text-white transition-all duration-300">Contracts</p>}
            </NavLink>
          </li>
          <li className={` group transition-all duration-500 ${sidebarSize === 'big' ? 'pr-5' : sidebarSize === 'small' ? 'pr-3' : ''}`}>
            <NavLink to="/projects" className={`flex items-center  py-[6px] w-full rounded-r-full group-hover:bg-[#0F1015] transition-all duration-300 ${sidebarSize === 'big' ? 'px-5' : sidebarSize === 'small' ? 'px-4' : ''}`}>
              <div className="p-[8px] bg-[#4b506844] rounded-full mr-3 group-hover:bg-[#22242E] transition-all duration-500">
                <FaMicrosoft className="text-green-600 text-mg " />
              </div>
              {sidebarSize === 'big' && <p className="text-[#6c7293] group-hover:text-white transition-all duration-300">Projects</p>}
            </NavLink>
          </li>
          <li className={` group transition-all duration-500 ${sidebarSize === 'big' ? 'pr-5' : sidebarSize === 'small' ? 'pr-3' : ''}`}>
            <NavLink to="/invoices" className={`flex items-center  py-[6px] w-full rounded-r-full group-hover:bg-[#0F1015] transition-all duration-300 ${sidebarSize === 'big' ? 'px-5' : sidebarSize === 'small' ? 'px-4' : ''}`}>
              <div className="p-[8px] bg-[#4b506844] rounded-full mr-3 group-hover:bg-[#22242E] transition-all duration-500">
                <PiInvoiceBold className="text-purple-700 text-mg " />
              </div>
              {sidebarSize === 'big' && <p className="text-[#6c7293] group-hover:text-white transition-all duration-300">Invoices</p>}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  sidebarSize: PropTypes.string,
};
