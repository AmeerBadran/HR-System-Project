import { PropTypes } from "prop-types";

export default function DescribedIcon({icon, descriptionLabel}) {
  return (
    <div>
      <span className='flex flex-col gap-2'>
        {icon} {descriptionLabel}
      </span>
    </div>
  )
}


DescribedIcon.propTypes = {
  icon: PropTypes.elementType,
  descriptionLabel: PropTypes.string, 
}