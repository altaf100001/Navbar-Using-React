
import React from "react";

import { Logo } from "./Logo";

import { Links } from "../Links";

import { Button } from "./Button";

export const Navbar = () =>
{
  return (
      <nav className="nav">
          <Logo/>
          <Links/>
          <Button/>
      </nav>
  )
}