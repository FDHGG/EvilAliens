import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
  return(
    <div className="header">
      <h1>Evil Aliens</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/reddit">Reddit</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};