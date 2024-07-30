import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const NotificationItem = React.forwardRef(({ Icon, color, text, count }, ref) => (
  <Link to="/" ref={ref} className="flex items-center px-4 py-2 text-sm text-white data-[focus]:bg-[#13151B] rounded-b-md">
    <div className="p-2 bg-[#0d0d0d] rounded-full mr-3">
      <Icon className={`text-${color} text-xl`} />
    </div>
    <div className="flex justify-between items-center w-full">
      <p>{text}</p>
      <p className="text-xs text-gray-500">{count}</p>
    </div>
  </Link>
));

NotificationItem.displayName = 'NotificationItem';

NotificationItem.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
};

export default NotificationItem;
