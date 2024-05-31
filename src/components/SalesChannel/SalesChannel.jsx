import React from 'react'
import CallToAction from '../CallToAction/CallToAction'
import './SalesChannel.css'

function SalesChannel() {
  return (
    <div className='sale-channel'>
        <div className='sale-header'>
            <div className='sale-header-item1 sale-header-item'>
                <p>SALES CHANNELS</p>
                <h1>Sell to every buyer, everywhere</h1>
            </div>

            <div className='sale-header-item2 sale-header-item'>
                <p>
                    Sell online, in person and around the world with the marketing tools, 
                    social integrations, and sales channels you need to get your product in front of customers.
                </p>
                <CallToAction action={"Start selling"}/>
            </div>
        </div>
    </div>
  )
}

export default SalesChannel