import React, { useState, useRef, useEffect } from 'react';
import { FaShopify } from 'react-icons/fa';
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { CiMenuBurger } from 'react-icons/ci';
import { BiExit } from 'react-icons/bi';
import './Header.css';
import SolutionsMenu from './SolutionsMenu';
import ResourcesMenu from './ResourcesMenu';
import Whatsnew from './Whatsnew';
import MobileHeader from './MobileHeader';

function Header() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileHeader, setMobileHeader] = useState(false);
    const headerRef = useRef(null);

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const toggleMenu = () => {
        setMobileHeader(!mobileHeader);
    }

    const handleClickOutside = (event) => {
        if (headerRef.current && !headerRef.current.contains(event.target)) {
            setActiveDropdown(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className='header' ref={headerRef}>
                <div className='header-logo'>
                    <FaShopify style={{ fontSize: "2.5rem", color: "green" }} />
                    <h1>Nemefy</h1>
                </div>
                <div className='header-links'>
                    <span>
                        Solutions
                        {activeDropdown === 'solutions' 
                            ? <IoMdArrowDropup onClick={() => toggleDropdown('solutions')} /> 
                            : <IoMdArrowDropdown onClick={() => toggleDropdown('solutions')} />}
                    </span>
                    <span>
                        Pricing
                    </span>
                    <span>
                        Resources
                        {activeDropdown === 'resources' 
                            ? <IoMdArrowDropup onClick={() => toggleDropdown('resources')} /> 
                            : <IoMdArrowDropdown onClick={() => toggleDropdown('resources')} />}
                    </span>
                    <span>
                        What's new
                        {activeDropdown === 'whatsNew' 
                            ? <IoMdArrowDropup onClick={() => toggleDropdown('whatsNew')} /> 
                            : <IoMdArrowDropdown onClick={() => toggleDropdown('whatsNew')} />}    
                    </span>
                </div>
                <div className='start'>
                    <span>Log in</span>
                    <span>Start free trial</span>
                    <span className='mobile-menu'>
                        {
                            mobileHeader ? 
                            <BiExit style={{ fontSize: "24px" }} onClick={toggleMenu}/>
                            : <CiMenuBurger style={{ fontSize: "24px" }} onClick={toggleMenu}/> 
                        }
                    </span>
                </div>
            </div>
            {mobileHeader && <MobileHeader />}
            {activeDropdown === 'solutions' && <SolutionsMenu />}
            {activeDropdown === 'resources' && <ResourcesMenu />}
            {activeDropdown === 'whatsNew' && <Whatsnew />}
        </>
    );
}

export default Header;
