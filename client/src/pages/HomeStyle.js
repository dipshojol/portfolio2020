import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  viewPortHW: {
    width: '100%',
    display: 'grid',
    placeItems: 'center'
  },
  maxHW: {
    maxWidth: '1800px',
    maxHeight: '1200px',
    height: '100vh',
    minHeight: '400px',
    // border: '1px solid blue',
    overflow: 'hidden',
    display: 'grid',
    position: 'relative'
  },
  landingWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    color: '#8b8b8b',
    minHeight: '650px',
    height: '100vh',
    width: '100%',
    overflow: 'hidden'
    // border: '1px solid red'
    // marginTop: '100px'
  },
  leftSection: {
    display: 'grid',
    justifyContent: 'end',
    alignContent: 'center',
    // width: '90%',
    overflow: 'hidden',

    '& img': {
      // maxHeight: '45rem',
      height: '100%',
      // display: 'grid',
      // justifySelf: 'end',
      // marginTop: '7.5rem',
      webkitFilter: 'grayscale(100%)' /* Safari 6.0 - 9.0 */,
      filter: 'grayscale(100%)'
    }
  },
  rightSection: {
    display: 'grid',
    alignContent: 'center',
    paddingLeft: '10px',
    color: '#565656',
    gridTemplateRows: '9fr .5fr',
    maxHeight: '95vh',
    width: '100%',
    width: '100%',
    overflow: 'hidden',

    '& div': {
      display: 'grid',
      alignContent: 'center'
    },

    '& h5': {
      fontSize: '5rem',
      margin: 0
    },
    '& h1': {
      fontSize: '7rem',
      marginBottom: 0
    },
    '& h6': {
      fontSize: '2rem',
      margin: 0
    }
  },
  lastChild: {
    marginTop: '-1.6rem'
  },
  firstChild: {
    marginTop: '0'
  },
  greetings: {
    marginTop: 60
  },
  scrollDown: {
    margin: '0 auto'
  },
  scrollDownImg: {
    height: 50
  },
  // about section 1
  aboutSection: {
    // color: '#101010',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  },
  aboutMe1: {
    // maxWidth: '50%',
    fontSize: '4rem',
    padding: '3rem',
    zIndex: '1',
    transition: 'all .4s ease',
    // visibility: 'hidden',
    opacity: 1,

    '& h1': {
      display: 'inline',
      fontSize: '5rem'
    }
  },
  bgImg: {
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
      justifySelf: 'end',
      '&:hover': {
        transform: 'scale(1.05)',
        transition: 'all .4s ease'
      }
    }
  },

  aboutSection2: {
    // position: 'relative',
    color: '#000',
    display: 'grid',
    // gridTemplateColumns: '1fr 1fr',
    placeItems: 'center'
  },
  bgImg2: {
    zIndex: '-1',
    '& img': {
      opacity: '.5'
    }
    // marginRight: '-50px',
  },
  img1: {
    position: 'absolute',
    left: '50px',
    top: '0',
    width: '25%',
    webkitFilter: 'grayscale(100%)' /* Safari 6.0 - 9.0 */,
    filter: 'grayscale(100%)'
  },
  img2: {
    position: 'absolute',
    right: '0',
    bottom: '0',
    width: '25%',
    webkitFilter: 'grayscale(100%)' /* Safari 6.0 - 9.0 */,
    filter: 'grayscale(100%)'
  },
  img3: {
    position: 'absolute',
    right: '0',
    top: '50px',
    width: '25%',
    webkitFilter: 'grayscale(100%)' /* Safari 6.0 - 9.0 */,
    filter: 'grayscale(100%)'
  },
  img4: {
    position: 'absolute',
    left: '50%',
    top: '-100px',
    width: '10%',
    webkitFilter: 'grayscale(100%)' /* Safari 6.0 - 9.0 */,
    filter: 'grayscale(100%)'
  },
  img5: {
    position: 'absolute',
    right: '0%',
    top: '30px',
    width: '3%',
    webkitFilter: 'grayscale(100%)' /* Safari 6.0 - 9.0 */,
    filter: 'grayscale(100%)'
  },
  img6: {
    position: 'absolute',
    left: '4%',
    bottom: '5%',
    width: '15%',
    webkitFilter: 'grayscale(100%)' /* Safari 6.0 - 9.0 */,
    filter: 'grayscale(100%)'
  },
  img7: {
    position: 'absolute',
    left: '40%',
    bottom: '5%',
    width: '15%',
    webkitFilter: 'grayscale(100%)' /* Safari 6.0 - 9.0 */,
    filter: 'grayscale(100%)'
  },
  aboutMe2: {
    fontSize: '2rem',
    display: 'grid',
    placeContent: 'center',
    width: '60%',
    '& div': {
      // marginLeft: '-200px'
    },
    '& h2': {
      display: 'inline'
    }
  }
}));

export default useStyles;
