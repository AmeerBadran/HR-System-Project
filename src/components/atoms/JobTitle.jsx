import { PropTypes } from "prop-types";

export default function JobTitle({ jobTitle, bgColor, styles }) {
  const defaultStyle =
    "w-fit min-w-[150px] px-4 py-2 bg-red-400 rounded-md text-white text-md font-black shadow-md";
  return <h3 className={`${defaultStyle} ${styles} ${bgColor}`}>{jobTitle}</h3>;
}

JobTitle.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  styles: PropTypes.string,
  bgColor: PropTypes.string,
};
