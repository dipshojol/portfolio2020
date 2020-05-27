import React, { useRef, useEffect } from 'react';
import useStyles from './HomeStyle';
import { TweenMax, Power3 } from 'gsap';
// import { Controller, Scene } from 'react-scrollmagic';
// import { Back } from 'gsap/EasePack';
// import { Tween, Timeline } from 'react-gsap';

import myPhoto from '../images/photoBW.png';
import photography from '../images/jack-finnigan-3uOP_akvtOY-unsplash.jpg';
import photography2 from '../images/top-view-photo-of-keyboard-near-earphones-1420701.jpg';

const HomePageWeb = () => {
  const landingWrap = useRef(null);
  const landingPhoto = useRef(null);
  const h5 = useRef(null);
  const h1 = useRef(null);
  const h12 = useRef(null);
  const h6 = useRef(null);

  const classes = useStyles();

  useEffect(() => {
    TweenMax.to(landingWrap.current, 0, {
      visibility: 'visible'
    });
    // TweenMax.from(landingPhoto.current, 1, {
    //   opacity: 0,
    //   x: -50,
    //   ease: Power3.easeOut
    // });
    TweenMax.staggerFrom(
      [landingPhoto.current, h5.current, h1.current, h12.current, h6.current],
      1,
      {
        opacity: 0,
        y: -50,
        ease: Power3.easeOut
      },
      0.6
    );
  }, []);

  return (
    <>
      {/* <Controller>
        <Scene duration={1000} offset={-50} triggerElement="#aboutMe">
          <Tween
            staggerFrom={{ y: 50, visibility: 'hidden', opacity: 0 }}
            staggerTo={{ y: 0, visibility: 'visible', opacity: 1 }}
            stagger={1}
          > */}
      <div ref={landingWrap} className={classes.landingWrapper}>
        <div className={classes.leftSection}>
          <img ref={landingPhoto} src={myPhoto} alt="shojol" />
        </div>
        <div className={classes.rightSection}>
          <h5 ref={h5}>Hello,_I'm</h5>
          <h1 ref={h1} className={classes.firstChild}>
            Shojol
          </h1>
          <h1 ref={h12} className={classes.lastChild}>
            Shake
          </h1>
          <h6 ref={h6}>I_create_websites_and_applications</h6>
        </div>
      </div>
      <div className={classes.aboutSection}>
        <div className={classes.aboutMe1}>
          <div>
            I'm a <h1>Frontend/MERN Developer</h1>
            <br /> living in Toronto.
            <br />I love to develop unique and robust web application and my
            interest in web technology increasing since the day I started
            working using web technologies. <br />
          </div>
        </div>
        <div className={classes.bgImg1}>
          <img src={photography} alt="traveling" />
        </div>
      </div>
      <div id="aboutMe" className={classes.aboutSection2}>
        <div className={classes.bgImg2}>
          <img src={photography2} alt="traveling" />
        </div>
        <div className={classes.aboutMe2}>
          <br />I spend my daily life, Design and Developing new
          websites/applications using the most advanced web technologies such
          as, <br />
          <h2>Frontend</h2> engineering – ( vanilla
          <span> JavaScript (ES6), ReactJS</span>, jQuery, CSS/Scss,
          <span> Material UI</span>, Bootstrap,
          <span> Restful API</span>, Responsive web design, cross browser
          compatible and more), digital accessibility, <br />
          <h2>Design</h2> – (<span>Sketch, Adobe XD</span>, Adobe Photoshop,
          Adobe Illustrator) <br />
          <h2>Backend</h2> programming and <h2>Database</h2> – (
          <span>NodeJS</span>, JIVE, and <span>MongoDB</span>, PostgreSQL,
          Firebase and more). <br />
          <br />
          Currently i am working for <span>dropisle</span> inc. as an frontend
          developer. In the past few years, I worked for some great companies
          like <span>OCT</span> (oct.ca), <span>Apple</span> inc. and
          <span>TriaBeauty</span> inc. which something pushes me more into
          <span> making something different</span>.
        </div>
      </div>
      {/* </Tween>
        </Scene>
      </Controller> */}
    </>
  );
};
export default HomePageWeb;
