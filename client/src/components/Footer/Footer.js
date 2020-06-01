import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import bgImg from '../../images/gabriel-alenius-USXfF_ONUGo-unsplash.jpg';
import { useWindowSize } from '../../utils/windowSize';
import FooterMobile from './FooterMobile';

const useStyles = makeStyles(theme => ({
  footer: {
    height: '100vh',
    minHeight: '600px',
    width: '100vw',
    display: 'grid',
    color: '#fff',
    position: 'relative',
    borderLeft: '10px solid #000',
    letterSpacing: 2,
    overflow: 'hidden',
    '& img': {
      position: 'absolute',
      left: '0',
      top: '0',
      zIndex: '-1',
      height: '100%',
      webkitFilter: 'grayscale(100%)' /* Safari 6.0 - 9.0 */,
      filter: 'grayscale(100%)'
    }
  },

  footerWrap: {
    background: '#000',
    fontFamily: 'var(--header-footer-font)',
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    width: '80%',
    height: '80%',
    justifySelf: 'end',
    alignSelf: 'end',
    paddingLeft: '4rem',
    paddingTop: '6rem',
    '& h6': {
      fontSize: '1rem',
      opacity: '.6'
    },
    '& h5': {
      fontSize: '1.4rem',
      opacity: '.9'
    },
    '& a': {
      color: '#fff'
    }
  },
  infoWrap: {
    width: '80%',
    display: 'grid',
    gridTemplateRows: '0.2fr auto 0.2fr'
  },
  infoOne: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr'
  },
  infoTwo: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr'
  },
  initial: {
    '& h1': {
      fontSize: '5rem',
      margin: '0',
      padding: '0'
    },
    '& a': {
      fontSize: '1.4rem',
      paddingRight: '20px',
      cursor: 'pointer',
      transition: 'all .4s ease',

      '&:hover': {
        letterSpacing: '10px',
        transition: 'all .4s ease'
      }
    }
  },
  photoCredits: {
    display: 'grid',
    alignContent: 'end',
    '& h6': {
      fontSize: '.4rem'
    }
  }
}));

const Footer = () => {
  let [width] = useWindowSize();
  const classes = useStyles();

  const FooterWeb = () => (
    <>
      <footer className={classes.footer}>
        <img src={bgImg} alt="bgImg" />
        <div className={classes.footerWrap}>
          <div className={classes.infoWrap}>
            <div className={classes.infoOne}>
              <div>
                <h6>Name</h6>
                <h5>Shake, Shojol</h5>
              </div>
              <div>
                <h6>Phone</h6>
                <h5>+1 (365) 228-7013</h5>
              </div>
            </div>
            <div className={classes.infoTwo}>
              <div>
                <h6>Email</h6>
                <h5>
                  <a href="mailto: dip_shojol@yahoo.com">
                    dip_shojol@yahoo.com
                  </a>
                </h5>
                <h5>
                  <a href="mailto: shojol@dropisle.com">shojol@dropisle.com</a>
                </h5>
              </div>
              <div>
                <h6>Address</h6>
                <h5>Toronto, ON</h5>
              </div>
            </div>
            <div className={classes.photoCredits}>
              <h6>PHOTO SOURCE (EXCEPT PROJECTS): UNSPLASH.COM</h6>
            </div>
          </div>
          <div className={classes.initial}>
            <h1>SS</h1>
            <div className={classes.social}>
              <h6>Follow Me</h6>
              <div>
                <a href="">Lk</a>
                <a href="">In</a>
                <a href="">Git</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );

  return width > 630 ? <FooterWeb /> : <FooterMobile />;
};
export default Footer;
