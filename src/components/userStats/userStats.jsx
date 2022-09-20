// import { ThemeProvider } from 'styled-components';
// import { theme } from '../../constans/index';
import PropTypes from 'prop-types';
import {
  StatItem,
  StatText,
  StatValue,
} from 'components/userStats/userStats.styled';

export const StatsInfo = ({ text, children }) => {
  return (
    // <ThemeProvider theme={theme}>
    <StatItem>
      <StatText>{text}</StatText>
      <StatValue>{children}</StatValue>
    </StatItem>
    // </ThemeProvider>
  );
};

StatsInfo.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.number.isRequired,
};
