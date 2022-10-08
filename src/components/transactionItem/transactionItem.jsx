import PropTypes from 'prop-types';
import { TableTdEl, TableTrEl } from './transactionItem.styled';

export const TransactionItem = ({
  transactionItem: { type, amount, currency },
}) => {
  return (
    <TableTrEl>
      <TableTdEl>{type}</TableTdEl>
      <TableTdEl>{amount}</TableTdEl>
      <TableTdEl>{currency}</TableTdEl>
    </TableTrEl>
  );
};

TransactionItem.propTypes = {
  transactionItem: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }),
};
