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
    '& img': {
      position: 'absolute',
      left: '0',
      top: '0',
      zIndex: '-1',
      height: '100%'
    }
  },

  footerWrap: {
    background: '#000',
    fontFamily: 'var(--header-footer-font)',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1fr',
    width: '80%',
    height: '100%',
    justifySelf: 'end'
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footer}>
        <img src={bgImg} alt="bgImg" />
        <div className={classes.footerWrap}>
          <div>
            <h6>Name</h6>
            <h5>Shake, Shojol</h5>
            <h6>Name</h6>
            <h5>Shake, Shojol</h5>
          </div>
          <div>
            <h6>Name</h6>
            <h5>Shake, Shojol</h5>
            <h6>Name</h6>
            <h5>Shake, Shojol</h5>
          </div>
          <div></div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
