import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './MobileMenuButton.css';

const useStyles = makeStyles(theme => ({}));

const MobileMenuButton = () => {
  const classes = useStyles();

  return (
    <>
      <div>
        <input type="checkbox" className="toggle"></input>
        <div className="hamburger">
          <div></div>
        </div>
        <main>
          <nav>
            <div className="nav-wrap">
              {/* <img className="logo-main" src={logo} alt="logo"/> */}
              <div className="nav-element-wrap">
                <div className="nav-elements">
                  <a href="" target="_blank" rel="noopener noreferrer" alt="">
                    RESUME
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </main>
      </div>
    </>
  );
};
export default MobileMenuButton;
