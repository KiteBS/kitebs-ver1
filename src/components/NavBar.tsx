"use client";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "@/components/SideBar";
import { useMediaQuery } from "react-responsive";

const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const fontSize = isMobile ? "large" : "x-large";

  return (
    <>
      <Sidebar />
      <div className="sticky top-0 z-50 flex flex-col items-center justify-center bg-transparent">
        <Link href="/" className="mt-5">
          <Image
            src="/pictures/KITE.png"
            alt="Kite Logo"
            width={100}
            height={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        <p style={{ color: "#053F5C", fontSize: fontSize, zIndex: 1 }}>
          Fly With Kite - Elevate Your Life
        </p>
      </div>
    </>
  );
};
export default NavBar;
