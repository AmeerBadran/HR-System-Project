import { useState, useMemo } from "react";
import PagesTitle from "../components/molecule/PagesTitle";
import DashboardProjectsTable from "../components/organism/DashboardProjectsTable";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import PaginationRounded from "../components/molecule/PaginationRounded";

const getDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
};

const getDay = () => {
  const today = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[today.getDay()];
};

function Attendance() {
  const [displayTable, setDisplayTable] = useState(true);

  const date = useMemo(() => getDate(), []);
  const dayName = useMemo(() => getDay(), []);

  const changeTable = () => {
    setDisplayTable(prevState => !prevState);
  };

  const handlePageChange = (page) => {
    console.log('Selected Page:', page);
  };
  return (
    <div className="w-full">
      <PagesTitle pageTitle={'Attendance'} />
      <div className="w-full bg-[#191c24] p-6 rounded-[4px] overflow-x-auto mt-8">
        <div className="text-white mb-5 border-b-2 border-gray-400 flex justify-between items-center">
          <h5 className="m-4 text-xl font-medium items-center">Attendance {displayTable ? '(Check In)' : '(Check Out)'}</h5>
          <p className="font-medium mr-5 text-white ml-3">{`${date} - ${dayName}`}</p>
          <div className="flex items-center rounded-md mb-2">
            <button
              type="button"
              className="flex w-[80px] rounded-full shadow-inner transition-all p-1.5 bg-white shadow-slate-900"
              onClick={changeTable}
              aria-label="Toggle Attendance Table"
            >
              <div className={`flex justify-center items-center rounded-[50%] w-[38px] h-[36px] shadow-md transition-all bg-[#191c24] ${displayTable ? 'ml-0 bg-gray-800' : 'ml-[28px]'}`}>
                {displayTable ? (
                  <IoLogIn className="text-green-500" />
                ) : (
                  <IoLogOut className="rotate-180 text-red-600" />
                )}
              </div>
            </button>
          </div>
        </div>
        {displayTable ? (
          <DashboardProjectsTable tableType={'attendance in'} day={dayName} />
        ) : (
          <DashboardProjectsTable tableType={'attendance out'} day={dayName} />
        )}
        
          <PaginationRounded count={2} onPageChange={handlePageChange} />
        
      </div>
    </div >
  );
}

export default Attendance;
