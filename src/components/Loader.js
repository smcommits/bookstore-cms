import React from 'react';

const Loader = () => {
  const listItems = [];
  for (let i = 0; i < 18; i += 1) {
    listItems.push(<li key={i} />);
  }
  return (
    <div className="loaderWrapper">
      <div className="book">
        <div className="inner">
          <div className="left" />
          <div className="middle" />
          <div className="right" />
        </div>
        <ul>
          {listItems}
        </ul>
      </div>
      <div className="text">
        <p>
          The application is deployed on a free service.
          It may take a few seconds to load.
          Thank you so much for your patience
        </p>
      </div>
    </div>
  );
};

export default Loader;
