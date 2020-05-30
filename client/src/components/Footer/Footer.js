import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import bgImg from '../../images/gabriel-alenius-USXfF_ONUGo-unsplash.jpg';

const useStyles = makeStyles(theme => ({
  footer: {
    height: '100vh',
    width: '100%',
    display: 'grid',
    color: '#fff',
    position: 'relative',
    borderLeft: '10px solid #000',
    letterSpacing: 2,
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
    height: '100%',
    justifySelf: 'end',
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
    fontSize: '5rem',
    '& h1': {
      margin: '0',
      padding: '0'
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
  const classes = useStyles();

  return (
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
              <h5>Lk In Git</h5>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
