import React from 'react'
import MenuList from './MenuList'
import './Header.css'
import data from './list'
import { IoInformation } from 'react-icons/io5'
import { BiPencil } from 'react-icons/bi'
import { BsBag } from 'react-icons/bs'

function ResourcesMenu() {
    const list = data.resourceList;
    const list1 = data.resourceList1;

  return (
    <div className='resourceMenu'>
       <div className='resourceMenu-divone'>
            <MenuList icon={<IoInformation />} title={"Help and Support"} list={list}/>
            <MenuList icon={<BiPencil />} title={"Popular topics"} list={list1}/>
       </div>
       <div className='resourceMenu-divtwo'>
            <div className='title'>
                <h5><span><BsBag /></span> Essential Tools</h5>
            </div>
            <div className='title-list'>
                <span>Business Name Generator</span>
                <span>Logo Maker</span>
                <span>Stock Photography</span>
                <span>Business plan template</span>
                <span>Link in bio tool</span>
                <span>QR code generator</span>
            </div>
       </div>
    </div>
  )
}

export default ResourcesMenu