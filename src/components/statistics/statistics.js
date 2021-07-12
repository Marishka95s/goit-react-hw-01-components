import React from "react";
import PropTypes from 'prop-types';
import StatisticItem from './statistic-item';

const Statistics = ({ title, items }) => (
    <section className="statistics">
    <h2 className="title">{title}</h2>

    <ul className="stat-list">
    {items.map(({ id, label, percentage }) => (
        <li key={id} className="item2">
          <StatisticItem 
            label={label} 
            percentage={percentage} />
        </li>
        )
    )}
    </ul>
    </section>
    );

Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
      })
  ).isRequired,
};

export default Statistics;