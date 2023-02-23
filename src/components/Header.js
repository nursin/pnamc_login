import React, { useState } from 'react'
import pnaa_logo from '../PNAA_logo.png';
import pnamc_logo from '../PNAMC_chapter_logo_transparent.png';
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Collapse, Button } from 'reactstrap';
import { Link, NavLink, useLocation } from 'react-router-dom';
import JoinModal from './JoinModal';
import SigninModal from './SigninModal';
import { auth } from '../firebase';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/slices/user';

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const dispatch = useDispatch();
    const location = useLocation();
    const { user } = useSelector((state) => state.user);

    const signOut = () => {
        auth.signOut()
            .then(() => {
                dispatch(setUser(null))
            })
            .catch((error) => {
                console.log(error.message)
            });
    };

    return (
        <nav className="">
            <Navbar isOpen={isOpen} expand="xl" full dark className='container'>
                <NavbarBrand href="/">
                    <img src={pnamc_logo} className="navbar-logo-left" alt="PNAMC logo" />
                    <span className='text-white'>PNAMC</span>
                    <div className="divider d-none d-lg-block"></div>
                </NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(isOpen ? false : "isOpen")} />
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
                        <NavItem onClick={() => setIsOpen(false)} className='d-xl-none'><JoinModal /></NavItem>
                        <img src={pnaa_logo} className="navbar-logo-expanded d-xl-none" alt="PNAA logo" />
                    </Nav>
                </Collapse>
                <div className='d-none d-xl-block'>
                    {
                        user
                            ?
                            <>
                                {user.photoURL
                                    ?
                                    <>
                                        <div className="dropdown">
                                            <img src={user?.photoURL} alt="Profile Pic" onClick={() => openNav()} className="profileAvatar" />
                                            <div className="dropdown-content">
                                                {/* <NavLink onClick={() => setIsOpen(false)} to="/board-of-directors">Executive Board</NavLink> */}
                                                <Link to="/account">Account</Link>
                                                {/* <Link to="/messages">Transactions</Link>
                                                <Link to="/contacts">Events</Link> */}
                                                {user ? <a href='/' onClick={signOut}>Sign out</a> : <a href="/">Sign in</a>}
                                            </div>
                                        </div>
                                    </>

                                    :
                                    <p onClick={() => openNav()}>{user?.displayName?.slice(0, 1)}</p>
                                }
                            </>
                            :
                            <>
                                <JoinModal />
                                <SigninModal />
                            </>
                    }
                    {/* <img src={pnaa_logo} className="navbar-logo-right ms-2" alt="PNAA logo" /> */}
                </div>
                {/* <div id="mySidebar" className="sidebar shadow">
                    <button className="closebtn" onClick={() => closeNav()}>×</button>
                    <Link to="/my-account/">Account</Link>
                    <Link to="/messages">Messages</Link>
                    <Link to="/contacts">Contacts</Link>
                    {user ? <Button onClick={signOut}>Sign out</Button> : <a href="/">Sign in</a>}
                </div> */}
            </Navbar>
        </nav>
    )
}

export default Header