import PropTypes from 'prop-types';
import { Box } from 'constans';
import { TransactionItem } from 'components/transactionItem/transactionItem';

export const TransactionHistory = ({ items }) => {
  return (
    <Box
      width="800px"
      pt={1}
      ml="auto"
      mr="auto"
      mt={5}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
    >
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => {
            return <TransactionItem key={item.id} transactionItem={item} />;
          })}
        </tbody>
      </table>
    </Box>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
