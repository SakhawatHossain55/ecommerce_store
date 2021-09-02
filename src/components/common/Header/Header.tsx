import React from 'react';
import HeaderButton from './HeaderButton';
import HeaderMiddle from './HeaderMiddle';
import HeaderTop from './HeaderTop';

const Header = () => {
  return (
    <div className="header">
      <HeaderTop />
      <HeaderMiddle />
      <HeaderButton />
    </div>
  );
};

export default Header;
