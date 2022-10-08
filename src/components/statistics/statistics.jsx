import PropTypes from 'prop-types';
import { StatsItem } from 'components/statsItem/statsItem';
import { TitleStatistics, StatisticsList } from './statistic.styled';
import { Box } from 'constans';
export const Statistics = ({ stats, title }) => {
  return (
    <Box
      width="400px"
      pt={1}
      ml="auto"
      mr="auto"
      mt={5}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      as={'section'}
    >
      <TitleStatistics> {title} </TitleStatistics>
      <StatisticsList>
        {stats.map(el => {
          return (
            <Box
              key={el.id}
              backgroundColor={getRandomHexColor()}
              width="100%"
              display="grid"
              textAlign="center"
              p={3}
              as={'li'}
            >
              <StatsItem statsElement={el} />
            </Box>
          );
        })}
      </StatisticsList>
    </Box>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
  title: PropTypes.string,
};
