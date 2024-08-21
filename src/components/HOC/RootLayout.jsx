import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../organism/Navbar";
import Sidebar from "../organism/Sidebar";

export default function RootLayout() {
  const [sidebarSize, setSidebarSize] = useState(() => {
    return localStorage.getItem('sidebarSize') || 'big';
  });

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 610);
  const [isHalfScreen, setIsHalfScreen] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 610);
      setIsHalfScreen(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('sidebarSize', sidebarSize);
  }, [sidebarSize]);

  return (
    <div className='flex'>
      <Sidebar sidebarSize={sidebarSize} setSidebarSize={setSidebarSize} isHalfScreen={isHalfScreen} />
      <div className={`w-[100%] ${sidebarSize === 'big' ? 'lg:ml-[244px] ml-0' : sidebarSize === 'small' ? 'lg:ml-[70px] ml-0' : ''} transition-all ease-in-out duration-200`}>
        <Navbar sidebarSize={sidebarSize} setSidebarSize={setSidebarSize} isSmallScreen={isSmallScreen} setIsSmallScreen={setIsSmallScreen} isHalfScreen={isHalfScreen} />
        <div className="bg-black w-[100%] min-h-[869px] mt-[70px] py-[1.875rem] px-[1.75rem]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
