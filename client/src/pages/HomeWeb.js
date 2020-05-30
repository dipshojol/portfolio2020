import React, { useRef, useEffect } from 'react';
import useStyles from './HomeStyle';
// import { TweenMax, Power3 } from 'gsap';
// import { useIntersectionObserver } from 'react-intersection-observer-hook';

import AOS from 'aos';
import 'aos/dist/aos.css';

import myPhoto from '../images/photoBW.png';
import photography from '../images/jack-finnigan-3uOP_akvtOY-unsplash.jpg';
import photography2 from '../images/top-view-photo-of-keyboard-near-earphones-1420701.jpg';

const HomePageWeb = () => {
  const classes = useStyles();

  useEffect(() => {
    AOS.init({
      duration: 1200
    });
  });

  return (
    <>
      <div className={classes.landingWrapper}>
        <div className={classes.leftSection}>
          <img data-aos="fade-up" src={myPhoto} alt="shojol" />
        </div>
        <div data-aos="fade-down" className={classes.rightSection}>
          <h5>Hello,_I'm</h5>
          <h1 className={classes.firstChild}>Shojol</h1>
          <h1 className={classes.lastChild}>Shake</h1>
          <h6>I_create_websites_and_applications</h6>
        </div>
      </div>
      <div data-aos="fade-up" className={classes.aboutSection}>
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
          <img data-aos="fade-up" src={photography} alt="traveling" />
        </div>
      </div>
      <div id="aboutMe" className={classes.aboutSection2}>
        <div className={classes.bgImg2}>
          <img data-aos="fade-up" src={photography2} alt="traveling" />
        </div>
        <div data-aos="fade-down" className={classes.aboutMe2}>
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
    </>
  );
};
export default HomePageWeb;
