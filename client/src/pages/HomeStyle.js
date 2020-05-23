import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  landingWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    visibility: 'hidden',
    color: '#8b8b8b',
    minHeight: '100vh',
    marginTop: '-60px'
  },
  leftSection: {
    display: 'grid',
    placeContent: 'end',
    '& img': {
      maxHeight: '45rem',
      display: 'grid',
      justifySelf: 'end',
      marginTop: '7.5rem',
      webkitFilter: 'grayscale(100%)' /* Safari 6.0 - 9.0 */,
      filter: 'grayscale(100%)'
    }
  },
  rightSection: {
    display: 'grid',
    alignContent: 'end',
    marginTop: '7.5rem',
    maxWidth: '75%',
    paddingLeft: '10px',
    color: '#565656',

    '& h5': {
      fontSize: '5rem',
      margin: 0
    },
    '& h1': {
      fontSize: '7rem',
      // marginTop: 0,
      marginBottom: 0
      // fontFamily: "'Zilla Slab Highlight', cursive"
      // fontFamily: "'Marcellus SC', serif"
    },
    '& h6': {
      fontSize: '2rem',
      margin: 0
      // color: '#202020'
    }
  },
  lastChild: {
    marginTop: '-1.6rem'
  },
  firstChild: {
    marginTop: '0'
  },
  // about section
  aboutSection: {
    minHeight: '100vh',
    marginTop: 50,
    position: 'relative',
    display: 'grid',
    alignItems: 'center',
    color: '#101010'
  },
  aboutMe1: {
    maxWidth: '60%',
    fontSize: '4rem',
    padding: '3rem',
    zIndex: '1',
    transition: 'all .4s ease',

    '& h1': {
      display: 'inline'
    }
  },
  bgImg1: {
    position: 'absolute',
    right: '0',
    top: '0',
    display: 'grid',
    justifyItems: 'end',
    overflow: 'hidden',
    height: '100%',

    '& img': {
      maxHeight: '100%',
      maxWidth: '50vw',
      alignSelf: 'center',
      webkitFilter: 'grayscale(100%)' /* Safari 6.0 - 9.0 */,
      filter: 'grayscale(100%)',
      transition: 'all .4s ease',
      display: 'grid',
      justifySelf: 'end'
    },
    '&:hover': {
      '& img': {
        // webkitFilter: 'grayscale(35%)' /* Safari 6.0 - 9.0 */,
        // filter: 'grayscale(35%)',
        transform: 'scale(1.05)',
        transition: 'all .4s ease'
      }
    }
  },
  aboutSection2: {
    minHeight: '100vh',
    marginTop: 50,
    position: 'relative',
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
    color: '#565656'
  },
  aboutMe2: {
    maxWidth: '60%',
    fontSize: '2rem',
    // fontFamily: "'Marcellus SC', serif",
    zIndex: '1',
    // color: '#8b8b8b',
    marginTop: '15rem',
    marginBottom: '5%',

    '& h2': {
      display: 'inline'
      // color: '#8b8b8b'
    }
  },
  bgImg2: {
    position: 'absolute',
    left: '0',
    top: '0',
    display: 'grid',
    justifyItems: 'end',
    overflow: 'hidden',
    // border: '1px solid',
    height: '100%',

    '& img': {
      maxHeight: '80%',
      // maxWidth: '25vw',
      // width: '10%',
      alignSelf: 'center',
      webkitFilter: 'grayscale(100%)' /* Safari 6.0 - 9.0 */,
      filter: 'grayscale(100%)',
      transition: 'all .4s ease'
    },
    '&:hover': {
      '& img': {
        webkitFilter: 'grayscale(35%)' /* Safari 6.0 - 9.0 */,
        filter: 'grayscale(35%)',
        transform: 'scale(1.05)',
        transition: 'all .4s ease'
      }
    }
  }
}));

export default useStyles;
