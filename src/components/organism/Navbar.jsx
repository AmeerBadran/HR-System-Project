import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TfiMenu } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
import { FaBell, FaPlus } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoLogInOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Link } from "react-router-dom";
import { images, messages, notifications } from '../../constants/navbarData';
import MessageItem from '../atoms/MessageItem';
import NotificationItem from '../atoms/NotificationItem';
import user from '../../assets/images/user.png'

export default function Navbar({ sidebarSize, setSidebarSize, isSmallScreen, isHalfScreen }) {
  const [userData, setUserData] = useState(null);
  const changeSize = () => {
    setSidebarSize(sidebarSize === 'big' ? 'small' : 'big');
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('userData');
    setUserData(null);
  };

  return (
    <nav className={`bg-[#191c24] z-10 h-[70px] flex items-center justify-between fixed shadow-lg shadow-[#22222277] pl-[16px] ${sidebarSize === 'big' ? 'w-calc-100-244' : sidebarSize === 'small' ? 'w-calc-100-70' : ''} transition-all ease-in-out duration-200`}>
      <div className="flex md:w-[100%] w-8">
        {isHalfScreen &&
          <h1 className={`mr-3 text-gray-100 font-bold px-1 py-1 tracking-wide text-2xl`}>
            HR
          </h1>
        }
        <button type='button' className="text-slate-600 ml-0.5 " onClick={changeSize}><TfiMenu /></button>
        <form className="mx-[1rem] lg:w-11/12 w-0 overflow-hidden">
          <input type="text" className="border-[1px] w-3/4 border-solid border-[#2c2e33] h-9 rounded-md pl-4 bg-[#191c24] text-white font-medium focus:text-slate-600 text-sm focus:outline-none placeholder:text-slate-500 placeholder:text-sm" placeholder="Search" />
        </form>
      </div>
      <ul className="flex items-center md:pr-3">
        {!isSmallScreen && (
          <>
            <li>
              <button type="button" className="flex w-40 text-white items-center gap-1 bg-green-600 rounded-[4px] px-[0.75rem] py-[0.375rem] text-sm mr-4 shadow-md shadow-gray-900 hover:bg-green-700 transition-colors ease-in-out duration-300 ">
                <FaPlus className="text-xs" />
                Create New Project
              </button>
            </li>
            <li>
              <Menu as="div" className="relative inline-block text-left">
                <div className="border-l border-[#2c2e33]">
                  <MenuButton>
                    <div className="relative pr-[5px] pt-[2px] mx-4 my-2">
                      <MdEmail className="text-white text-xl" />
                      <span className="absolute w-2 h-2 bg-red-700 rounded-full top-0 right-0 border-2 p-1 border-[#191c24]"></span>
                    </div>
                  </MenuButton>
                </div>
                <MenuItems transition className="absolute right-0 z-10 mt-4 w-72 origin-top-right rounded-md bg-[#191c24] shadow-xl shadow-zinc-900 ring-1 ring-black ring-opacity-5 transition focus:outline-none">
                  <div>
                    <MenuItem>
                      <div className="flex items-center p-4 pl-8 text-lg text-white border-b border-gray-700 font-bold">
                        <p>Messages</p>
                      </div>
                    </MenuItem>
                    {messages.map((msg, idx) => (
                      <MenuItem key={idx}>
                        <MessageItem img={msg.img} name={msg.name} time={msg.time} />
                      </MenuItem>
                    ))}
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
                  <MenuButton>
                    <div className="relative pr-[2px] pt-[2px] mx-4 my-2">
                      <FaBell className="text-white text-xl" />
                      <span className="absolute w-2 h-2 bg-red-700 rounded-full top-0 right-0 border-2 p-1 border-[#191c24]"></span>
                    </div>
                  </MenuButton>
                </div>
                <MenuItems transition className="absolute right-0 z-10 mt-4 w-72 origin-top-right rounded-md bg-[#191c24] shadow-xl shadow-zinc-900 ring-1 ring-black ring-opacity-5 transition focus:outline-none">
                  <div>
                    <MenuItem>
                      <div className="flex items-center p-4 pl-8 text-lg text-white border-b border-gray-700 font-bold">
                        <p>Notifications</p>
                      </div>
                    </MenuItem>
                    {notifications.map((notif, idx) => (
                      <MenuItem key={idx}>
                        <NotificationItem Icon={notif.icon} color={notif.color} text={notif.text} count={notif.count} />
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>
            </li>
          </>
        )}
        <li>
          <Menu as="div" className="relative">
            <div>
              <MenuButton>
                <div className="pr-[2px] pt-[2px] min-w-44 w-44 my-2 flex items-center ">
                  <img src={userData?.name ? images.profileImage : user} alt="profileImage" className="w-9 h-9 rounded-full shadow-md shadow-gray-950 object-cover ml-1" />
                  <p className="text-sm text-white ml-3 font-medium">{userData?.name && userData.name}</p>
                  <IoMdArrowDropdown className="text-gray-400 text-lg w-6" />
                </div>
              </MenuButton>
            </div>
            <MenuItems transition className="absolute right-5 z-10 mt-3 w-40 origin-top-right rounded-md bg-[#191c24] shadow-lg shadow-zinc-900 ring-1 ring-black ring-opacity-5 transition focus:outline-none">
              <div>
                {isSmallScreen && (
                  <>
                    <div className='flex justify-center'>
                      <MenuItem>
                        <div>
                          <Menu as="div" className="relative inline-block text-left">
                            <div>
                              <MenuButton>
                                <div className="relative pr-[5px] pt-[2px] mx-6 my-2">
                                  <MdEmail className="text-white text-xl" />
                                  <span className="absolute w-2 h-2 bg-red-700 rounded-full top-0 right-0 border-2 p-1 border-[#191c24]"></span>
                                </div>
                              </MenuButton>
                            </div>
                            <MenuItems transition className="absolute right-[-90px] z-10 mt-1 w-72 origin-top-right rounded-md bg-[#191c24] shadow-xl shadow-zinc-900 ring-1 ring-black ring-opacity-5 transition focus:outline-none">
                              <div>
                                <MenuItem>
                                  <div className="flex items-center p-4 pl-8 text-lg text-white border-b border-gray-700 font-bold">
                                    <p>Messages</p>
                                  </div>
                                </MenuItem>
                                {messages.map((msg, idx) => (
                                  <MenuItem key={idx}>
                                    <MessageItem img={msg.img} name={msg.name} time={msg.time} />
                                  </MenuItem>
                                ))}
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
                        </div>
                      </MenuItem>
                      <MenuItem>
                        <div>
                          <Menu as="div" className="relative inline-block text-left">
                            <div className="border-l border-[#2c2e33]">
                              <MenuButton>
                                <div className="relative pr-[2px] pt-[2px] mx-6 my-2">
                                  <FaBell className="text-white text-xl" />
                                  <span className="absolute w-2 h-2 bg-red-700 rounded-full top-0 right-0 border-2 p-1 border-[#191c24]"></span>
                                </div>
                              </MenuButton>
                            </div>
                            <MenuItems transition className="absolute right-[-20px] z-10 mt-1 w-72 origin-top-right rounded-md bg-[#191c24] shadow-xl shadow-zinc-900 ring-1 ring-black ring-opacity-5 transition focus:outline-none">
                              <div>
                                <MenuItem>
                                  <div className="flex items-center p-4 pl-8 text-lg text-white border-b border-gray-700 font-bold">
                                    <p>Notifications</p>
                                  </div>
                                </MenuItem>
                                {notifications.map((notif, idx) => (
                                  <MenuItem key={idx}>
                                    <NotificationItem Icon={notif.icon} color={notif.color} text={notif.text} count={notif.count} />
                                  </MenuItem>
                                ))}
                              </div>
                            </MenuItems>
                          </Menu>
                        </div>
                      </MenuItem>
                    </div>

                    <MenuItem>
                      <button type="button" className="flex items-center px-2 py-2 text-xs text-white data-[focus]:bg-green-700 border-b border-gray-700 bg-green-600 rounded-md">
                        <div className="p-2 bg-[#0d0d0d] rounded-full mr-1">
                          <FaPlus className="text-green-500 text-xl" />
                        </div>
                        Create New Project
                      </button>
                    </MenuItem>
                  </>
                )}
                {userData ? (
                  <>
                    <MenuItem>
                      <Link to="/profile" className="flex items-center px-3 py-2 text-sm text-white data-[focus]:bg-[#13151B] border-b border-gray-700">
                        <div className="p-2 bg-[#0d0d0d] rounded-full mr-3">
                          <CgProfile className="text-green-500 text-xl" />
                        </div>
                        Profile
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <button onClick={logout} className="flex items-center px-4 py-3 text-sm text-white data-[focus]:bg-[#13151B] rounded-b-md">
                        <div className="pr-[6px] pl-[10px] py-2 bg-[#0d0d0d] rounded-full mr-3">
                          <TbLogout className="text-red-700 text-xl" />
                        </div>
                        Log Out
                      </button>
                    </MenuItem>
                  </>
                ) : (
                  <MenuItem>
                    <Link to="/login" className="flex items-center px-4 py-3 text-sm text-white data-[focus]:bg-[#13151B] rounded-b-md">
                      <div className="pl-[7px] pr-[9px] py-2 bg-[#0d0d0d] rounded-full mr-3">
                        <IoLogInOutline className="text-green-600 text-xl" />
                      </div>
                      Log In
                    </Link>
                  </MenuItem>
                )}

              </div>
            </MenuItems>
          </Menu>
        </li>
      </ul>

    </nav>
  );
}

Navbar.propTypes = {
  sidebarSize: PropTypes.string,
  setSidebarSize: PropTypes.func.isRequired,
  isSmallScreen: PropTypes.bool,
  isHalfScreen: PropTypes.bool,
};
