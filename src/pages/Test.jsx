import Navbar from "../components/organism/Navbar";
import Sidebar from "../components/organism/Sidebar";

export default function Test() {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className=' ml-[244px] w-[100%]'>
        <Navbar/>
        <div className="bg-black w-[100%] h-screen mt-[70px] py-[1.875rem] px-[1.75rem]">
          <h1 className="text-white">hhdfhdfhdfi</h1>
        </div>
      </div>
    </div>
  )
}

