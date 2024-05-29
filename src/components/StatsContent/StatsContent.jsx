import React from 'react'
import './StatsContent.css'
import StatsCard from './StatsCard'
import CommuinityCard from './CommuinityCard'
import myGlobe from '../../assets/Globe.jpg'
import { IoIosInfinite } from 'react-icons/io'
import { GrGroup } from 'react-icons/gr'
import { FaCode } from 'react-icons/fa6'
import { CiVideoOn } from 'react-icons/ci'

function StatsContent() {
  return (
    <>
        <div className='stats-content'>
            <div className='globe'>
                <img src={myGlobe} alt="A Globe" />
            </div>  
            <div className='information'>
                <h1 className='big-info'>
                    Discover why millions of entrepreneurs chose Shopify to build their business —
                    <span>from hello world to IPO.</span>
                </h1>
                <div className='stats'>
                    <StatsCard title={"Millions"} content={"of merchant worldwide"} />
                    <StatsCard title={"170+"} content={"countries represented"} />
                    <StatsCard title={"10%"} content={"of total US ecommerce"}/>
                    <StatsCard title={"US$444B"} content={"global economic activity"} />
                </div>
            </div>
        </div>

        <div className='community'>
            <p>EXPLORE THE WORLD'S LARGEST COMMERCE COMMUNITY</p>
            <div className='community-block'>
                <CommuinityCard 
                    icon={<IoIosInfinite style={{color: "rgb(255, 0, 0)", fontSize: "1rem", fontWeight: 900}} />}
                    title={"Plus"}
                    content={"A commerce Solution for growing digital brands"}
                    color1={{background: "rgba(255, 0, 0, 0.5)"}}
                    color2={{background: "rgba(255, 0, 0, 0.25)"}}
                />
                <CommuinityCard 
                    icon={<GrGroup style={{color: "rgb(0, 0, 255)"}}/>}
                    title={"Partners"}
                    content={"Offer your expertise to shopify merchants all over the world"}
                    color1={{background: "rgba(0, 0, 255, 0.5)"}}
                    color2={{background: "rgba(0, 0, 255, 0.3)"}}
                />
                <CommuinityCard 
                    icon={<FaCode style={{color: "rgb(255, 165, 0)"}}/>}
                    title={"Developers"}
                    content={"Build the future of commerce with Shopify's powerful API"}
                    color1={{background: "rgba(255, 165, 0, 0.5)"}}
                    color2={{background: "rgba(255, 165, 0, 0.3)"}}
                />
                <CommuinityCard 
                    icon={<CiVideoOn style={{color: "rgb(128, 0, 128)"}}/>}
                    title={"Creators"}
                    content={"Turn followers into customers with commerce tools for creators"}
                    color1={{background: "rgba(128, 0, 128, 0.5)"}}
                    color2={{background: "rgba(128, 0, 128, 0.3)"}}
                />
            </div>
        </div>
    </>
  )
}

export default StatsContent