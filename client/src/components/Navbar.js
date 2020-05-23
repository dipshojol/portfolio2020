import React, { useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobileMenu from './MobileMenu';
import { useWindowSize } from '../utils/windowSize';
import { NavLink } from 'react-router-dom';
import myLogo from '../images/myLogo.png';
import { TweenMax, Power3 } from 'gsap';

const useStyles = makeStyles(theme => ({
  nav: {
    fontFamily: "'Teko', sans-serif",
    fontSize: '1.1rem',
    background: '#565656',
    height: '60px',
    overflow: 'hidden',
    display: 'grid',
    gridTemplateColumns: '100px auto'
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
  }
}));

const NavbarWeb = () => {
  const mainNav = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    console.log(mainNav.current);
    TweenMax.fromTo(
      mainNav.current,
      1,
      {
        opacity: 0,
        y: -60,
        ease: Power3.easeOut
      },
      {
        opacity: 1,
        delay: 3.5,
        y: 0,
        ease: Power3.easeOut
      }
    );
  }, []);
  return (
    <>
      <nav ref={mainNav} className={classes.nav}>
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

const Navbar = () => {
  let [width] = useWindowSize();

  return width > 630 ? <NavbarWeb /> : <MobileMenu />;
};
export default Navbar;
