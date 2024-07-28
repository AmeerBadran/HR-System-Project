import PropTypes from 'prop-types';
import { TfiMenu } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { PiNewspaperFill } from "react-icons/pi";
import { HiArchive } from "react-icons/hi";
import profileImage from "../../assets/images/vaiolet.png";
import tanjiro from "../../assets/images/tanjiro.jpg";
import luffy from "../../assets/images/luffy.jpg";
import naroto from "../../assets/images/naroto.jpg";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Link } from "react-router-dom";
export default function Navbar({ sidebarSize, setSidebarSize }) {
  const changeSize = () => {
    if (sidebarSize === 'big') {
      setSidebarSize('small')
    } else if (sidebarSize === 'small') {
      setSidebarSize('big')
    }
  }
  return (
    <nav className={` bg-[#191c24] h-[70px] flex items-center fixed shadow-lg shadow-[#22222277] px-[16px] ${sidebarSize==='big' ? 'w-calc-100-244' :sidebarSize==='small' ? 'w-calc-100-70' :''} transition-all ease-in-out duration-300`}>

      <div className="flex w-2/5 ">
        <button type='button' className="text-slate-600 ml-0.5" onClick={changeSize}><TfiMenu /></button>
        <form className="w-0 mx-[1.5rem] lg:w-full overflow-hidden">
          <input type="text" className=" border-[1px] border-solid border-[#2c2e33] h-9 w-full rounded-md pl-4 bg-[#191c24] text-white font-medium focus:text-slate-600 text-sm focus:outline-none placeholder:text-slate-500 placeholder:text-sm" placeholder="Search" />
        </form>
      </div>

      <ul className="flex items-center w-3/5 justify-end">
        <li>
          <button type="button" className="flex w-40 text-white items-center gap-1 bg-green-600 rounded-[4px] px-[0.75rem] py-[0.375rem] text-sm mr-4 shadow-md shadow-gray-900 hover:bg-green-700 transition-colors ease-in-out duration-500">
            <FaPlus className="text-xs" />
            Create New Project
          </button>
        </li>
        <li>
          <Menu as="div" className="relative inline-block text-left">
            <div className="border-l border-[#2c2e33]">
              <MenuButton className="">
                <div className=" relative pr-[5px] pt-[2px] mx-4 my-2 ">
                  <MdEmail className="text-white text-xl" />
                  <span className=" absolute w-2 h-2 bg-red-700 rounded-full top-0 right-0 border-2 p-1 border-[#191c24]"></span>
                </div>
              </MenuButton>
            </div>

            <MenuItems transition className="absolute right-0 z-10 mt-4 w-72 origin-top-right rounded-md bg-[#191c24] shadow-xl shadow-zinc-900 ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
              <div className="">
                <MenuItem>
                  <div className="flex items-center p-4 pl-8 text-lg text-white border-b border-gray-700 font-bold">
                    <p>Messages</p>
                  </div>
                </MenuItem>
                <MenuItem>

                  <Link to="/profile" className="flex items-center px-1 py-2 text-sm text-white data-[focus]:bg-[#13151B] border-b border-gray-700" >
                    <div className="pr-[2px] pt-[2px] mx-4 my-2 flex items-center gap-3">
                      <img src={tanjiro} alt="profileImage" className="w-9 h-9 rounded-full shadow-md shadow-gray-950 object-cover " />
                      <div>
                        <p className="text-sm text-white">Ameer Badran</p>
                        <p className="text-sm text-gray-500">1 Minutes ago</p>
                      </div>
                    </div>

                  </Link>
                </MenuItem>

                <MenuItem>

                  <Link to="/profile" className="flex items-center px-1 py-2 text-sm text-white data-[focus]:bg-[#13151B] border-b border-gray-700" >
                    <div className="pr-[2px] pt-[2px] mx-4 my-2 flex items-center gap-3">
                      <img src={luffy} alt="profileImage" className="w-9 h-9 rounded-full shadow-md shadow-gray-950 object-cover " />
                      <div>
                        <p className="text-sm text-white">Ameer Badran</p>
                        <p className="text-sm text-gray-500">1 Minutes ago</p>
                      </div>
                    </div>

                  </Link>
                </MenuItem>
                <MenuItem>

                  <Link to="/profile" className="flex items-center px-1 py-2 text-sm text-white data-[focus]:bg-[#13151B] border-b border-gray-700" >
                    <div className="pr-[2px] pt-[2px] mx-4 my-2 flex items-center gap-3">
                      <img src={profileImage} alt="profileImage" className="w-9 h-9 rounded-full shadow-md shadow-gray-950 object-cover " />
                      <div>
                        <p className="text-sm text-white">Ameer Badran</p>
                        <p className="text-sm text-gray-500">1 Minutes ago</p>
                      </div>
                    </div>

                  </Link>
                </MenuItem>
                <MenuItem>

                  <Link to="/profile" className="flex items-center px-1 py-2 text-sm text-white data-[focus]:bg-[#13151B] border-b border-gray-700" >
                    <div className="pr-[2px] pt-[2px] mx-4 my-2 flex items-center gap-3">
                      <img src={naroto} alt="profileImage" className="w-9 h-9 rounded-full shadow-md shadow-gray-950 object-cover " />
                      <div>
                        <p className="text-sm text-white">Ameer Badran</p>
                        <p className="text-sm text-gray-500">1 Minutes ago</p>
                      </div>
                    </div>

                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/">
                    <div className="flex items-center p-4 pl-8 text-lg text-white w-full justify-center">
                      <p>4 new messages</p>
                    </div>
                  </Link>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </li>
        <li>
          <Menu as="div" className="relative inline-block text-left">
            <div className="border-l border-[#2c2e33]">
              <MenuButton className="">
                <div className=" relative pr-[2px] pt-[2px] mx-4 my-2">
                  <FaBell className="text-white text-xl" />
                  <span className=" absolute w-2 h-2 bg-red-700 rounded-full top-0 right-0 border-2 p-1 border-[#191c24]"></span>
                </div>
              </MenuButton>
            </div>

            <MenuItems transition className="absolute right-0 z-10 mt-4 w-72 origin-top-right rounded-md bg-[#191c24] shadow-xl shadow-zinc-900 ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
              <div className="">
                <MenuItem>
                  <div className="flex items-center p-4 pl-8 text-lg text-white border-b border-gray-700 font-bold">
                    <p>Notifications</p>
                  </div>
                </MenuItem>
                <MenuItem>

                  <Link to="/profile" className="flex items-center px-4 py-2 text-sm text-white data-[focus]:bg-[#13151B] border-b border-gray-700" >
                    <div className="p-2 bg-[#0d0d0d] rounded-full mr-3">
                      <HiArchive className="text-amber-600 text-xl " />
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <p>Leave Requests</p>
                      <p className="text-xs text-gray-500">0 Requests</p>
                    </div>

                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/" className="flex items-center px-4 py-2 text-sm text-white data-[focus]:bg-[#13151B] rounded-b-md" >
                    <div className="pr-[6px] pl-[10px] py-2 bg-[#0d0d0d] rounded-full mr-3">
                      <PiNewspaperFill className="text-lime-500 text-xl " />
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <p>Invoices</p>
                      <p className="text-xs text-gray-500">0 Invoices</p>
                    </div>

                  </Link>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </li>

        <li>
          <Menu as="div" className="relative">
            <div>
              <MenuButton className="">
                <div className="pr-[2px] pt-[2px] mx-4 my-2 flex items-center gap-3">
                  <img src={profileImage} alt="profileImage" className="w-9 h-9 rounded-full shadow-md shadow-gray-950 object-cover " />
                  <p className="text-sm text-white">Ameer Badran</p>
                  <IoMdArrowDropdown className="text-gray-400" />
                </div>
              </MenuButton>
            </div>

            <MenuItems transition className="absolute right-5 z-10 mt-3 w-40 origin-top-right rounded-md bg-[#191c24] shadow-lg shadow-zinc-900 ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
              <div className="">
                <MenuItem>
                  <Link to="/profile" className="flex items-center px-4 py-2 text-sm text-white data-[focus]:bg-[#13151B] border-b border-gray-700" >
                    <div className="p-2 bg-[#0d0d0d] rounded-full mr-3">
                      <CgProfile className="text-green-500 text-xl " />
                    </div>
                    Profile
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/" className="flex items-center px-4 py-2 text-sm text-white data-[focus]:bg-[#13151B] rounded-b-md" >
                    <div className="pr-[6px] pl-[10px] py-2 bg-[#0d0d0d] rounded-full mr-3">
                      <TbLogout className="text-red-700 text-xl " />
                    </div>
                    Log Out
                  </Link>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </li>
      </ul>
    </nav>
  )
}

Navbar.propTypes = {
  sidebarSize: PropTypes.string,
  setSidebarSize: PropTypes.func.isRequired,
};
