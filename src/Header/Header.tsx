import React from 'react';
import './Header.css';

interface Props {
  handleUpdateAuthFormVisible: {(value: any): void};
  user: string | boolean;
  logoutUser: () => void;
}

const Header = ({handleUpdateAuthFormVisible, user, logoutUser}: Props) => {

  const authNavJSX = user === false
    ? <><span onClick={() => handleUpdateAuthFormVisible(true)}>login</span>
      <span onClick={() => handleUpdateAuthFormVisible(true)}>register</span></>
    : <span onClick={() => logoutUser()}>logout</span>;

  return (
    <header className="header">
      <span onClick={() => handleUpdateAuthFormVisible(false)}>home</span>
      {authNavJSX}
    </header>
  );
}

export default Header;
