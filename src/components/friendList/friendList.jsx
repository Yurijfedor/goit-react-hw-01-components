import PropTypes from 'prop-types';
import { Box } from 'constans';
import { FriendListItem } from 'components/friendListItem/friendListItem';
export const FriendList = ({ friends }) => {
  return (
    <Box
      width="400px"
      pt={1}
      ml="auto"
      mr="auto"
      mt={5}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
    >
      <ul>
        {friends.map(friend => {
          return <FriendListItem key={friend.id} friendItem={friend} />;
        })}
      </ul>
    </Box>
  );
};

FriendList.prototype = {
  friends: PropTypes.array.isRequired,
};
