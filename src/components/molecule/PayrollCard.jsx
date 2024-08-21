import PropTypes from 'prop-types';
import { FaLocationDot } from "react-icons/fa6";
import { MdMonetizationOn } from "react-icons/md";
export default function PayrollCard({ name, Salary, Adress, Avatar, Position, Date }) {
  return (

      <div className=''>
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 rounded-t-md text-white flex w-full items-center ">
          <img
            className="w-14 h-14 rounded-full"
            src={Avatar}
            alt="Rounded avatar"
          />
          <div className="w-full ml-4">
            <div className="flex justify-between">
              <p className="text-[1.75rem]">{name}</p>
              <p className="flex gap-2 items-center"><FaLocationDot className=' text-blue-400' />{Adress}</p>
            </div>
            <div className="flex justify-between">
              <p >{Position}</p>
              <p className="flex gap-2 items-center"><MdMonetizationOn className=' text-yellow-400' /> {Salary} per hour</p>
            </div>
          </div>
        </div>
        <div className="border-t-4 border-purple-500 bg- flex justify-between items-center text-white p-5 rounded-b-md bg-gray-950">
          <div>
            <strong className="mr-1">Applied on: </strong> {Date}
          </div>
          <div className="flex justify-center space-x-4 ">
            <button
              title="Discount"
              className="bg-gray-900 hover:bg-red-500 rounded p-2 px-2 transition transform hover:scale-110"
            >
              Discount
            </button>
            <button
              title="Warning"
              className="bg-gray-900 hover:bg-yellow-500 rounded p-2 px-2 transition transform hover:scale-110"
            >
              Warning
            </button>
            <button
              title="Gift"
              className="bg-gray-900 hover:bg-lime-500 rounded p-2 px-2 transition transform hover:scale-110"
            >
              Gift
            </button>
          </div>
        </div>
      </div>

  );
}

PayrollCard.propTypes = {
  name: PropTypes.string,
  Salary: PropTypes.number,
  Adress: PropTypes.string,
  Avatar: PropTypes.img,
  Position: PropTypes.string,
  Date: PropTypes.string,

}
