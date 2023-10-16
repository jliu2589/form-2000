import React from 'react';

function Header() {
  return (
    <header className='flex justify-between h-20 border-b-2 border-opacity-40'>
      <div className='flex items-center p-5'>Medic AI</div>
      <nav className='flex items-center p-5'>Login</nav>
    </header>
  );
}

export default Header;
