import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import myLogo from '../images/myLogo.png';
import MobileMenuButton from './MobileMenuButton';
// import './MobileMenuButton.css';

const useStyles = makeStyles(theme => ({
  nav: {
    background: '#042c41',
    height: '50px',
    overflow: 'hidden',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
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

const MobileMenu = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.nav}>
        <div className={classes.logoWrapper}>
          <img src={myLogo} alt="myLogo" />
        </div>
        <MobileMenuButton />
      </div>
    </>
  );
};
export default MobileMenu;
