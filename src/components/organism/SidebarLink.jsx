import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

const SidebarItem = ({ to, icon: Icon, label, sidebarSize, iconColor }) => (
  <li className={`group transition-all duration-500 ${sidebarSize === 'big' ? 'pr-5' : sidebarSize === 'small' ? 'pr-2' : ''}`}>
    <NavLink to={to} className={`flex items-center py-[6px] w-full rounded-r-full group-hover:bg-[#0F1015] transition-all duration-300 ${sidebarSize === 'big' ? 'px-5' : sidebarSize === 'small' ? 'px-4' : ''}`}>
      <div className="p-[8px] bg-[#4b506844] rounded-full mr-3 group-hover:bg-[#22242E] transition-all duration-500">
        <Icon className={`text-mg ${iconColor}`} />
      </div>
      {sidebarSize === 'big' && <p className="text-[#6c7293] group-hover:text-white transition-all duration-300">{label}</p>}
    </NavLink>
  </li>
);

SidebarItem.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  sidebarSize: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
};

export default SidebarItem;