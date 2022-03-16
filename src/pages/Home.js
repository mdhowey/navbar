import React from 'react'
import classes from "./Home.module.scss"
import ali from '../static/ali_devprofile.jpeg'

const Home = () => {
  return  (
    <>
      <div className={classes.home__container}>
        <h3 className={classes.title}>i'm a frontend react developer</h3>
        <img className={classes.dog} src={ali} alt="a cute dog"/>
      </div>
    </>
  )
}

export default Home
