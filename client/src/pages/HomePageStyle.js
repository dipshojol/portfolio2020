import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  landingWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    // fontFamily: "'Zilla Slab Highlight', cursive",
    fontFamily: "'Marcellus SC', serif",
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
    alignContent: 'center',
    marginTop: '7.5rem',
    maxWidth: '75%',
    paddingLeft: '10px',
    '& h5': {
      fontSize: '3rem',
      margin: 0
      // color: '#565656'
    },
    '& h1': {
      fontSize: '7rem',
      // marginTop: 0,
      marginBottom: 0,
      // fontFamily: "'Zilla Slab Highlight', cursive"
      fontFamily: "'Marcellus SC', serif"
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
  }
}));

export default useStyles;
