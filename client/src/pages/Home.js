import React from 'react';
import { useWindowSize } from '../utils/windowSize';
import HomeWeb from './HomeWeb';

const Home = () => {
  let [width] = useWindowSize();

  return width > 630 ? <HomeWeb /> : <></>;
};
export default Home;
