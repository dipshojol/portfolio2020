import React, { useRef, useEffect } from 'react';
import myPhoto from '../images/photoBW.png';
import useStyles from './AboutMeStyle';
import photography from '../images/jack-finnigan-3uOP_akvtOY-unsplash.jpg';
import photography2 from '../images/top-view-photo-of-keyboard-near-earphones-1420701.jpg';
// import photography2 from '../images/photography2.jpg';
import { TweenMax, Power3 } from 'gsap';

const AboutMe = () => {
  const landingWrap = useRef(null);
  const landingPhoto = useRef(null);
  const h5 = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    // console.log(landingPhoto.current);
    // TweenMax.to(landingWrap.current, 0, {
    //   visibility: 'visible'
    // });
    // TweenMax.from(landingPhoto.current, 1, {
    //   opacity: 0,
    //   x: -50,
    //   ease: Power3.easeOut
    // });
    // TweenMax.from(h5.current, 1, { opacity: 0, x: +50, ease: Power3.easeOut });
  }, []);

  return (
    <>
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
          {/* <br /> */}
          <h2>Design</h2> – (<span>Sketch, Adobe XD</span>, Adobe Photoshop,
          Adobe Illustrator) <br />
          {/* <br /> */}
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
export default AboutMe;
