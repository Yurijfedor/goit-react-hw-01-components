import { Profile } from './profile/profile';

// import { Container } from './App.styled';
import userProfile from '../user.json';
import { Box } from '../constans/index';

export const App = () => {
  return (
    <Box p={4} fontWeight="bold" fontSize="xl">
      <Profile userProfile={userProfile} />
    </Box>
  );
};
