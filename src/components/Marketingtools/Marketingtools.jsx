import React from 'react'
import './Marketingtool.css'
import ToolsCard from '../ToolsCard/ToolsCard'
import CallToAction from '../CallToAction/CallToAction'
import { FaAt, FaChartColumn, FaHashtag } from 'react-icons/fa6'
import chat from '../../assets/Chat.svg'
import data from '../../assets/Data.svg'
import social from '../../assets/SocialMedia.svg'
import { useEffect, useState } from 'react'

function Marketingtools() {
    const toolsData = [
        {
          icon: <FaHashtag style={{ color: 'purple', fontSize: "1.5rem" }} />,
          title: 'Reach new leads',
          desc: 'Find new shoppers with the SEO, social media, and content marketing tools that help you reach customers where they are.',
        },
        {
          icon: <FaAt style={{ color: 'blue', fontSize: "1.5rem" }} />,
          title: 'Reach new leads',
          desc: 'Find new shoppers with the SEO, social media, and content marketing tools that help you reach customers where they are.',
        },
        {
          icon: <FaChartColumn style={{ color: 'red', fontSize: "1.5rem" }} />,
          title: 'Reach new leads',
          desc: 'Find new shoppers with the SEO, social media, and content marketing tools that help you reach customers where they are.',
        }
    ];

    const toolImages = [
        {
            src: social,
            alt: "social"
        }, 
        {
            src: data,
            alt: "social"
        }, 
        {
            src: chat,
            alt: "social"
        }
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % toolImages.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Clean up on component unmount
    }, [toolImages.length]);

  return (
    <div className='marketing-tools'>
        <div className='tools-header'>
            <div className='tools-header-item1 tool-header-item'>
                <p>BUILT-IN MARKETING TOOLS</p>
                <h1>From first touch to full funnel</h1>
            </div>

            <div className='tools-header-item2 tool-header-item'>
                <CallToAction action={"Leverage our full marketing suite"}/>
            </div>
        </div>
        
       <div className='tools'>
            <div className='tools-items'>
                {toolsData.map((tool, index) => (
                    <ToolsCard 
                        key={index}
                        icon={tool.icon}
                        title={tool.title}
                        desc={tool.desc}
                        index={index}
                    />
                ))}
            </div>
            <div className='tools-pic'>
                <img 
                    src={toolImages[currentImageIndex].src} 
                    alt={toolImages[currentImageIndex].alt} 
                />
            </div>
       </div>
    </div>
  )
}

export default Marketingtools