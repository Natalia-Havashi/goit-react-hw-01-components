import React from 'react';
import PropTypes from 'prop-types';
import { Item, SectionStatistics, StatList, Title } from './Statistics.styled';


export const Statistics = ({title, stats}) => {
    return (
<SectionStatistics>
  <Title>{title}</Title>

  <StatList>
    {stats.map((stat) => (
<Item key={stat.id}>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}%</span>
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
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }).isRequired,
  )
}