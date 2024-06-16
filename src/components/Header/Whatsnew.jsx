import React from 'react'
import './Header.css'
import { BsMegaphone } from 'react-icons/bs'
import { FaNewspaper } from 'react-icons/fa6'

function Whatsnew() {
  return (
    <div className='whatsnewMenu-divtwo'>
        <div className='divtwo-item'>
            <span className='icon'><FaNewspaper /></span>
            <div className='divtwo-item-text'>
                <span>Changelog</span>
                <span>Build with Shopify's powerful APIs</span>
            </div>
        </div>
        <div className='divtwo-item'>
            <span className='icon'><BsMegaphone /></span>
            <div className='divtwo-item-text'>
                <span>Newsroom</span>
                <span>A commerce solution for growing digital brands</span>
            </div>
        </div>
    </div>
  )
}

export default Whatsnew