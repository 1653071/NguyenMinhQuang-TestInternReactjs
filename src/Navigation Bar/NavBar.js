import React from "react";

import { NavbarWrapper ,Logo } from "./NavBar.styles";
export function NavBar() {
  return (
    <NavbarWrapper>
      <li style={{float:"left",fontSize:"24px"}}>
        <a href="#home">WHAT HAPPENED</a>
      </li>
      <li>
        <a href="#home">Apply For Free use</a>
      </li>
      <li>
        <a href="#news">Login</a>
      </li>
      <li>
        <a href="#contact">|</a>
      </li>
      <li>
        <a href="#contact">Rate plan</a>
      </li>
      <li>
        <a href="#about">Solution</a>
      </li>
      <li>
        <a href="#about">Introduction</a>
      </li>
    </NavbarWrapper>
  );
}
