/* eslint-disable react/prop-types */

export default function EmployeeDescription({ address, styles, email, phone }) {
  const defaultStyle = "text-white";
  return (
    <div className={`${defaultStyle} ${styles}`}>
      address: {address}
      <br></br>Email: {email}
      <br></br>Phone: {phone}
    </div>
  )
}
