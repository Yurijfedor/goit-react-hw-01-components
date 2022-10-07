import PropTypes from 'prop-types';
import {
  Item,
  StatusOnline,
  StatusOffline,
  FriendsName,
} from './friendListItem.styled';
export const FriendListItem = ({ friendItem: { avatar, name, isOnline } }) => {
  return (
    <Item>
      <>{isOnline ? <StatusOnline /> : <StatusOffline />}</>
      <img src={avatar} alt="User avatar" width="48" />
      <FriendsName>{name}</FriendsName>
    </Item>
  );
};

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
