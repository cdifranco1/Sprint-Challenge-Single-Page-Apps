import React from "react";
import { NavLink } from 'react-router-dom';

export default function Header() {
  const linkStyle = {
    textDecoration: "none",
    fontSize: "1.5rem",
    margin: "3%"
  }

  const navStyle = {
    display: 'flex',
    justifyContent: "center"
  }

  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <nav style={navStyle}>
        <NavLink style={linkStyle} to="/">Home Page</NavLink>
        <NavLink style={linkStyle} to="/characters">Character Page</NavLink>
      </nav>
    </header>
  );
}
