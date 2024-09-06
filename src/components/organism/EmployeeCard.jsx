import { PropTypes } from "prop-types";
// Components imports
import IconButton from "../molecule/IconButton";
import JobTitle from "../atoms/JobTitle";
import EmployeeDescription from "../atoms/EmployeeDescription";
import EmployeeProfilePicture from "../atoms/EmployeeProfilePicture";
import EmployeeName from "../atoms/EmployeeName";

// Icons imports
import { FaPencil } from "react-icons/fa6";
import { FaTasks, FaStar } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { IoPerson, IoTrashBin } from "react-icons/io5";

export default function EmployeeCard({
  employee_pfp,
  employee_name,
  tasks,
  stars,
  followers,
  job_title,
  employee_description,
  job_title_bg_color,
}) {
  return (
    <div className="w-full max-w-[600px] md:h-[250px] text-white flex mobile:flex-col md:flex-row gap-4 bg-slate-700 px-4 py-4 rounded-md transition-all duration-200 ease-in hover:rotate-1 hover:mx-2 hover:my-2">
      <div className="mobile:w-full md:w-4/12 h-full">
        <div className="w-32 h-full mx-auto flex flex-col items-center gap-2 text-lg font-normal">
          <div className="mx-auto mobile:w-10/12 md:w-full mb-2">
            <EmployeeProfilePicture src={employee_pfp} />
          </div>

          <div className="w-full flex justify-between text-[#FFAA8A]">
            <FaTasks />
            <FaStar className="text-yellow-400" />
            <BsPeopleFill />
          </div>

          <div className="mobile:w-full flex justify-between text-gray-200">
            <span>{tasks}</span>
            <span>{stars}</span>
            <span>{followers}</span>
          </div>
        </div>
      </div>

      <div className="w-full flex mobile:flex-col gap-6 md:w-8/12 h-full">
        <div className="md:flex justify-between items-center gap-2 ">
          <div>
            <EmployeeName name={employee_name} />
            <JobTitle
              jobTitle={job_title}
              styles="mobile:text-sm"
              bgColor={job_title_bg_color}
            />
          </div>
          <div className="flex flex-col gap-2">
            <IconButton
              label="Edit"
              icon={FaPencil}
              styles="mobile:hidden md:flex bg-zinc-500 hover:pointer hover:bg-zinc-600"
            />
            <IconButton
              label="Delete"
              icon={IoTrashBin}
              styles="mobile:hidden md:flex bg-transparent outline outline-1 outline-red-600 hover:outline-none hover:bg-red-700"
            />
          </div>
        </div>

        <div className="max-h-20 overflow-y-auto leading-tight whitespace-pre-wrap">
          <EmployeeDescription description={employee_description} />
        </div>

        <div className="w-full mobile:mx-auto flex mobile:flex-col md:flex-row justify-start md:items-center gap-2 ">
          <IconButton label="Add Task" icon={MdAddTask} />
          <IconButton label="Profile" icon={IoPerson} />
          <IconButton
            label="Edit"
            icon={FaPencil}
            styles="md:hidden bg-zinc-500 hover:pointer hover:bg-zinc-600"
          />
          <IconButton
            label="Delete"
            icon={IoTrashBin}
            styles="md:hidden bg-transparent outline outline-1 outline-red-600 hover:outline-none hover:bg-red-700"
          />
        </div>
      </div>
    </div>
  );
}

EmployeeCard.propTypes = {
  employee_pfp: PropTypes.string.isRequired,
  employee_name: PropTypes.string.isRequired,
  tasks: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stars: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  followers: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  job_title: PropTypes.string.isRequired,
  employee_description: PropTypes.string.isRequired,
  job_title_bg_color: PropTypes.string.isRequired,
};
