import PropTypes from 'prop-types';

const DashboardCard = ({ title, value, icon: Icon, bgColor }) => (
  <div className="h-32 bg-[#191c24] rounded-[4px] px-9 py-5">
    <div className="flex justify-between items-center">
      <h1 className="text-white text-xl font-medium">{title}</h1>
      <Icon className={`text-white ${bgColor} p-[6px] w-9 h-9 rounded-sm`} />
    </div>
    <div className="mt-3">
      <p className="text-white text-3xl font-semibold">{value}</p>
    </div>
  </div>
);

DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  value: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default DashboardCard;
