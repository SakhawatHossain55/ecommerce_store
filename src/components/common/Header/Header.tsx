import React from 'react';
import HeaderButtom from './HeaderButtom';
import HeaderMiddle from './HeaderMiddle';
import HeaderTop from './HeaderTop';

const Header = () => {
  return (
    <div className="header">
      <HeaderTop />
      <HeaderMiddle />
      <HeaderButtom />
    </div>
  );
};

export default Header;
