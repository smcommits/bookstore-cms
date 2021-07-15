import React from 'react';
import PropTypes from 'prop-types';

const ProgressRing = (props) => {
  const { percentage } = props;

  const percentageCSS = { strokeDashoffset: `calc(199px - (199px * ${percentage} ) / 100)` };

  return (
    <div className="percent flex_row_center">
      <svg>
        <circle cx="30" cy="30" r="30" />
        <circle
          cx="30"
          cy="30"
          r="30"
          style={percentageCSS}
        />
      </svg>
      <div className="book_percent">
        <h2 className="number">
          {percentage}
          <span>%</span>
        </h2>
        <h2 className="text">Completed</h2>
      </div>
    </div>
  );
};

ProgressRing.propTypes = {
  percentage: PropTypes.string.isRequired,
};

export default ProgressRing;
