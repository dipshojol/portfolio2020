import React from 'react';
import Skillscard from './../components/Skillscard';

import html5 from './../images/html5.png';
import css from './../images/css.png';
import bootstrap4 from './../images/bootstrap4.png';
import scss from './../images/scss.png';
import jsx from './../images/jsx.png';

import js from './../images/js.png';
import jquery from './../images/jquery.png';
import angular from './../images/angular.png';
import gatsby from './../images/gatsby.png';

import node from './../images/node.png';
import express from './../images/express.png';
import handlebars from './../images/handlebars.png';
import jive from './../images/jive.png';

import mongodb from './../images/mongodb.png';
import firebase from './../images/firebase.png';
import postgres from './../images/postgres.png';

import xd from './../images/xd.png';
import photoshop from './../images/photoshop.png';
import illustrator from './../images/illustrator.png';
import github from './../images/github.png';

const Skills = () => {
  const htmlcss = [
    {
      id: '01',
      imgLink: ``,
      imgName: 'Design'
    },
    {
      id: '01',
      imgLink: `${xd}`,
      imgName: 'Adobe XD'
    },
    {
      id: '02',
      imgLink: `${photoshop}`,
      imgName: 'Adobe Photoshop'
    },
    {
      id: '03',
      imgLink: `${illustrator}`,
      imgName: 'Adobe Illustrator'
    },
    {
      id: '04',
      imgLink: `${github}`,
      imgName: 'Github'
    },
    {
      id: '01',
      imgLink: ``,
      imgName: 'FrontEnd'
    },
    {
      id: '01',
      imgLink: `${html5}`,
      imgName: 'HTML5'
    },
    {
      id: '02',
      imgLink: `${css}`,
      imgName: 'CSS'
    },
    {
      id: '03',
      imgLink: `${bootstrap4}`,
      imgName: 'BOOTSTRAP4'
    },
    {
      id: '04',
      imgLink: `${scss}`,
      imgName: 'SCSS'
    },
    {
      id: '05',
      imgLink: `${jsx}`,
      imgName: 'JSX'
    },
    // ];

    // const javascript = [
    {
      id: '01',
      imgLink: `${jsx}`,
      imgName: 'React'
    },
    {
      id: '02',
      imgLink: `${gatsby}`,
      imgName: 'Gatsby'
    },
    {
      id: '03',
      imgLink: `${js}`,
      imgName: 'JavaScript'
    },
    {
      id: '04',
      imgLink: `${jquery}`,
      imgName: 'jQuesry'
    },
    {
      id: '05',
      imgLink: `${angular}`,
      imgName: 'Angular'
    },
    // ];

    // const serverSide = [
    {
      id: '01',
      imgLink: ``,
      imgName: 'BackEnd'
    },
    {
      id: '01',
      imgLink: `${node}`,
      imgName: 'NodeJs'
    },
    {
      id: '02',
      imgLink: `${express}`,
      imgName: 'Express'
    },
    {
      id: '03',
      imgLink: `${handlebars}`,
      imgName: 'Handlebars'
    },
    {
      id: '04',
      imgLink: `${jive}`,
      imgName: 'Jive'
    },
    // ];

    // const database = [
    {
      id: '01',
      imgLink: ``,
      imgName: 'DataBase'
    },
    {
      id: '01',
      imgLink: `${mongodb}`,
      imgName: 'MongoDB'
    },
    {
      id: '02',
      imgLink: `${firebase}`,
      imgName: 'Firebase'
    },
    {
      id: '03',
      imgLink: `${postgres}`,
      imgName: 'Postgres'
    }
    // ];
    // const DesignOther = [
  ];
  return (
    <>
      <div className="container" id="skills">
        {/* <div className="page-title">
          <p>SKILLS</p>
        </div> */}
        <Skillscard items={htmlcss} cardName={'HTML & CSS'} />
        {/* <Skillscard items={javascript} cardName={'JavaScript'} />
        <Skillscard items={serverSide} cardName={'Server Side Language'} />
        <Skillscard items={database} cardName={'Database'} />
        <Skillscard items={DesignOther} cardName={'Design and Others'} /> */}
      </div>
    </>
  );
};
export default Skills;
