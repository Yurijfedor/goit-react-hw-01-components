import PropTypes from 'prop-types';

import { LabelSpan, PercentageSpan } from './statsItem.styled';
export const StatsItem = ({ statsElement: { label, percentage } }) => {
  return (
    <>
      <LabelSpan>{label}</LabelSpan>
      <PercentageSpan>{percentage}%</PercentageSpan>
    </>
  );
};

StatsItem.propTypes = {
  statsElement: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
