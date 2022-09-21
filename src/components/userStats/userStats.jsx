import PropTypes from 'prop-types';
import { StatText, StatValue } from 'components/userStats/userStats.styled';
import { Box } from '../../constans/index';

export const StatsInfo = ({ text, children }) => {
  return (
    <Box
      width="100%"
      display="grid"
      justifyContent="center"
      border="normal"
      borderColor="secondaryText"
      p={4}
    >
      <StatText>{text}</StatText>
      <StatValue>{children}</StatValue>
    </Box>
  );
};

StatsInfo.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.number.isRequired,
};
