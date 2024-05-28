import React from 'react'
import MenuList from './MenuList'
import './Header.css'

function SolutionsMenu() {
  return (
    <div className='solutionMenu'>
       <div className='solutionMenu-divone'>
            <MenuList title={"Start"}/>
            <MenuList title={"Sell"} />
            <MenuList title={"Market"}/>
            <MenuList title={"Manage"} />
       </div>
       <div></div>
    </div>
  )
}

export default SolutionsMenu