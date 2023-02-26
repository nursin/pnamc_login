import React, { useEffect, useState } from 'react'
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

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const dispatch = useDispatch();
    const location = useLocation();
    const { user } = useSelector((state) => state.user);

    // useEffect(() => {

    //   }, [user]);

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
            <Navbar isOpen={isOpen} expand="xl" full dark className='container py-1'>
                <NavbarBrand href="/">
                    <img src={pnamc_logo} className="navbar-logo-left" alt="PNAMC logo" />
                    <span className='text-white d-none d-md-block'>PNAMC</span>
                    <div className="divider d-none d-xl-block"></div>
                </NavbarBrand>
                <div className="d-flex align-items-center">
                    <div className="d-block d-xl-none">
                        {
                            user
                                ?
                                user.photoURL
                                    ?
                                    <>
                                        <div className="dropdown">
                                            <div className='dropbtn'>
                                                <img src={user?.photoURL} alt="Profile Pic" className="profileAvatar" />
                                            </div>
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
                                    <>
                                        <div className="dropdown">
                                            <div className='dropbtn'>
                                                <p className='profileAvatar-noImage text-white fs-6'>{user?.email?.slice(0, 1).toUpperCase()}</p>
                                            </div>
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
                                <>
                                    {/* <JoinModal /> */}
                                    <SigninModal />
                                </>
                        }
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
                        <img src={pnaa_logo} className="navbar-logo-expanded d-xl-none" alt="PNAA logo" />
                    </Nav>
                </Collapse>
                <div className='d-none d-xl-block'>
                    {
                        user
                            ?
                            user.photoURL
                                ?
                                <>
                                    <div className="dropdown">
                                        <div className='dropbtn'>
                                            <img src={user?.photoURL} alt="Profile Pic" className="profileAvatar" />
                                        </div>
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
                                <>
                                    <div className="dropdown">
                                        <div className='dropbtn'>
                                            <p className='profileAvatar-noImage text-white fs-6'>{user?.email?.slice(0, 1).toUpperCase()}</p>
                                        </div>
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
                            <>
                                {/* <JoinModal /> */}
                                <SigninModal />
                            </>
                    }
                    <img src={pnaa_logo} className="navbar-logo-right ms-2" alt="PNAA logo" />
                </div>
            </Navbar>
        </nav>
    )
}

export default Header