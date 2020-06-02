import React, { useEffect } from 'react';
import { useWindowSize } from '../utils/windowSize';
import { makeStyles } from '@material-ui/core/styles';
import M from 'materialize-css';

import dropsile from '../images/dropsile.jpg';

const useStyles = makeStyles(theme => ({
  portfolioWrap: {
    margin: '16rem 0',
    position: 'relative'
  },
  pLine: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '50%',
    width: 1,
    backgroundColor: '#D1D1D1',
    height: '100%'
  },
  pList: {
    display: 'grid',
    justifyContent: 'center'
  },
  pListItem: {
    // border: '1px solid',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    marginBottom: '10rem'
  },
  pListItemLeft: {
    display: 'grid',
    justifyItems: 'end',
    marginRight: '5rem',
    border: '1px solid #D1D1D1',
    height: '30rem',
    width: '40rem',
    overflow: 'hidden',

    '&:hover': {
      '& img': {
        webkitFilter: 'grayscale(0%)' /* Safari 6.0 - 9.0 */,
        filter: 'grayscale(0%)',
        transform: 'scale(1.05)',
        transition: 'all .4s ease'
      }
    }
  },
  pListItemRight: {
    position: 'relative'
  },
  dropsile: {
    width: '100%',
    webkitFilter: 'grayscale(100%)' /* Safari 6.0 - 9.0 */,
    filter: 'grayscale(100%)',
    transition: 'all .4s ease'
  },
  projectName: {
    backgroundColor: '#fafafa',
    zIndex: '10',
    position: 'absolute',
    top: '30%',
    left: '-10px',
    padding: '1.5rem 0',
    '& h2': {
      fontSize: '3rem',
      margin: 0
    },
    '& h6': {
      fontSize: '1.5rem',
      margin: 0
    }
  },
  pListItemLeft2: {
    position: 'relative'
  },
  projectName2: {
    backgroundColor: '#fafafa',
    zIndex: '10',
    position: 'absolute',
    top: '30%',
    right: '-10px',
    padding: '1.5rem 0',
    textAlign: 'right',
    '& h2': {
      fontSize: '3rem',
      margin: 0
    },
    '& h6': {
      fontSize: '1.5rem',
      margin: 0
    }
  },
  pListItemRight2: {
    display: 'grid',
    // justifyItems: 'end',
    marginLeft: '5rem',
    border: '1px solid #D1D1D1',
    height: '30rem',
    width: '40rem',
    overflow: 'hidden',

    '&:hover': {
      '& img': {
        webkitFilter: 'grayscale(0%)' /* Safari 6.0 - 9.0 */,
        filter: 'grayscale(0%)',
        transform: 'scale(1.05)',
        transition: 'all .4s ease'
      }
    }
  }
}));
const Portfolio = () => {
  const classes = useStyles();

  useEffect(() => {
    let imgs = document.querySelector('.parallax');
    M.Parallax.init(imgs);
  }, []);

  return (
    <>
      <div className={classes.portfolioWrap}>
        <div className={classes.pLine}></div>
        <div className={classes.pList}>
          <div className={classes.pListItem}>
            <div className={classes.pListItemLeft}>
              {/* <div className="parallax"> */}
              <img className={classes.dropsile} src={dropsile} alt="dropsile" />
              {/* </div> */}
            </div>
            <div className={classes.pListItemRight}>
              <div className={classes.projectName}>
                <h6>2020</h6>
                <h2>Dropsile</h2>
              </div>
            </div>
          </div>
          <div className={classes.pListItem}>
            <div className={classes.pListItemLeft2}>
              <div className={classes.projectName2}>
                <h6>2020</h6>
                <h2>Dropsile</h2>
              </div>
            </div>
            <div className={classes.pListItemRight2}>
              {/* <div className="parallax"> */}
              <img className={classes.dropsile} src={dropsile} alt="dropsile" />
              {/* </div> */}
            </div>
          </div>
          <div className={classes.pListItem}>
            <div className={classes.pListItemLeft}>
              <img className={classes.dropsile} src={dropsile} alt="dropsile" />
            </div>
            <div className={classes.pListItemRight}>
              <div className={classes.projectName}>
                <h6>2020</h6>
                <h2>Dropsile</h2>
              </div>
            </div>
          </div>
          <div className={classes.pListItem}>
            <div className={classes.pListItemLeft2}>
              <div className={classes.projectName2}>
                <h6>2020</h6>
                <h2>Dropsile</h2>
              </div>
            </div>
            <div className={classes.pListItemRight2}>
              <img className={classes.dropsile} src={dropsile} alt="dropsile" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
