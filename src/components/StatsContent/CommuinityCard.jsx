import React, { useState } from 'react'
import './StatsContent.css'
import { FaArrowRight } from 'react-icons/fa6'

function CommuinityCard({icon, title, content, color1, color2}) {
    const [visible, setVisible] = useState(false);

    const handleHover = () => {
        setVisible(!visible);
    }

    const handleMouseout = () => {
        setVisible(!visible);
    }

  return (
    <div className='community-card'>
        <div className='circle-1' style={color1}>
            <div className='circle-2' style={color2}>
                {icon}
            </div>
        </div>
        <span onMouseEnter={handleHover} onMouseLeave={handleMouseout}>
            {title} 
            {visible && <FaArrowRight style={{transition: "all 0.35s linear", marginLeft: "0.5rem"}} />}
        </span>
        <p>{content}</p>
    </div>
  )
}

export default CommuinityCard