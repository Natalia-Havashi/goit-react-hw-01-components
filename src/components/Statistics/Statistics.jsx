import React from 'react';
import PropTypes from 'prop-types';
import { Item, SectionStatistics, StatList, Title } from './Statistics.styled';


export const Statistics = ({title, stats}) => {
    return (
<SectionStatistics>
{title && <Title>{title}</Title>}

  <StatList>
    {stats.map(({id, label, percentage}) => (
<Item key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </Item>
    ))}
    </StatList>
</SectionStatistics>
    )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
}