import React, {useState} from 'react'
import myStore from '../../assets/BuildStore.jpg'
import './BuildStore.css'
import { FaArrowRight } from 'react-icons/fa6';

function BuildStore() {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);

    const handleHover = () => {
        setVisible(!visible);
    }

    const handleMouseout = () => {
        setVisible(!visible);
    }

    const handleHover1 = () => {
        setVisible2(!visible2);
    }

    const handleMouseout1 = () => {
        setVisible2(!visible2);
    }

    const handleHover2 = () => {
        setVisible3(!visible3);
    }

    const handleMouseout2 = () => {
        setVisible3(!visible3);
    }

  return (
    <div className='build-store'>
        <p className='build-store-p'>BUILD AN ONLINE STORE</p>
        <h1>Your store, your way</h1>
        <div className='build-img'>
            <img src={myStore} alt="Build an online store" />
        </div>
        <div className='build-action'>
            <div className='build-action-item'>
                <h3>Build an online storefront</h3>
                <p>
                    Bring your vision to life with our drag-and-drop store creator. 
                    No coding expertise required - just your next big idea.
                </p>
                <a onMouseEnter={handleHover} onMouseLeave={handleMouseout}>
                    Online Store Builder
                    {visible && <FaArrowRight style={{transition: "all 0.35s linear", marginLeft: "0.5rem"}} />}
                </a>
            </div>

            <div className='build-action-item'>
                <h3>Craft the brand you want</h3>
                <p>
                    Select your customizable templates created by a community of world-class designers.
                </p>
                <a onMouseEnter={handleHover1} onMouseLeave={handleMouseout1}>
                    Theme Store
                    {visible2 && <FaArrowRight style={{transition: "all 0.35s linear", marginLeft: "0.5rem"}} />}
                </a>
            </div>

            <div className='build-action-item'>
                <h3>Level up with apps</h3>
                <p>
                    Add more features and functionality to your online store with apps built by trusted Shopify developers.
                </p>
                <a onMouseEnter={handleHover2} onMouseLeave={handleMouseout2}>
                    Shopify App Store
                    {visible3 && <FaArrowRight style={{transition: "all 0.35s linear", marginLeft: "0.5rem"}} />}
                </a>
            </div>
        </div>
    </div>
  )
}

export default BuildStore