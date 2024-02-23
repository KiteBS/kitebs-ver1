"use client";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "./Footer";

const DetailsFooter = () => {
  const divStyle: React.CSSProperties = {
    position: "relative",
    padding: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const textColorStyle = {
    color: "#053F5C",
  };
  const logoSize = isMobile ? 75 : 150;
  const iconSize = isMobile ? "small" : "x-large";

  return (
    <>
      <div className="bg-white" style={divStyle}>
        <div className={!isMobile ? "mt-2 mb-2 z-10 mx-20" : "mb-2 z-10"}>
          <div>
            <Image
              src="/pictures/KITE.png"
              alt="KITE Logo"
              width={logoSize}
              height={logoSize}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div
            className="flex justify-between"
            style={{ color: "#053F5C", fontSize: iconSize }}
          >
            <Link href="https://www.facebook.com/Viet80s.Nott" className="mx-1">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link
              href="https://www.instagram.com/viet80s.nottingham/"
              className="mx-1"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              href="https://www.youtube.com/@viet80soficialuk"
              className="mx-1"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </div>
        </div>

        {/* Center Column - Useful Links */}
        <div
          className={!isMobile ? " mx-20 z-10 text-xl" : " ml-5 z-10 text-sm"}
          style={textColorStyle}
        >
          <p style={{ fontWeight: "bolder" }}>Links</p>
          <ul>
            <li>
              <Link href="/mobile-app">- Offers</Link>
            </li>

            <li>
              <Link href="/street-food">- News</Link>
            </li>
            <li>
              <Link href="/restaurant">- Pricing</Link>
            </li>

            <li>
              <Link href="/terms-and-policies">- Policy and Terms</Link>
            </li>
          </ul>
        </div>

        {/* Right Column - Opening Hours and Address */}
        <div
          className={!isMobile ? " mx-20 z-10 text-xl" : " mx-5 z-10 text-sm"}
          style={textColorStyle}
        >
          <p style={{ fontWeight: "bolder" }}>Opening Hours</p>
          <p>Mondays - Fridays</p>
          <p>9:00 AM - 5:00 PM</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailsFooter;
