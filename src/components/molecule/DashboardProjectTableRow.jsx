import PropTypes from 'prop-types';

const DashboardProjectTableRow = ({ name, hours, priority, progress }) => {
  return (
    <tr>
      <td className="first-column border-b border-gray-600 p-3">{name}</td>
     <td className="border-b border-gray-600 p-3">{hours}</td> 
      <td className="border-b border-gray-600 p-3">
        <span className={`inline-block border ${priority === 'Low' ? 'text-[#08D25B] border-[#08D25B]':priority==='Medium' ? 'text-[#FFAB13] border-[#FFAB13]': priority==='High' ? 'text-[#EE414A] border-[#EE414A]':''} rounded-[4px] px-3 py-1`}>
          {priority}
        </span>
      </td>
      <td className="border-b border-gray-600 p-3">
        <div className="progress-bar bg-white rounded-full overflow-hidden h-3">
          <div className={`progress w-[${progress}%] h-full bg-purple-800`}></div>
        </div>
      </td>
    </tr>
  );
};

DashboardProjectTableRow.propTypes = {
  name: PropTypes.string.isRequired,
  hours: PropTypes.number.isRequired,
  priority: PropTypes.string.isRequired,
  priorityColor: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
};

export default DashboardProjectTableRow;
