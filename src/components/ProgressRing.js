import React from 'react';

const ProgressRing = () => {
  const percentage = Math.floor(Math.random() * 100);

  const percentageCSS = { 'stroke-dashoffset': `calc(200px - (200px * ${percentage} ) / 100)` };

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

export default ProgressRing;
