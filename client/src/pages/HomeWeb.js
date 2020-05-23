import React, { useRef, useEffect } from 'react';
import useStyles from './HomeStyle';
import { TweenMax, Power3 } from 'gsap';
import { Controller, Scene } from 'react-scrollmagic';
import { Back } from 'gsap/EasePack';
import { Tween, Timeline } from 'react-gsap';

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
      <Controller>
        <Scene duration={300} offset={300} pin>
          <Tween
            wrapper={<ul className="devs" />}
            staggerFrom={{
              opacity: 0,
              cycle: {
                rotationX: [-90, 90],
                transformOrigin: ['50% top -100', '50% bottom 100']
              }
            }}
            stagger={0.1}
          >
            <li>Rich Harris</li>
            <li>Dan Abramov</li>
            <li>Kyle Simpson</li>
            <li>Gregory Brown</li>
            <li>Addy Osmani</li>
            <li>Evan You</li>
            <li>Axel Rauschmayer</li>
            <li>Sarah Drasner</li>
            <li>André Staltz</li>
          </Tween>
        </Scene>
      </Controller>
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
            websites/applications using the most advanced web technologies such
            as, <br />
          </div>
        </div>
        <div className={classes.bgImg1}>
          <img src={photography} alt="traveling" />
        </div>
      </div>
      <div className={classes.aboutSection2}>
        <div className={classes.bgImg2}>
          <img src={photography2} alt="traveling" />
        </div>
        <div className={classes.aboutMe2}>
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
          In the past few years, I have been working for some great companies
          like <span>dropisle</span> inc., <span>OCT</span>(oct.ca),{' '}
          <span>Apple</span> inc. and <span>TriaBeauty</span> inc. which
          something pushes me more into
          <span> making something different</span>.
        </div>
      </div>
    </>
  );
};
export default HomePageWeb;
