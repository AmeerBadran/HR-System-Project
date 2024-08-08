
import { HiMiniXMark } from "react-icons/hi2";
import { TbAlertCircle } from "react-icons/tb";
// eslint-disable-next-line react/prop-types
const PopupModal = ({ isOpen, onClose, onConfirm, message = 'hi' }) => {
  if (!isOpen) return null;

  return (
    <div
      id="popup-modal"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-gray-800 bg-opacity-75"
      aria-hidden="true"
    >
      <div className="relative w-full max-w-md p-4 max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={onClose}
            title='Close Modal'
          >
            <HiMiniXMark className="w-6 h-6" />
          </button>
          <div className="p-4 md:p-5 text-center">
            <TbAlertCircle className="h-16 w-16 m-auto" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {message}
            </h3>
            <button
              onClick={onConfirm}
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              Yes, I am sure
            </button>
            <button
              onClick={onClose}
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;