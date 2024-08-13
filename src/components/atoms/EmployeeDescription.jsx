import { PropTypes } from "prop-types";

export default function EmployeeDescription({description, styles}) {
  const defaultStyle = "text-white";
  return (
    <span className={`${defaultStyle} ${styles}`}>
      {description}
    </span>
  )
}

EmployeeDescription.propTypes = {
  description: PropTypes.string,
  styles: PropTypes.string,
}