import React from 'react'
import ProductNAv from '../../Utils/Constant/ProductNAv'
import BannerCards from '../../Utils/Constant/BannerCards'
import { bannerList } from '../../Utils/Constant/BannerList'
import FeaturedCategory from '../FeaturedCategory/FeaturedCategory'
import FlashSale from '../FlashSale/FlashSale'
import NewArrivals from '../NewArrivals/NewArrivals'
import Contact from '../Contact/Contact'


const Home = () => {
  return (
    <div>
      <BannerCards items={bannerList}/>
      <FeaturedCategory/>
      <NewArrivals/>
      <FlashSale/>
      <div className="TopWrapper">
      <Contact/>
      </div>
    </div>
  )
}

export default Home
