import { PropTypes } from "prop-types";

export default function IconButton({
  icon: Icon,
  label = "Click Me",
  styles,
  onClickFunc = () => {
    alert("Button Clicked!");
    console.log("Button Clicked!");
  },
}) 


{
  const defaultStyle = " shadow-md min-h-[35px] px-4 text-md text-white bg-[#4C3575] rounded-md hover:bg-[#3d2766] hover:cursor-pointer";
  return (
      <button className={`flex gap-2 items-center justify-center ${defaultStyle} ${styles}`} type="button" onClick={onClickFunc}>
      {Icon && <Icon className="text-white"/>}
      {label}
      </button>
  );
}

IconButton.propTypes = {
  icon: PropTypes.elementType,
  label: PropTypes.string.isRequired,
  styles: PropTypes.string,
  onClickFunc: PropTypes.func,
};
