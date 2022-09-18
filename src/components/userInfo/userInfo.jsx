import { FaUserCircle } from 'react-icons/fa';
import {
  UserInfo,
  UserName,
  UserTag,
  UserLocation,
  Avatar,
} from './userInfo.styled';

export const UserCard = () => {
  return (
    <UserInfo>
      <Avatar>
        <FaUserCircle size={200} />
      </Avatar>
      <UserName>Petra Marica</UserName>
      <UserTag>@pmarica</UserTag>
      <UserLocation>Salvador, Brasil</UserLocation>
    </UserInfo>
  );
};
