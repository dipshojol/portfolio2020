import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  aboutSection: {
    // display: 'grid',
    // gridTemplateColumns: '3fr 1fr',
    // placeItems: 'flex-start',
    minHeight: '100vh',
    marginTop: 50,
    position: 'relative',
    display: 'grid',
    alignItems: 'center'
    // justifyItems: 'center'
  },
  aboutMe1: {
    // position: 'absolute',
    // top: '50%',
    marginTop: '-1rem',
    maxWidth: '50%',
    fontSize: '4rem',
    padding: '3rem',
    fontFamily: "'Marcellus SC', serif",
    zIndex: '1',
    color: '#8b8b8b',
    transition: 'all .4s ease',
    // textAlign: 'center',

    '&:hover': {
      // border: '5px solid #8b8b8b',
      // padding: '3.5rem',
      transition: 'all .4s ease'
    },

    '& h1': {
      display: 'inline'
      // color: '#8b8b8b'
    }
  },
  bgImg1: {
    position: 'absolute',
    right: '0',
    top: '0',
    display: 'grid',
    justifyItems: 'end',
    overflow: 'hidden',
    // border: '1px solid',
    height: '100%',

    '& img': {
      maxHeight: '100%',
      maxWidth: '50vw',
      // width: '10%',
      alignSelf: 'center',
      webkitFilter: 'grayscale(100%)' /* Safari 6.0 - 9.0 */,
      filter: 'grayscale(100%)',
      transition: 'all .4s ease',
      display: 'grid',
      justifySelf: 'end'
    },
    '&:hover': {
      '& img': {
        webkitFilter: 'grayscale(35%)' /* Safari 6.0 - 9.0 */,
        filter: 'grayscale(35%)',
        transform: 'scale(1.05)',
        transition: 'all .4s ease'
      }
    }
  },
  aboutSection2: {
    // display: 'grid',
    // gridTemplateColumns: '3fr 1fr',
    // placeItems: 'flex-start',
    minHeight: '100vh',
    marginTop: 50,
    position: 'relative',
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center'
  },
  aboutMe2: {
    maxWidth: '60%',
    fontSize: '2rem',
    fontFamily: "'Marcellus SC', serif",
    zIndex: '1',
    color: '#8b8b8b',
    marginTop: '22rem',
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
