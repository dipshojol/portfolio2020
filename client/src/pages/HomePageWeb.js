import React, { useRef, useEffect } from 'react';
import myPhoto from '../images/photoBW.png';
import useStyles from './HomePageStyle';
import AboutMe from './AboutMe';
import { TweenMax, Power3 } from 'gsap';

const HomePageWeb = () => {
  const landingWrap = useRef(null);
  const landingPhoto = useRef(null);
  const h5 = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    console.log(landingPhoto.current);
    TweenMax.to(landingWrap.current, 0, {
      visibility: 'visible'
    });
    TweenMax.from(landingPhoto.current, 1, {
      opacity: 0,
      x: -50,
      ease: Power3.easeOut
    });
    TweenMax.from(h5.current, 1, { opacity: 0, x: +50, ease: Power3.easeOut });
  }, []);

  return (
    <>
      <div ref={landingWrap} className={classes.landingWrapper}>
        <div className={classes.leftSection}>
          <img ref={landingPhoto} src={myPhoto} alt="shojol" />
        </div>
        <div ref={h5} className={classes.rightSection}>
          <h5>Hello,_I'm</h5>
          <h1 className={classes.firstChild}>Shojol</h1>
          <h1 className={classes.lastChild}>Shake</h1>
          <h6>I_create_websites_and_applications</h6>
        </div>
      </div>
      <AboutMe />
    </>
  );
};
export default HomePageWeb;
