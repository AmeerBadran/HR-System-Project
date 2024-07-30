import PropTypes from 'prop-types';

function TransactionItem({ title, date, amount }) {
  return (
    <div className="bg-[#12151E] flex items-center justify-between text-white text-[105%] py-3 px-5 rounded-[4px] font-bold mt-4">
      <div className="flex flex-col gap-1">
        <h6>{title}</h6>
        <p className="text-gray-600 text-sm font-medium">{date}</p>
      </div>
      <div>
        <h6>{amount}</h6>
      </div>
    </div>
  );
}

TransactionItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};

export default TransactionItem;
