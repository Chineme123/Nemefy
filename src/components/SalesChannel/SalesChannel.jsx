import React from 'react'
import CallToAction from '../CallToAction/CallToAction'
import './SalesChannel.css'
import mobilepay1 from '../../assets/mobilepay1.jpg'
import mobilepay2 from '../../assets/mobilepay2.jpg'
import scrolling from '../../assets/Scrolling.jpg'
import OnlineStore from '../../assets/OnlineStore.jpg'

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
        <div className='sales-picture'>
            <img src={mobilepay1} alt="" />
            <img src={OnlineStore} alt="" />
            <img src={scrolling} alt="" />
        </div>
        <div className='pos'>
            <div className='pos-item'>
                <p>POINT OF SALE</p>
                <h1>Flexible point of sale to power your retail store</h1>
                <p>
                    A POS system that allows customers to shop their way, from online to checkout line.
                </p>
                <CallToAction action={"Meet Shoppify POS"}/>
            </div>

            <img src={mobilepay2} alt="" />
        </div>
    </div>
  )
}

export default SalesChannel