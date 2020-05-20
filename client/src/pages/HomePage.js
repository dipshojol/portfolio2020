import React from 'react';
import { useWindowSize } from '../utils/windowSize';
import HomePageWeb from './HomePageWeb';

const HomePage = () => {
  let [width] = useWindowSize();

  return width > 630 ? <HomePageWeb /> : <></>;
};
export default HomePage;
