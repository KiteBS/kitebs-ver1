import { FaHome } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import { PiChatCircleBold } from "react-icons/pi";
import { IoIosPricetags } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { BiNews } from "react-icons/bi";

export const routes = [
  {
    title: "Home",
    href: "#",
    Icon: FaHome,
  },
  {
    title: "Offers",
    href: "#",
    Icon: BiSolidOffer,
  },
  {
    title: "News",
    href: "#",
    Icon: BiNews,
  },
  {
    title: "Pricing",
    href: "#",
    Icon: IoIosPricetags,
  },
  {
    title: "About",
    href: "#",
    Icon: PiChatCircleBold,
  },
  {
    title: "Contact Us",
    href: "#",
    Icon: MdConnectWithoutContact,
  },
];