import React from 'react'
import { FaShopify } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube  } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
import { FaLinkedinIn, FaPinterest } from "react-icons/fa";
import './Footer.css'

function Footer() {
  const style = { color: "white", fontSize: "1.2em"}

  return (
    <div className='footer'>
      <div className='upper'>
        <div className='logo'>
          <FaShopify style={{fontSize: "6rem"}}/>
        </div>
        <div className='links'>
          <div>
            <h3>Shopify</h3>
            <span>About</ span>
            <span>Career</ span>
            <span>Investors</ span>
            <span>Press and Media</ span>
            <span>Partners</ span>
            <span>Affiliates</ span>
            <span>Legal</ span>
          </div>
          <div>
            <h3>Support</h3>
            <span>About</ span>
            <span>Career</ span>
            <span>Investors</ span>
            <span>Press and Media</ span>
            <span>Partners</ span>
          </div>
          <div>
            <h3>Developers</h3>
            <span>About</ span>
            <span>Career</ span>
            <span>Investors</ span>
          </div>
          <div>
            <h3>Products</h3>
            <span>About</ span>
            <span>Career</ span>
            <span>Investors</ span>
            <span>Press and Media</ span>
          </div>
          <div>
            <h3>Solutions</h3>
            <span>About</ span>
            <span>Career</ span>
            <span>Investors</ span>
          </div>
        </div>
      </div>

      <div className='lower'>
        <div className='language'>
          <TbWorld style={{fontSize: "24px"}} />
          <span>Nigeria</span>
          <IoMdArrowDropdown />
          <IoMdArrowDropup style={{display: "none"}}/>
        </div>
        <div className='legal'>
          <span>Terms of Service</ span>
          <span>Privacy Policy</ span>
          <span>Site Map</ span>
          <span>Privacy Choices</ span>
        </div>
        <div className='socials'>
          <span><FaFacebookF style={style} /></span>
          <span><FaInstagram style={style} /></span>
          <span><FaXTwitter style={style} /></span>
          <span><FaLinkedinIn style={style} /></span>
          <span><FaPinterest style={style} /></span>
          <span><FaYoutube style={style} /></span>
          <span><IoLogoTiktok style={style} /></span>
        </div>
      </div>
    </div>
  )
}

export default Footer