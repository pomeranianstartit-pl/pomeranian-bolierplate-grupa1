import React from 'react';

import './styles.css';

import toggleArrow from '../../Images/toggle-arrow.svg';
const LoginPanel = ({ onClick }) => {
  return (
    <div onClick={onClick} className="header-panel">
      <img onClick={onClick} className="more" src={toggleArrow} alt="more" />
      <div className="panel-content">
        <button className="login-button">Zaloguj się</button>
        <div>
          Nie masz konta
          <button className="register-button">Zarejestruj się</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPanel;
