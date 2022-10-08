import PropTypes from 'prop-types';
import { Box } from 'constans';
import { FriendListItem } from 'components/friendListItem/friendListItem';
export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => {
        return (
          <Box
            key={friend.id}
            width="400px"
            pt={1}
            ml="auto"
            mr="auto"
            mt={5}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          >
            <FriendListItem friendItem={friend} />
          </Box>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
