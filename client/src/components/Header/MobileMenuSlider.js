import React, { useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import CloseButton from './CloseButton';

import './MobileMenuSlider.css';

const useStyles = makeStyles(theme => ({
  ul: {
    display: 'grid',
    // width: '90%',
    textAlign: 'center',
    placeContent: 'center',
    margin: '0',
    padding: '0',
    '& a': {
      fontSize: '1.5em',
      overflow: 'hidden',
      textDecoration: 'none',

      '& li': {
        color: '#fff',
        display: 'block',
        padding: '5px 0'
      }
    },
    '& :hover': {
      cursor: 'pointer',
      zIndex: '1',
      // background: '#e2e2e2',
      '& li': {
        color: '#A1A1A1'
      }
    },
    '& a.active': {
      cursor: 'pointer',
      zIndex: '1',
      // background: '#e2e2e2',
      '& li': {
        color: '#A1A1A1'
      }
    }
  }
}));

const MobileMenuSlider = () => {
  const classes = useStyles();
  // let item1 = useRef(null);

  return (
    <>
      <main>
        <nav>
          <div className="nav-wrap">
            <div className="nav-element-wrap">
              <ul className={classes.ul}>
                <NavLink to="/about" exact>
                  <li>About</li>
                </NavLink>
                <NavLink to="/portfolio" exact>
                  <li>Portfolio</li>
                </NavLink>
                <NavLink to="/skills" exact>
                  <li>Skills</li>
                </NavLink>
                <NavLink to="/education" exact>
                  <li>Education</li>
                </NavLink>
                <NavLink to="/contact" exact>
                  <li>Contact</li>
                </NavLink>
              </ul>
            </div>
          </div>
        </nav>
      </main>
    </>
  );
};
export default MobileMenuSlider;
