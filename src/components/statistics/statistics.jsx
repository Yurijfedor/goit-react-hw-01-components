import { StatsElement } from 'components/statsElement/statsElement';
import { TitleStatistics, StatisticsList, StatsItem } from './statistic.styled';
import { Box } from 'constans';
export const Statistics = ({ stats, title }) => {
  return (
    <Box
      width="400px"
      pt={4}
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
            <StatsItem key={el.id}>
              <StatsElement statsElement={el} />
            </StatsItem>
          );
        })}
      </StatisticsList>
    </Box>
  );
};
