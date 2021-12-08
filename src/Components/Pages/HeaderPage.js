import {Link} from "react-router-dom"
import {MdGrass} from "react-icons/md"
import {FaBars, FaTimes} from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { Button } from "../Other/Button";
import './HeaderPage.css';
import {IconContext} from 'react-icons/lib'

// Use link to not refresh the page
function HeaderPage() {
    // Use state in a function
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    //show button base on screen size
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, []);;

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        <MdGrass className='navbar-icon' />
                        QUANG HUYNH
                    </Link>

                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className='nav-links' onClick={closeMobileMenu}>Home </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/AboutPage/AboutPage" className='nav-links'onClick={closeMobileMenu}> About Me </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/ContactPage/ContactPage" className='nav-links' onClick={closeMobileMenu}> Contact Me </Link>
                        </li>
                        <li className='nav-btn'>
                            {button ? (
                                <Link to='/Emailme' className="btn-link" onClick={closeMobileMenu}>
                                    <Button buttonStyle="btn--outline">Email me</Button>
                                </Link>
                            ) : (
                                <Link to="/Emailme" className="btn-link" >
                                    <Button buttonStyle="btn--outline"
                                        buttonSize="btn--mobile">Email me</Button>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </IconContext.Provider>   
        </>
    )
}

export default HeaderPage