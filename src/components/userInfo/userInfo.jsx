import { FaUserCircle } from 'react-icons/fa';
import {
  UserInfo,
  UserName,
  UserTag,
  UserLocation,
  Avatar,
} from './userInfo.styled';

export const UserCard = ({ username, tag, location, avatar }) => {
  return (
    <UserInfo>
      <Avatar>
        <FaUserCircle size={200} />
      </Avatar>
      <UserName>{username}</UserName>
      <UserTag>@${tag}</UserTag>
      <UserLocation>${location}</UserLocation>
    </UserInfo>
  );
};
