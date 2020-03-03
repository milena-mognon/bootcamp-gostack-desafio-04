import React from 'react';
import logo from '../../public/images/facebook.svg';
import profile from '../../public/images/profile.svg';
function Header() {
  return (
    <>
      <div className='nav'>
        <img className='logo' src={logo} alt="" />
        <div className='profile'>
          Meu perfil <img id='profile-img' src={profile} alt="" />
        </div>
      </div>
    </>
  );
}

export default Header;