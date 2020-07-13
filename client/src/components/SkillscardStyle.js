import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  viewPortHW: {
    width: '100%',
    display: 'grid',
    placeItems: 'center',
    marginTop: '60px',
    '& img': {
      width: '30%',
      webkitFilter: 'grayscale(100%)' /* Safari 6.0 - 9.0 */,
      filter: 'grayscale(100%)'
    }
  },
  maxHW: {
    width: '100%',
    maxWidth: '1800px',
    overflow: 'hidden',
    display: 'grid',
    position: 'relative'
  },
  cardContainer: {},
  cardUl: {
    margin: '0',
    padding: '0',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    '& li': {
      // width: '200px',
      height: '200px',
      border: '1px solid gray',
      listStyle: 'none',
      display: 'grid',
      /* place-self: center; */
      placeContent: 'center',
      placeItems: 'center'
      // display: 'inline-block'
    }
  }
}));

export default useStyles;
