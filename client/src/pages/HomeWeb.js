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
  const landingWrap = useRef(null);
  const landingPhoto = useRef(null);
  const h5 = useRef(null);
  const h1 = useRef(null);
  const h12 = useRef(null);
  const h6 = useRef(null);
  const aboutMe1 = useRef(null);
  const aboutMeImg = useRef(null);

  // const [ref, { entry }] = useIntersectionObserver({
  //   // The root to use for intersection.
  //   // If not provided, use the top-level document’s viewport.
  //   root: null,
  //   // Same as margin, can be 1, 2, 3 or 4 components, possibly negative lengths.
  //   // If an explicit root element is specified, components may be percentages of the
  //   // root element size.  If no explicit root element is specified, using a percentage
  //   // is an error.
  //   rootMargin: '0px',
  //   // Threshold(s) at which to trigger callback, specified as a ratio, or list of
  //   // ratios, of (visible area / total area) of the observed element (hence all
  //   // entries must be in the range [0, 1]).  Callback will be invoked when the visible
  //   // ratio of the observed element crosses a threshold in the list.
  //   threshold: [0]
  // });
  // const isVisible = entry && entry.isIntersecting;

  const classes = useStyles();

  const refs = useRef(null);

  useEffect(() => {
    AOS.init();
  });

  // useEffect(() => {
  //   AOS.init();

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       console.log(entry);

  //       if (entry.isIntersecting) {
  //         //do your actions here
  //         console.log('It works!');
  //       }
  //     },
  //     {
  //       root: null,
  //       rootMargin: '0px',
  //       threshold: 0.1
  //     }
  //   );
  //   if (ref.current) {
  //     observer.observe(ref.current);
  //   }
  // }, [refs]);

  // useEffect(() => {
  //   console.log(`The component is ${isVisible ? 'visible' : 'not visible'}.`);

  //   if (isVisible) {
  //     TweenMax.to(aboutMe1.current, 0, {
  //       visibility: 'visible'
  //     });
  //     TweenMax.to(aboutMeImg.current, 1, {
  //       visibility: 'visible'
  //     });
  //     TweenMax.staggerFrom(
  //       [aboutMe1.current, aboutMeImg.current],
  //       1,
  //       {
  //         opacity: 0,
  //         x: 200,
  //         ease: Power3.easeOut
  //       },
  //       0.6
  //     );
  //   } else {
  //     TweenMax.to(aboutMeImg.current, 0, {
  //       visibility: 'hidden'
  //     });
  //   }
  //   // }
  // }, [isVisible]);

  // useEffect(() => {
  //   TweenMax.to(landingWrap.current, 0, {
  //     visibility: 'visible'
  //   });
  //   // TweenMax.from(landingPhoto.current, 1, {
  //   //   opacity: 0,
  //   //   x: -50,
  //   //   ease: Power3.easeOut
  //   // });
  //   TweenMax.staggerFrom(
  //     [landingPhoto.current, h5.current, h1.current, h12.current, h6.current],
  //     1,
  //     {
  //       opacity: 0,
  //       y: -50,
  //       ease: Power3.easeOut
  //     },
  //     0.6
  //   );
  // }, []);

  return (
    <>
      <section className="Product-XYZ">
        <div className="content XYZ-container">
          <img
            className="product-img"
            data-aos="zoom-in-left"
            alt="XYZ"
            src={myPhoto}
          />

          <section className="XYZ-details">
            <h2 className="product-header"> Lorem ipsum etc. </h2>
            <p className="product-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, .
            </p>
          </section>
        </div>
      </section>
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
          <div ref={aboutMe1}>
            I'm a <h1>Frontend/MERN Developer</h1>
            <br /> living in Toronto.
            <br />I love to develop unique and robust web application and my
            interest in web technology increasing since the day I started
            working using web technologies. <br />
          </div>
        </div>
        <div ref={aboutMeImg} className={classes.bgImg1}>
          <img src={photography} alt="traveling" />
        </div>
      </div>
      <div ref={refs} id="aboutMe" className={classes.aboutSection2}>
        <div className={classes.bgImg2}>
          <img src={photography2} alt="traveling" />
        </div>
        <div data-aos="fade-zoom-in" className={classes.aboutMe2}>
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
