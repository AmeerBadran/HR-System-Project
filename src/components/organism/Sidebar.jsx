import PropTypes from 'prop-types';
import profileImage from "../../assets/images/vaiolet.png";
import SidebarLink from '../atoms/SidebarLink'
import sidebarItems from '../../constants/sidebarItems';
import { useEffect } from 'react';
export default function Sidebar({ sidebarSize, isHalfScreen, setSidebarSize }) {
  const changeSize = true;
  useEffect(() => {
    if (changeSize === isHalfScreen) {
      setSidebarSize('small')
    }
  }, [isHalfScreen, setSidebarSize, changeSize]);
  return (
    <div className={`flex flex-col h-[100vh] bg-[#191c24] z-10 fixed bottom-0 top-0 lg:left-0 text-white ${!isHalfScreen && sidebarSize === 'big' ? 'w-[244px] left-[-244px]' : isHalfScreen && sidebarSize === 'big' ? 'w-[244px] ' : isHalfScreen && sidebarSize === 'small' ? 'w-[70px] ml-[-70px]' : !isHalfScreen && sidebarSize === 'small' ? 'w-[70px]' : 'w-[244px]'} transition-all ease-in-out duration-200`}>
      {!isHalfScreen &&
        <h1 className={`mt-4 text-gray-100 font-semibold text-3xl ${sidebarSize === 'big' ? 'ml-6 py-1 tracking-wider ' : sidebarSize === 'small' ? 'ml-4 tracking-widest' : ''}`}>
          {sidebarSize === 'big' ? 'HR System ' : sidebarSize === 'small' ? 'HR' : ''}
        </h1>
      }
      <div className={`flex flex-col overflow-y-auto overflow-x-hidden ${isHalfScreen && 'mt-[70px]'}`}>
        <div className={`py-1 mb-0 mt-[18px] ${sidebarSize === 'big' ? 'mx-4 gap-3 pr-[2px] flex items-center' : sidebarSize === 'small' ? 'mx-auto' : ''}`}>
          <img src={profileImage} alt="profileImage" className="w-[35px] h-[35px] rounded-full shadow-md shadow-gray-950 object-cover mx-2" />
          <div className="w-full">
            {sidebarSize === 'big' && (<><p className="text-md text-white">Ameer Badran</p>
              <p className="text-xs text-gray-500">Gold Member</p></>)}
          </div>
        </div>
        {sidebarSize === 'big' && <h1 className="ml-6 my-5 w-full text-lg font-semibold text-gray-300">Navigation</h1>}
        <ul className={`${sidebarSize === 'small' && 'mt-5'}`}>
          {sidebarItems.map((item) => (
            <SidebarLink key={item.to} {...item} sidebarSize={sidebarSize} setSidebarSize={setSidebarSize} />
          ))}
        </ul>
      </div>
    </div >
  )
}

Sidebar.propTypes = {
  sidebarSize: PropTypes.string,
  setSidebarSize: PropTypes.func.isRequired,
  isHalfScreen: PropTypes.bool,
};
