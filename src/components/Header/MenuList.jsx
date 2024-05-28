import React from 'react'
import data from './list'
import './Header.css'

function MenuList({title}) {
    const list = data.list;
  return (
    <div className='menulist'>
        <div className='title'>
            <h5>{title}</h5>
        </div>
        <div className='title-list'>
            {list.map((x, index) => (
                <div key={index} style={{display: "flex", flexDirection: "column", marginTop: "1rem"}}>
                    <a href='' style={{marginBottom: "0.5rem"}}>{x.title}</a>
                    <span>{x.desc}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MenuList