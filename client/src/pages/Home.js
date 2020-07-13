import React, { useEffect } from 'react';
import useStyles from './HomeStyle';
import { useWindowSize } from '../utils/windowSize';
import AOS from 'aos';
import 'aos/dist/aos.css';

import myPhoto from '../images/photoBW.png';
import photography from '../images/jack-finnigan-3uOP_akvtOY-unsplash.jpg';
import Untitled1 from '../images/Untitled-1.png';
import Untitled2 from '../images/Untitled-2.jpg';
import Untitled3 from '../images/Untitled-3.jpg';
import Untitled4 from '../images/Untitled-4.jpg';
import Untitled5 from '../images/Untitled-5.jpg';
import Untitled6 from '../images/Untitled-6.jpg';
import Untitled7 from '../images/Untitled-7.jpg';
import Untitled8 from '../images/Untitled-8.jpg';
import scrollDown from '../images/arrowforpage.gif';

const Home = () => {
  const classes = useStyles();
  let [width] = useWindowSize();

  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out-cubic',
      duration: 700,
      // once: true,
      mobile: false,
      // delay: 2500
      offset: 250
    });
  });

  const renderBrowser = () => (
    <>
      {/* Landing page */}
      <div className={classes.viewPortHW}>
        <div className={classes.maxHW}>
          <div className={classes.landingWrapper}>
            <div className={classes.leftSection}>
              <img src={myPhoto} alt="shojol" />
            </div>
            <div data-aos="fade-left" className={classes.rightSection}>
              <div className={classes.greetings}>
                <h5>Hello,_I'm</h5>
                <h1 className={classes.firstChild}>Shojol</h1>
                <h1 className={classes.lastChild}>Shake</h1>
                <h6>I_create_websites_and_applications</h6>
              </div>
              <div className={classes.scrollDown}>
                <img
                  className={classes.scrollDownImg}
                  src={scrollDown}
                  alt="scroll down"
                />
              </div>
            </div>
          </div>
        </div>
        {/* About me page 1 */}
        <div className={classes.maxHW}>
          <div className={classes.aboutSection1}>
            <div className={classes.aboutMe1}>
              <div>
                I'm a <h1>Frontend Developer</h1>
                living in Toronto. I love to develop unique and robust web
                application and my interest in web technology increasing since
                the day I started working using web technologies. <br />
              </div>
            </div>
            <div className={classes.bgImg}>
              <img src={photography} alt="traveling" />
            </div>
          </div>
        </div>
        {/* About me page 2 */}
        <div className={classes.maxHW}>
          <div className={classes.aboutSection2}>
            {/* <div className={classes.bgImg2}> */}
            {/* <img className={classes.img1} src={Untitled1} alt="traveling2" /> */}
            <img className={classes.img2} src={Untitled2} alt="traveling2" />
            <img className={classes.img3} src={Untitled3} alt="traveling2" />
            {/* <img className={classes.img4} src={Untitled4} alt="traveling2" /> */}
            {/* <img className={classes.img5} src={Untitled5} alt="traveling2" /> */}
            <img className={classes.img6} src={Untitled6} alt="traveling2" />
            <img className={classes.img7} src={Untitled7} alt="traveling2" />
            <img className={classes.img1} src={Untitled8} alt="traveling2" />
            {/* </div> */}
            <div className={classes.aboutMe2}>
              <div className={classes.aboutMeInner}>
                I Design and Developing new websites/applications using the most
                advanced web technologies such as, <br />
                <h2>Frontend</h2> engineering – ( vanilla
                <span> JavaScript (ES6), ReactJS</span>, jQuery, CSS/Scss,
                <span> Material UI</span>, Bootstrap,
                <span> Restful API</span>, Responsive web design, cross browser
                compatible and more), digital accessibility, <br />
                <h2>Design</h2> – (<span>Sketch, Adobe XD</span>, Adobe
                Photoshop, Adobe Illustrator) <br />
                <h2>Backend</h2> programming and <h2>Database</h2> – (
                <span>NodeJS</span>, JIVE, and <span>MongoDB</span>, PostgreSQL,
                Firebase and more). <br />
                <br />
                Currently i am working for <span>dropisle</span> inc. as an
                frontend developer. In the past few years, I worked for some
                great companies like <span>OCT</span> (oct.ca),{' '}
                <span>Apple</span> inc. and
                <span> TriaBeauty</span> inc. which something pushes me more
                into
                <span> making something different</span>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const renderMobile = () => <></>;

  return <div>{width >= 650 ? renderBrowser() : renderMobile()}</div>;
};
export default Home;

// window.addEventListener('load', function() {
//   function registerClickHandler() {
//     var commentButton = document.getElementById('postComment');
//     commentButton.addEventListener('click', function(event) {
//       addComment();
//     });
//   }
//   registerClickHandler();
//   function addComment() {
//     var list = document.getElementById('commentList');
//     var commentContent = document.getElementById('comment').value;
//     var newComment = document.createElement('li');
//     newComment.appendChild(document.createTextNode(commentContent));
//     list.appendChild(newComment);
//   }
// });

// var window: Window & typeof globalThis;
