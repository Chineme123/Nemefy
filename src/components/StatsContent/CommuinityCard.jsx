import React, { useState } from 'react'
import './StatsContent.css'
import { FaArrowRight } from 'react-icons/fa6'

function CommuinityCard({icon, title, content, color1, color2}) {
    const [visible, setVisible] = useState(false);

    const hover = () => {
        setVisible(!visible);
    }

    const style = {transition: "all 0.35s linear"}

  return (
    <div className='community-card'>
        <div className='circle1' style={color1}><div className='circle-2' style={color2}>{icon}</div></div>
        <span>{title} {visible && <FaArrowRight style={style} onMouseOver={hover}/>}</span>
        <p>{content}</p>
    </div>
  )
}

export default CommuinityCard