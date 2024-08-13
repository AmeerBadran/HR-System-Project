import { PropTypes } from "prop-types";

export default function EmployeeName({name, styles}) {
  const defaultStyle = "w-full text-lg text-white font-black"
  return (
    <h1 className={`${defaultStyle} ${styles}`}>
      <span className="mr-1.5 font-light">|~</span>{name}
    </h1>
  )
}


EmployeeName.propTypes = {
  name: PropTypes.string.isRequired,
  styles: PropTypes.string,
}