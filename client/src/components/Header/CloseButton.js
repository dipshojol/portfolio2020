import React from 'react';
import './CloseButton.css';

const CloseButton = () => {
  return (
    <>
      <input type="checkbox" className="toggle"></input>
      <div className="hamburger">
        <div></div>
      </div>
    </>
  );
};
export default CloseButton;
