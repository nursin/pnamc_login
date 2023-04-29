import React, { useState } from 'react'
import pnamc_logo from '../PNAMC_chapter_logo_transparent.png';
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import ProfileAvatar from './ProfileAvatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);

    return (
        <nav className="">
            <Navbar isOpen={isOpen} expand="xl" full dark className='container py-1'>
                <NavbarBrand href="/">
                    <img src={pnamc_logo} className="navbar-logo-left" alt="PNAMC logo" />
                    <span className='text-white d-none d-md-block'>PNAMC</span>
                    <div className="divider d-none d-xl-block"></div>
                </NavbarBrand>
                <div className="d-flex align-items-center">
                    <div className="d-block d-xl-none">
                        <ProfileAvatar />
                    </div>
                    <NavbarToggler onClick={() => setIsOpen(isOpen ? false : "isOpen")} />
                </div>
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar className="justify-content-start" style={{ width: "100%" }}>
                        <div className="dropdown">
                            <div className="dropbtn fs-5">About Us</div>
                            <div className="dropdown-content">
                                <NavLink onClick={() => setIsOpen(false)} to="/board-of-directors">Executive Board</NavLink>
                                <NavLink onClick={() => setIsOpen(false)} to="/committees">Committees</NavLink>
                                <NavLink onClick={() => setIsOpen(false)} to="/presidents-message">Presidents Message</NavLink>
                                <NavLink onClick={() => setIsOpen(false)} to="/bylaws">Bylaws</NavLink>
                                <NavLink onClick={() => setIsOpen(false)} to="/news">News</NavLink>
                                <NavLink onClick={() => setIsOpen(false)} to="/history">History</NavLink>
                                <NavLink onClick={() => setIsOpen(false)} to="/mission-vision">Mission & Vision</NavLink>
                            </div>
                        </div>
                        <NavItem><NavLink onClick={() => setIsOpen(false)} to='/recognitions-awards'>Recognitions & Awards</NavLink></NavItem>
                        <NavItem><NavLink onClick={() => setIsOpen(false)} to='/events' >Events</NavLink></NavItem>
                        <NavItem><NavLink onClick={() => setIsOpen(false)} to='/membership'>Membership</NavLink></NavItem>
                        <NavItem><NavLink onClick={() => setIsOpen(false)} to='/donate'>Donate</NavLink></NavItem>
                        {/* <NavItem onClick={() => setIsOpen(false)} className='d-xl-none'><SigninModal /></NavItem> */}
                    </Nav>
                </Collapse>
                <div className='d-none d-xl-block'>
                    <ProfileAvatar />
                </div>
            </Navbar>
        </nav>
    )
}

export default Header