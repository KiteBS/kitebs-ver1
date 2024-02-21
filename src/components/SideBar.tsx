import { stack as Menu } from "react-burger-menu";
import {
  CalendarCheck,
  ShoppingBag,
  Star,
  Mails,
  StickyNoteIcon,
  Merge,
  Smartphone,
  Home,
  Gem,
} from "lucide-react";

const Sidebar = () => {
  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "50px",
      top: "50px",
    },
    bmBurgerBars: {
      background: "#F8C983",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#F8C983",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#373a47",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#F8C983",
      padding: "0em",
    },

    bmItem: {
      display: "flex",
      padding: "0.3em",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };
  return (
    <Menu styles={styles}>
      <a id="about" className="menu-item" href="/">
        <Home className="mr-2" />
        Home
      </a>
      <a id="about" className="menu-item" href="/specials">
        <Gem className="mr-2" />
        Special Offers
      </a>
      <a id="menus" className="menu-item" href="/menus">
        <ShoppingBag className="mr-2" /> Menus / Click & Collect
      </a>
      <a
        id="booking"
        className="menu-item"
        href="https://www.viet80sonline.co.uk/s/appointments"
      >
        <CalendarCheck className="mr-2" /> Book a Table
      </a>
      <a id="about" className="menu-item" href="/about-us">
        <Star className="mr-2" />
        About Us
      </a>
      <a id="contact" className="menu-item" href="/contact">
        <Mails className="mr-2" /> Contact Us
      </a>
      <a id="mobile-app" className="menu-item" href="/mobile-app">
        <Smartphone className="mr-2" /> Viet80s Mobile App
      </a>
      <a id="blog" className="menu-item" href="/blog">
        <StickyNoteIcon className="mr-2" /> Viet80s Blog
      </a>
      <a id="join" className="menu-item" href="/join-us">
        <Merge className="mr-2" /> Join Us
      </a>
    </Menu>
  );
};

export default Sidebar;
