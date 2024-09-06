import { PropTypes } from "prop-types";

export default function EmployeeProfilePicture({ src, imgAlt, styles }) {
  const defaultStyle = "rounded-full w-32";
  return <img src={src} alt={imgAlt} className={`${defaultStyle} ${styles}`} />;
}

EmployeeProfilePicture.propTypes = {
  src: PropTypes.string,
  imgAlt: PropTypes.string,
  styles: PropTypes.string,
};
