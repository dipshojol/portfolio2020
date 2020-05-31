import React, { useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MobileMenuSlider from './MobileMenuSlider';
import CloseButton from './CloseButton';

import { useWindowSize } from '../../utils/windowSize';
import { NavLink } from 'react-router-dom';
import myLogo from '../../images/myLogo.png';

const useStyles = makeStyles(theme => ({
  nav: {
    fontFamily: 'var(--header-footer-font)',
    fontSize: '1.1rem',
    background: '#000',
    height: '60px',
    overflow: 'hidden',
    display: 'grid',
    gridTemplateColumns: '100px auto',
    zIndex: '100',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%'
  },
  logoWrapper: {
    display: 'grid',
    placeContent: 'center',
    height: 'inherit',
    '& a': {
      display: 'grid',
      placeContent: 'center',
      cursor: 'pointer'
    },
    '& img': {
      maxWidth: 75
    }
  },
  ul: {
    // listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    maxWidth: '700px',
    width: '90%',
    justifySelf: 'end',
    textAlign: 'center',
    margin: '0',

    '& a': {
      border: '1px solid #fff',
      transform: 'rotate(25deg)',
      // position: 'relative',
      fontSize: '1.5em',
      overflow: 'hidden',
      height: '135px',
      marginTop: -35,
      width: '92%',
      '& li': {
        textDecoration: 'none',
        color: '#fff',
        lineHeight: '130px',
        display: 'block'
      },
      '& span': {
        position: 'absolute',
        left: -20,
        top: '0',
        transform: 'rotate(-25deg)',
        width: '135%',
        transition: 'all .4s ease'

        // opacity: 0.5
      }
    },
    '& :hover': {
      cursor: 'pointer',
      zIndex: '1',
      // background: '#e2e2e2',
      transition: 'all .4s ease',
      color: '#A1A1A1',
      letterSpacing: 2
    },
    '& a.active': {
      cursor: 'pointer',
      zIndex: '1',
      background: '#e2e2e2',
      '& span': {
        transition: 'all .4s ease',
        opacity: 1
      },
      '& li': {
        color: '#565656'
      }
    }
  },
  navMobile: {
    background: '#000',
    height: '50px',
    overflow: 'hidden',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    position: 'fixed',
    width: '100%',
    zIndex: 1
  },
  logoWrapper: {
    display: 'grid',
    justifyContent: 'left',
    alignContent: 'center',
    height: 'inherit',
    '& img': {
      maxWidth: 50,
      marginLeft: 10
    }
  }
}));

const NavbarWeb = () => {
  const classes = useStyles();

  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.logoWrapper}>
          <NavLink to="/">
            <img src={myLogo} alt="myLogo" />
          </NavLink>
        </div>
        <ul className={classes.ul}>
          <NavLink to="/about" exact>
            <li>
              <span>About</span>
            </li>
          </NavLink>
          <NavLink to="/portfolio" exact>
            <li>
              <span>Portfolio</span>
            </li>
          </NavLink>
          <NavLink to="/skills" exact>
            <li>
              <span>Skills</span>
            </li>
          </NavLink>
          <NavLink to="/education" exact>
            <li>
              <span>Education</span>
            </li>
          </NavLink>
          <NavLink to="/contact" exact>
            <li>
              <span>Contact</span>
            </li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

const MobileMenu = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.navMobile}>
        <div className={classes.logoWrapper}>
          <img src={myLogo} alt="myLogo" />
        </div>
        <CloseButton />
        <MobileMenuSlider />
      </div>
    </>
  );
};

const Navbar = () => {
  let [width] = useWindowSize();

  return width > 630 ? <NavbarWeb /> : <MobileMenu />;
};
export default Navbar;
