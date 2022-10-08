import PropTypes from 'prop-types';

import { TransactionItem } from 'components/transactionItem/transactionItem';
import { TableEl, TableHead, TableThEl } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableEl>
      <TableHead>
        <tr>
          <TableThEl>Type</TableThEl>
          <TableThEl>Amount</TableThEl>
          <TableThEl>Currency</TableThEl>
        </tr>
      </TableHead>

      <tbody>
        {items.map(item => {
          return <TransactionItem key={item.id} transactionItem={item} />;
        })}
      </tbody>
    </TableEl>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
