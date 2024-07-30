import employee_pfp from "../../assets/images/employee-pfp.jpg";
import { FaClipboardList } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { RiFileList3Fill } from "react-icons/ri";
import { FaPlusCircle } from "react-icons/fa";
import { MdPerson } from "react-icons/md";




export default function Employee() {
  return (
    <div className="bg-[#191C24] h-[300px] text-white max-w-2xl px-6 py-6 rounded-2xl min-w-[200px]">
      <div className="wrapper flex gap-10">
        <div>
          <div>
            <img
              src={employee_pfp}
              alt="employee Profile picture"
              className="max-w-40 rounded-full shadow-2xl shadow-gray-900"
            />
          </div>
          <div className="flex text-shadow-2xl"></div>
          <div className="flex justify-center gap-12 mt-6 text-2xl">
            <div className="text-red-400"><FaClipboardList /></div>
            <div className="text-yellow-500"><FaStar /></div>
            <div className="text-red-400"><RiFileList3Fill /></div>
          </div>
          <div className="flex justify-center gap-12 text-xl mt-2 text-shadow-2xl">
            <p>14</p>
            <p>77</p>
            <p>02</p>
          </div>
        </div>

        <div>
          <div className="mb-8 text-shadow-xl">
            <h2 className="text-2xl roboto-black">Luke Short</h2>
            <h3 className="text-md roboto-medium bg-emerald-400 px-3 py-1 rounded-md w-fit text-shadow-lg">Full-Stack Developer</h3>
          </div>

          <div className="roboto-regular mb-6 text-shadow-xl">
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices.Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices
            </p>
          </div>

          <div className="flex justify-start items-center space-x-4">
            <div><button className="flex justify-center items-center bg-purple-900 text-center align-middle px-4 py-1 rounded-md"><FaPlusCircle className="inline mr-2 text-md"/>Add Task</button></div>
            <div><button className="flex justify-center items-center bg-purple-900 text-center align-middle px-4 py-1 rounded-md"><MdPerson className="inline mr-2 text-md"/>Profile</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}
