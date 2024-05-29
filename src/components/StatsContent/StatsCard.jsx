import React from 'react'
import './StatsContent.css'

function StatsCard({title, content}) {
  return (
    <div className='stats-card'>
        <div></div>
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    </div>
  )
}

export default StatsCard