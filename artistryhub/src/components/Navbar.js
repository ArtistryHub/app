import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            ArtistryHub
          </Link>
          <Link to='/organizer/events/add' className='nav-links' onClick={closeMobileMenu}>
            Add Event
          </Link>
          <Link to='/organizer/events' className='nav-links' onClick={closeMobileMenu}>
            My Events
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to='/sign-in'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>

          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>Sign up</Button>} */}
          {console.log("navbar: is logged in? ")}
          {console.log(localStorage.getItem("isLoggedIn") === "true")}
          {button && (localStorage.getItem("isLoggedIn") === "true" ? false : true) && <Link to='/sign-in'><Button buttonStyle='btn--outline'>Sign in</Button></Link>}
          {button && (localStorage.getItem("isLoggedIn") === "true" ? true : false) && 
            <Link to={"/" + localStorage.getItem("userType")+"/home"}>
              <Button buttonStyle='btn--outline'>{localStorage.getItem("email") + " - " + localStorage.getItem("userType")}</Button>
            </Link>}
          {button && (localStorage.getItem("isLoggedIn") === "true" ? true : false) && <Link to='/'><Button buttonStyle='btn--outline'>Sign out</Button></Link>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;