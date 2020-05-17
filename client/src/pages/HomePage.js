import React from 'react';
import { useWindowSize } from '../utils/windowSize';
import { makeStyles } from '@material-ui/core/styles';
import myPhoto from '../images/photoBW.png';

const useStyles = makeStyles(theme => ({
  landingWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    // fontFamily: "'Aladin', cursive"
    fontFamily: "'Zilla Slab Highlight', cursive"
  },
  leftSection: {
    display: 'grid',
    placeContent: 'end',
    '& img': {
      maxHeight: '45rem',
      display: 'grid',
      justifySelf: 'end',
      marginTop: '7.5rem'
    }
  },
  rightSection: {
    display: 'grid',
    alignContent: 'center',
    marginTop: '7.5rem',
    maxWidth: '75%',
    paddingLeft: '10px',
    '& h5': {
      fontSize: '3rem',
      margin: 0,
      color: '#565656'
    },
    '& h1': {
      color: '#8b8b8b',
      fontSize: '7rem',
      margin: 0,
      fontFamily: "'Zilla Slab Highlight', cursive"
    },
    '& h6': {
      fontSize: '2rem',
      margin: 0,
      color: '#202020'
    }
  }
}));

const HomePage = () => {
  const classes = useStyles();
  let [width] = useWindowSize();

  return width > 630 ? (
    <>
      <div className={classes.landingWrapper}>
        <div className={classes.leftSection}>
          <img src={myPhoto} alt="shojol's photo" />
        </div>
        <div className={classes.rightSection}>
          <h5>Hello,_I'm</h5>
          <h1>Shojol</h1>
          <h1>Shake</h1>
          <h6>I_create_websites_and_applications</h6>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};
export default HomePage;
