import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  viewPortHW: {
    width: '100%',
    display: 'grid',
    placeItems: 'center',
    '& img': {
      webkitFilter: 'grayscale(100%)' /* Safari 6.0 - 9.0 */,
      filter: 'grayscale(100%)'
    }
  },
  maxHW: {
    maxWidth: '1800px',
    maxHeight: '1200px',
    height: '100vh',
    minHeight: '400px',
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
      height: '100%'
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
  aboutSection1: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    height: '100vh'
  },
  aboutMe1: {
    fontSize: '2.5rem',
    display: 'grid',
    alignItems: 'center',

    '& h1': {
      display: 'inline'
      // fontSize: '5rem'
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
    color: '#000',
    display: 'grid',
    placeItems: 'center',
    '& img': {
      opacity: '.7',
      zIndex: '-1',
      position: 'absolute'
    }
  },
  img1: {
    left: '-50px',
    top: '0',
    width: '25%'
  },
  img2: {
    right: '0',
    bottom: '0',
    width: '25%'
  },
  img3: {
    right: '0',
    top: '50px',
    width: '25%'
  },
  img4: {
    left: '50%',
    top: '-100px',
    width: '10%'
  },
  img5: {
    right: '0%',
    top: '30px',
    width: '3%'
  },
  img6: {
    left: '4%',
    bottom: '5%',
    width: '15%'
  },
  img7: {
    left: '60%',
    bottom: '5%',
    width: '15%'
  },
  aboutMe2: {
    fontSize: '1.25rem',
    display: 'grid',
    placeContent: 'center',
    width: '50%',
    '& div': {
      // marginLeft: '-200px'
    },
    '& h2': {
      display: 'inline'
    }
  }
}));

export default useStyles;
