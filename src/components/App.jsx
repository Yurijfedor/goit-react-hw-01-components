import { Profile } from './profile/profile';

import { Container } from './App.styled';
import userProfile from '../user.json';

export const App = () => {
  return (
    <Container>
      <Profile userProfile={userProfile} />
    </Container>
  );
};
