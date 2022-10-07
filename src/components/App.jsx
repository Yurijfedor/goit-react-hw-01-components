import PropTypes from 'prop-types';

import { Profile } from './profile/profile';
import { Statistics } from './statistics/statistics';
import { FriendList } from './friendList/friendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

// import { Container } from './App.styled';
import userProfile from '../data/user.json';
import stats from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import { Box } from '../constans/index';

export const App = () => {
  return (
    <Box p={4} fontWeight="bold" fontSize="xl">
      <Profile userProfile={userProfile} />
      <Statistics stats={stats} title="upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Box>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
  title: PropTypes.string,
};

Profile.propTypes = {
  userProfile: PropTypes.object.isRequired,
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
