import React, { useRef, useEffect } from 'react';
import myPhoto from '../images/photoBW.png';
import useStyles from './HomePageStyle';
import AboutMe from './AboutMe';
import { TweenMax, Power3 } from 'gsap';
// import './HomePageArrow.css';

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
          {/* `<div class="container">
            <div class="content">
              <p>Hover me !</p>
              <svg id="more-arrows">
                <polygon
                  class="arrow-top"
                  points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
                />
                <polygon
                  class="arrow-middle"
                  points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
                />
                <polygon
                  class="arrow-bottom"
                  points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
                />
              </svg>
            </div>
          </div>` */}
        </div>
      </div>
      <AboutMe />
    </>
  );
};
export default HomePageWeb;
