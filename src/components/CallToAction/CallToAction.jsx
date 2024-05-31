import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import './CallToAction.css'

function CallToAction({action}) { 

  return (
    <div className='action'>
      <span className='icon1'>
          <FaArrowRight style={{fontSize: "2rem"}}/>
        </span>
        <span className='act'>{action}</span>
        <span className='icon2'>
          <FaArrowRight style={{fontSize: "2rem"}}/>
        </span>
    </div>
  )
}

export default CallToAction