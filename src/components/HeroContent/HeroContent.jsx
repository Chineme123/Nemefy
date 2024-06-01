import React from 'react'
import './HeroContent.css'
import myVideo from '../../assets/background-video.mp4'

function HeroContent() {
  return (
    <div className='herocontent'>
        <video autoPlay muted loop alt = "Background video">
            <source  src={myVideo} type="video/mp4"/>
        </video>
        <div className='motto'>
            <h1>Making Commerce Better for Everyone</h1>
            <h3>Shopify is support the next generation of entrepreneurs, the world's biggest brands and, everyone in between</h3>
        </div>
        <div className='hero-start'>
            <div>
                <span>Start free trial</span>
                <p>Get 3 days free, then 1 month for 1$</p>
            </div>
            <span>Watch the Shopify  story</span>
        </div>
    </div>
  )
}

export default HeroContent