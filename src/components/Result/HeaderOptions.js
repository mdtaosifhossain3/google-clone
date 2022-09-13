import React from 'react';

import './HeaderOptions.css';
function HeaderOptions({title,Icon}) {
  return (
    <div className="headerOptions">
      <Icon style={{ fontSize: "18px" }} />
      <p>{title}</p>
    </div>
  );
}

export default HeaderOptions