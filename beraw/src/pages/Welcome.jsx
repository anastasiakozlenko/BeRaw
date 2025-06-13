import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Welcome.css";
import logo from "../assets/logo.png"; // Замінити на твій логотип

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <img src={logo} alt="BeRaw Logo" className="welcome-logo" />
      <h1 className="welcome-title">BeRaw</h1>
      <div className="welcome-buttons">
        <button className="btn white-btn" onClick={() => navigate("/register")}>
          Реєстрація
        </button>
        <button className="btn dark-btn" onClick={() => navigate("/login")}>
          Вхід
        </button>
      </div>
    </div>
  );
};

export default Welcome;
