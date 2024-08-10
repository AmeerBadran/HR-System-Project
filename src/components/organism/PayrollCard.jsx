import luffy from "../../assets/images/luffy.jpg"
export default function PayrollCard() {
  return (
    
      <div className="mt-8 flex justify-center ">
        <div>
          <div className="bg-[#191c24] p-5 rounded-t-md text-white flex max-w-5xl w-screen items-center ">
            <img
              className="w-10 h-10 rounded-full"
              src={luffy}
              alt="Rounded avatar"
            />
            <div className="w-full ml-4">
              <div className="flex justify-between">
                <p className="text-[1.75rem]">Ryan MacLeod</p>
                <p>2211 Jones Avenue, Winston Salem FL 27107</p>
              </div>
              <div className="flex justify-between">
                <p >Box of Crayons</p>
                <p>$50 per hour</p>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-[#FFFFFF6d] flex justify-between items-center bg-[#000] text-white p-5 rounded-b-md">
            <div>
              <strong className="mr-1">Applied on: </strong> 23 Feb, 2021
            </div>
            <div className="flex justify-center space-x-4 ">
              <button
                title="Discount"
                className="bg-cyan-500 rounded p-2 px-2 transition transform hover:scale-110"
              >
                Discount
              </button>
              <button
                title="Warning"
                className="bg-orange-500 rounded p-2 px-2 transition transform hover:scale-110"
              >
                Warning
              </button>
              <button
                title="Gift"
                className="bg-teal-600 rounded p-2 px-2 transition transform hover:scale-110"
              >
                Gift
              </button>
            </div>
          </div>
        </div>
      </div>
    
  );
}
