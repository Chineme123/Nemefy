import React from 'react'
import MenuList from './MenuList'
import './Header.css'
import data from './list'
import { FaArrowTrendUp, FaHammer } from 'react-icons/fa6'
import { GiTwoCoins } from 'react-icons/gi'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'


function SolutionsMenu() {
  const list = data.list;
  const list1 = data.list1;
  const list2 = data.list2;
  const list3 = data.list3;
  return (
    <div className='solutionMenu'>
       <div className='solutionMenu-divone'>
            <MenuList icon={<FaHammer />} title={"Start"} list={list}/>
            <MenuList icon={<GiTwoCoins />} title={"Sell"} list={list1}/>
            <MenuList icon={<FaArrowTrendUp />} title={"Market"} list={list2}/>
            <MenuList icon={<HiOutlineOfficeBuilding />} title={"Manage"} list={list3}/>
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