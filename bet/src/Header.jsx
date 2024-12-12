import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <header className="header">
      <div className="left-side">
      <img src="logo.png" alt="Logo" className="logo" />
        <nav className="nav-links">
          <a href="/sport" className="nav-link">Sport</a>
          <a href="/esport" className="nav-link">Esport</a>
        </nav>
      </div>

      <div className="right-side">
      <button className="auth-btn">Logowanie</button>
      <button className="auth-btn">Rejestracja</button>
      </div>
    </header>
  );
};

export default Header;
