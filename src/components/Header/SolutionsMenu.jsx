import React from 'react'
import MenuList from './MenuList'
import './Header.css'
import { FaArrowTrendUp, FaHammer } from 'react-icons/fa6'
import { GiTwoCoins } from 'react-icons/gi'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'

function SolutionsMenu() {
  return (
    <div className='solutionMenu'>
       <div className='solutionMenu-divone'>
            <MenuList icon={<FaHammer />} title={"Start"}/>
            <MenuList icon={<GiTwoCoins />} title={"Sell"} />
            <MenuList icon={<FaArrowTrendUp />} title={"Market"}/>
            <MenuList icon={<HiOutlineOfficeBuilding />} title={"Manage"} />
       </div>
       <div className='solutionMenu-divtwo'>
          <div>
            <span>Shopify Developers</span>
            <span>Build with Shopify's powerful APIs</span>
          </div>
          <div>
            <span>Plus</span>
            <span>A commerce solution for growing digital brands</span>
          </div>
          <div>
            <span>All Products</span>
            <span>Explore all Shopify products & features</span>
          </div>
       </div>
    </div>
  )
}

export default SolutionsMenu