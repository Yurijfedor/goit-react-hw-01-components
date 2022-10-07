import PropTypes from 'prop-types';

import {
  StatText,
  StatValue,
  StatsItem,
} from 'components/userStats/userStats.styled';

export const StatsInfo = ({ text, children }) => {
  return (
    <StatsItem>
      <StatText>{text}</StatText>
      <StatValue>{children}</StatValue>
    </StatsItem>
  );
};

StatsInfo.prototype = {
  text: PropTypes.string.isRequired,
  children: PropTypes.number.isRequired,
};
