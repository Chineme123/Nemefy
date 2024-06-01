import React, { useEffect, useState } from 'react'
import './ToolsCard.css'

function ToolsCard({icon, title, desc, index}) {
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
          setAnimate(true);
        }, index * 5000); // Delay each card by 500ms multiplied by its index
        return () => clearTimeout(timer);
    }, [index]);

  return (
    <div className='tool-card'>
        <div className='tool-card-title'>
            {icon}
            <p>{title}</p>
        </div>
        <div className='tool-card-desc'>
            <p>{desc}</p>
            <div className='loader-container'>
                <div className={`loader ${animate ? 'animate': ''}`}></div>
            </div>
        </div>
    </div>
  )
}

export default ToolsCard