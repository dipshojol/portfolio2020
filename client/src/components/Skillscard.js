import React from 'react';
// import './Skills.css';
import useStyles from './SkillscardStyle';

const Skillscard = ({ items, cardName }) => {
  const classes = useStyles();

  const imgObj = items.map(item => (
    <li key={item.id}>
      <img src={item.imgLink} alt="" />
      <br />
      {item.imgName}
    </li>
  ));
  return (
    <>
      <div className={classes.viewPortHW}>
        <div className={classes.maxHW}>
          <div className={classes.cardContainer}>
            {/* <h1>{cardName}</h1> */}
            <ul className={classes.cardUl}>{imgObj}</ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skillscard;
