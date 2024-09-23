import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="h-scren w-screen sticky top-0 border-b-2 border-blue bg-off-white-light pb-8 pt-8">
      <img className="logo mx-auto w-56" src="../mockup/logo.png" alt="logo" />
    </header>
  );
};

export default Header;
