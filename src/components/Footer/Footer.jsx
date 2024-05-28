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
          <FaShopify />
        </div>
        <div className='links'>
          <div>
            <h3>Shopify</h3>
            <span><a href="#">About</a></span>
            <span><a href="#">Career</a></span>
            <span><a href="#">Investors</a></span>
            <span><a href="#">Press and Media</a></span>
            <span><a href="#">Partners</a></span>
            <span><a href="#">Affiliates</a></span>
            <span><a href="#">Legal</a></span>
          </div>
          <div>
            <h3>Support</h3>
            <span><a href="#">About</a></span>
            <span><a href="#">Career</a></span>
            <span><a href="#">Investors</a></span>
            <span><a href="#">Press and Media</a></span>
            <span><a href="#">Partners</a></span>
          </div>
          <div>
            <h3>Developers</h3>
            <span><a href="#">About</a></span>
            <span><a href="#">Career</a></span>
            <span><a href="#">Investors</a></span>
          </div>
          <div>
            <h3>Products</h3>
            <span><a href="#">About</a></span>
            <span><a href="#">Career</a></span>
            <span><a href="#">Investors</a></span>
            <span><a href="#">Press and Media</a></span>
          </div>
          <div>
            <h3>Solutions</h3>
            <span><a href="#">About</a></span>
            <span><a href="#">Career</a></span>
            <span><a href="#">Investors</a></span>
          </div>
        </div>
      </div>

      <div className='lower'>
        <div className='language'>
          <TbWorld />
          <span>Nigeria</span>
          <IoMdArrowDropdown />
          <IoMdArrowDropup style={{display: "none"}}/>
        </div>
        <div className='legal'>
          <span><a href="#">Terms of Service</a></span>
          <span><a href="#">Privacy Policy</a></span>
          <span><a href="#">Site Map</a></span>
          <span><a href="#">Privacy Choices</a></span>
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