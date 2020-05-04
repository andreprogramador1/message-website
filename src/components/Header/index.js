import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./header.css";
function Header() {
  return (
    <header className="header">
      <h1>GoStack</h1>
      <Link to="/perfil">
        Meu perfil
        <FaUserCircle style={{ paddingLeft: "0.5rem" }} />
      </Link>
    </header>
  );
}
export default Header;
