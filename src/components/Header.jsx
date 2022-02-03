import React from 'react';
import logo from '../images/logo.png';
import '../styles/Header.scss';

function Header() {
  return (
    <header>
      <img className='header__logo' src={logo} alt='' />
    </header>
  );
}

export default Header;
