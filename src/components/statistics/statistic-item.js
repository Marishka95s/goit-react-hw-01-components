import React from "react";
import PropTypes from 'prop-types';


const StatisticItem = ({ label, percentage }) => (
    <>
      <span className="label2">{label}</span>
      <span className="percentage">{percentage}%</span>
    </>
    );
  
StatisticItem.defaultProps = {
    label: "Unknown label",
    percentage: 0,
};

StatisticItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default StatisticItem;