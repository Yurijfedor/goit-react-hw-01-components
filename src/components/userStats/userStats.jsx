import {
  StatText,
  StatValue,
  StatsItem,
} from 'components/userStats/userStats.styled';
// import { Box } from '../../constans/index';

export const StatsInfo = ({ text, children }) => {
  return (
    // <Box
    //   width="100%"
    //   display="grid"
    //   justifyContent="center"
    //   border="normal"
    //   borderColor="secondaryText"
    //   p={4}
    // >
    <StatsItem>
      <StatText>{text}</StatText>
      <StatValue>{children}</StatValue>
    </StatsItem>
  );
};
