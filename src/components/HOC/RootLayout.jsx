import { useState } from "react";
import Navbar from "../organism/Navbar";
import Sidebar from "../organism/Sidebar";

export default function RootLayout(Component) {
  return function WrappedComponent(props) {
    const [sidebarSize, setSidebarSize] = useState('big');

    return (
      <div className='flex'>
        <Sidebar sidebarSize={sidebarSize} />
        <div className={` ml-[244px] w-[100%] ${sidebarSize === 'big' ? 'ml-[244px]' : sidebarSize === 'small' ? 'ml-[70px]':''} transition-all ease-in-out duration-300`}>
          <Navbar sidebarSize={sidebarSize} setSidebarSize={setSidebarSize} />
          <div className="bg-black w-[100%] h-screen mt-[70px] py-[1.875rem] px-[1.75rem]">
            <Component {...props} />
          </div>
        </div>
      </div>
    );
  };
}