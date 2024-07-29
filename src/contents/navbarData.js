import profileImage from "../assets/images/vaiolet.png";
import tanjiro from "../assets/images/tanjiro.jpg";
import luffy from "../assets/images/luffy.jpg";
import naroto from "../assets/images/naroto.jpg";
import { HiArchive } from "react-icons/hi";
import { PiNewspaperFill } from "react-icons/pi";

export const images = { profileImage, tanjiro, luffy, naroto };

export const messages = [
  { img: tanjiro, name: "Ameer Badran", time: "1 Minutes ago" },
  { img: luffy, name: "Ameer Badran", time: "1 Minutes ago" },
  { img: profileImage, name: "Ameer Badran", time: "1 Minutes ago" },
  { img: naroto, name: "Ameer Badran", time: "1 Minutes ago" }
];

export const notifications = [
  { icon: HiArchive, color: "amber-600", text: "Leave Requests", count: "0 Requests" },
  { icon: PiNewspaperFill, color: "lime-500", text: "Invoices", count: "0 Invoices" }
];