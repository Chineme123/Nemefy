import React, { useState } from 'react';
import './MobileHeader.css';
import './Header.css';
import SolutionsMenu from './SolutionsMenu';
import ResourcesMenu from './ResourcesMenu';
import Whatsnew from './Whatsnew';
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

const DropdownItem = ({ label, activeDropdown, toggleDropdown, dropdownName }) => (
    <span onClick={() => toggleDropdown(dropdownName)} style={{display:'flex', alignItems:'center', marginBottom:"1.5rem"}}>
        <span style={{marginRight: "0.5rem"}}>{label}</span>
        {activeDropdown === dropdownName ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
    </span>
);

function MobileHeader() {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    return (
        <>
            <div className='mobileH'>
                <DropdownItem
                    label="Solutions"
                    activeDropdown={activeDropdown}
                    toggleDropdown={toggleDropdown}
                    dropdownName="solutions"
                />
                {activeDropdown === 'solutions' && <SolutionsMenu />}
                <span style={{marginBottom: "1.5rem"}}>Pricing</span>
                <DropdownItem
                    label="Resources"
                    activeDropdown={activeDropdown}
                    toggleDropdown={toggleDropdown}
                    dropdownName="resources"
                />
                {activeDropdown === 'resources' && <ResourcesMenu />}
                <DropdownItem
                    label="What's new"
                    activeDropdown={activeDropdown}
                    toggleDropdown={toggleDropdown}
                    dropdownName="whatsNew"
                />
                {activeDropdown === 'whatsNew' && <Whatsnew />}
            </div>
        </>
    );
}

export default MobileHeader;