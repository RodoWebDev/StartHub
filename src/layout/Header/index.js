import React from 'react';

const Header = (props) => {
  
  return (
    <header className="header small">
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;