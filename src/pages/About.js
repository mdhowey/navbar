import React from 'react'
import classes from "./About.module.scss"
import goofy from '../static/goofy_profile.jpeg'

const Home = () => {
  return (
    <div className={classes.about__container}>
      <img className={classes.goofy} src={goofy} alt="goofy dev"/>
      <p>A Minnesotan in Mexico who enjoys finding patterns in syntax, both in spoken and programming languages. As an English teacher turned software engineer, my perspective allows me to break down challenging concepts for others. </p>
    </div>
  )
}

export default Home