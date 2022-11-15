import React from "react";
import HomePageTours from "./HomePageTours";
import classes from './HomePageTours.module.css'

const HomePage = () => {
  return <React.Fragment>
    <h1 className={classes.h1}>Tours</h1>
    <HomePageTours />
  </React.Fragment>;
};

export default HomePage;
