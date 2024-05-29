import React, { useState } from 'react'
import data from './list'
import './Header.css'
import { FaArrowRight } from 'react-icons/fa6';

function MenuList({icon, title}) {
    const list = data.list;

    const [visible, setVisible] = useState(null);

    const handleHover = (index) => {
        setVisible(index);
    }

    const handleMouseout = () => {
        setVisible(null);
    }

  return (
    <div className='menulist'>
        <div className='title'>
            <h5>
                <span>{icon}</span>
                {title}
            </h5>
        </div>
        <div className='title-list'>
            {list.map((x, index) => (
                <div key={index} style={{display: "flex", flexDirection: "column", marginTop: "1rem"}}>
                    <a 
                        href='' 
                        style={{marginBottom: "0.5rem"}} 
                        onMouseEnter={() => handleHover(index)} 
                        onMouseLeave={handleMouseout}
                    >
                        {x.title} 
                        {visible === index && <FaArrowRight style={{transition: "all 0.35s linear", marginLeft: "0.5rem"}}/>}
                    </a> 
                    <span style={{color: visible === index ? "white" : "rgba(200, 200, 200, 1)"}}>{x.desc}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MenuList