import React from 'react'
import Yourdream from './Yourdream/Yourdream'
import Trendingjob from './Trendingjob/Trendingjob'
import Review from './Review/Review'
import Homepagelogin from './Homepagelogin/Homepagelogin'
import MainBanner from './MainBanner/MainBanner'


const Home = () => {
  return (
    <div className='Homepage'>
      <MainBanner/>
      <Yourdream/>
      <Trendingjob/>
      <Review/>
      <Homepagelogin/>
    </div>
  )
}

export default Home
