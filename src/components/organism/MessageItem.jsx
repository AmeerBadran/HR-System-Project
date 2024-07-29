import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const MessageItem = ({ img, name, time }) => (
  <Link to="/profile" className="flex items-center px-1 py-2 text-sm text-white data-[focus]:bg-[#13151B] border-b border-gray-700">
    <div className="pr-[2px] pt-[2px] mx-4 my-2 flex items-center gap-3">
      <img src={img} alt="profileImage" className="w-9 h-9 rounded-full shadow-md shadow-gray-950 object-cover" />
      <div>
        <p className="text-sm text-white">{name}</p>
        <p className="text-sm text-gray-500">{time}</p>
      </div>
    </div>
  </Link>
);

MessageItem.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default MessageItem;