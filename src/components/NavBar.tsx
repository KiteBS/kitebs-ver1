"use client";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./NavMobile";

const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const fontSize = isMobile ? "large" : "x-large";

  return (
    <>
      <NavDesktop />
      <NavMobile />
    </>
  );
};
export default NavBar;
