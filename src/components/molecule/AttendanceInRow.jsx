import PropTypes from 'prop-types';
import { IoRemoveOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { useEffect, useState } from 'react';

// *** will set 8 values in the page

const AttendanceInRow = ({ employeeName, employeeId, attendance, dayNow, checkInOut }) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [time, setTime] = useState(`cdfh`);

  function changeAttendanceStatus() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;


    console.log(`${hours}:${minutes}`)
  }
  useEffect(() => {
    const dayAttendance = attendance[dayNow];
    if (dayAttendance) {
      setTime(checkInOut === 'attendance in' ? dayAttendance.checkIn : dayAttendance.checkOut || '');
    }
  }, [attendance, dayNow, checkInOut]);

  const handleTimeChange = (event) => {
    setTime(event.target.value);
    console.log(time)
  };
  return (
    <tr>
      <td className="border-b border-gray-600 p-3">{employeeId}</td>
      <td className="border-b border-gray-600 p-3">{employeeName}</td>
      {days.map((day, index) => {
        const isPresent = checkInOut === 'atattendance in' ? attendance[day]?.checkIn : attendance[day]?.checkOut;
        return (
          <td key={index} className="border-b border-gray-600 p-3">
            <div className='flex items-center'>
              <button
                type="button"
                className={`h-8 w-8 rounded-sm border flex justify-center items-center 
                  ${day !== dayNow ? 'bg-gray-400 cursor-not-allowed' :
                    isPresent && day === dayNow ? 'bg-green-500 hover:bg-orange-500' :
                      'bg-orange-500 hover:bg-green-500'}`}
                disabled={day !== dayNow}
                onClick={() => changeAttendanceStatus()}
              >
                {isPresent ? <FaCheck className='text-white text-xl' /> : <IoRemoveOutline className='text-white text-xl' />}
              </button>
              {(isPresent && day !== dayNow) ? <p className='ml-1'>{checkInOut === 'attendance in' ? attendance[day]?.checkIn : attendance[day]?.checkOut}</p>
                : day === dayNow &&
                <form>
                  <input
                    type="time"
                    id="timeInput"
                    value={time}
                    onChange={handleTimeChange}
                    className='w-63 ml-1 bg-slate-600'
                  />
                </form>

              }
            </div>

          </td>
        );
      })}
    </tr>
  );
};

AttendanceInRow.propTypes = {
  employeeName: PropTypes.string.isRequired,
  employeeId: PropTypes.string.isRequired,
  checkInOut: PropTypes.string.isRequired,
  dayNow: PropTypes.string.isRequired,
  attendance: PropTypes.shape({
    Sunday: PropTypes.shape({
      checkIn: PropTypes.string,
      checkOut: PropTypes.string,
    }),
    Monday: PropTypes.shape({
      checkIn: PropTypes.string,
      checkOut: PropTypes.string,
    }),
    Tuesday: PropTypes.shape({
      checkIn: PropTypes.string,
      checkOut: PropTypes.string,
    }),
    Wednesday: PropTypes.shape({
      checkIn: PropTypes.string,
      checkOut: PropTypes.string,
    }),
    Thursday: PropTypes.shape({
      checkIn: PropTypes.string,
      checkOut: PropTypes.string,
    }),
    Friday: PropTypes.shape({
      checkIn: PropTypes.string,
      checkOut: PropTypes.string,
    }),
    Saturday: PropTypes.shape({
      checkIn: PropTypes.string,
      checkOut: PropTypes.string,
    }),
  }).isRequired,
};

export default AttendanceInRow;
