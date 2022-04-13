import Link from "next/link";
import React from "react";
import { ActiveLink } from "./ActiveLink";

export const Navbar = () => {
  return (
    <nav className="menu-container">
      <ActiveLink text="Home" href="/" />
      <ActiveLink text="About" href="/about" />
      <ActiveLink text="Contact" href="/contact" />
    </nav>
  );
};
