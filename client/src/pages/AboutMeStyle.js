import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  aboutSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    placeItems: 'center',
    marginTop: 50
  },
  traveling: {
    position: 'relative',
    display: 'grid',
    placeContent: 'center',
    overflow: 'hidden',
    '& img': {
      width: '100%',
      webkitFilter: 'grayscale(100%)' /* Safari 6.0 - 9.0 */,
      filter: 'grayscale(100%)',
      transition: 'all .4s ease'
    },
    '&:hover': {
      '& img': {
        width: '100%',
        webkitFilter: 'grayscale(0)' /* Safari 6.0 - 9.0 */,
        filter: 'grayscale(0)',
        // width: '110%',
        transform: 'scale(1.05)',
        transition: 'all .4s ease'
      }
    },
    '& h1': {
      position: 'absolute',
      right: 0,
      bottom: '0',
      color: '#fff',
      zIndex: '1',
      fontSize: '8rem',
      // '& span:first-child': {
      //   color: '#000'
      // },
      '& span:last-child': {
        color: '#fff',
        paddingLeft: '5rem'
      }
    }
  },
  aboutMe: {
    fontSize: '1.5rem',
    padding: '5rem',
    fontFamily: "font-family: 'Dosis', sans-serif",

    '& h1': {
      display: 'inline',
      color: '#8b8b8b'
    },
    '& h2': {
      display: 'inline',
      color: '#8b8b8b'
    },
    '& span': {
      // fontSize: '1.7rem'
    }
  }
}));

export default useStyles;
