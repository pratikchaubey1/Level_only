import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import CategoriesSection from '../../Components/CategorieSection/CategoriesSection'
import Fashion from '../../Components/FashionSection/Fashion'
import VideoOne from '../../Components/VideoSection/Line1/VideoOne'
import VideoTwo from '../../Components/VideoSection/Line2/VideoTwo'

function Landing() {
  return (
    <div>
        <HeroSection/>
        <CategoriesSection/>
        <Fashion/>
        <VideoOne/>
        <VideoTwo/>
    </div>
  )
}

export default Landing