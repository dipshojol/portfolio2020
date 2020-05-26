import React, { useRef, useEffect } from 'react';
import useStyles from './HomeStyle';
import { TweenMax, Power3 } from 'gsap';
import { Controller, Scene } from 'react-scrollmagic';
import { Back } from 'gsap/EasePack';
import { Tween, Timeline } from 'react-gsap';

import myPhoto from '../images/photoBW.png';
import photography from '../images/jack-finnigan-3uOP_akvtOY-unsplash.jpg';
import photography2 from '../images/top-view-photo-of-keyboard-near-earphones-1420701.jpg';

const Education = () => {
  const classes = useStyles();

  return (
    <>
      <Controller>
        <Scene duration={1000} offset={-50} triggerElement="#aboutMe">
          <Tween
            staggerFrom={{ y: 50, visibility: 'hidden', opacity: 0 }}
            staggerTo={{ y: 0, visibility: 'visible', opacity: 1 }}
            stagger={1}
          >
            <div className={classes.aboutSection}>
              <div className={classes.aboutMe1}>
                <div>
                  I'm a <h1>Web Developer</h1>
                  <br /> and Designer living in
                  <span> Toronto</span>.
                  {/* <br />I love to develop unique and robust web application and my
          interest in web technology increasing since the day I started working
          using web technologies. <br /> */}
                  <br />I spend my daily life, Design and Developing new
                  websites/applications using the most advanced web technologies
                  such as, <br />
                </div>
              </div>
              <div id="aboutMe" className={classes.bgImg1}>
                <img src={photography} alt="traveling" />
              </div>
            </div>
          </Tween>
        </Scene>
      </Controller>
    </>
  );
};
export default Education;
