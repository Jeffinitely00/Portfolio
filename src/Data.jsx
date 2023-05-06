import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaDribbble, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiSolidity, SiAbletonlive, SiMongodb } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import portfolio from "./assets/portfolio.jpg"
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  <FaDribbble />,
  <FaInstagram />,
  <FaLinkedin />,
  <FaHtml5 />
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Jeffrey Lim"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+4699542725"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "limjeffrey104@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <SiAbletonlive />, <FaReact />, <FaNodeJs />, <SiMongodb />, <SiSolidity />]

export const experiences = [
  {
    id: 1,
    year: "2023",
    position: "Software Developer Graduate",
    company: "https://perscholas.org/"
  },
  // {
  //   di: 2,
  //   year: "2021",
  //   position: "Junior Web Developer",
  //   company: "shop.com.mm"
  // },
  // {
  //   id: 3,
  //   year: "2019",
  //   position: "Intern Web Dveloper",
  //   company: "shop.com.mm"
  // }
]
export const finishes = [
  {
    id: 1,
    number: '2+',
    itemName: "Years Of Experience"
  },
  {
    id: 2,
    number: "20+",
    itemName: "Satisfied Customers"
  },
  {
    id: 4,
    number: "20+",
    itemName: "Clients Served"
  }
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web",
    githubUrl: "https://github.com/Jeffinitely00"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web",
    githubUrl: "https://github.com/Jeffinitely00"
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web",
    githubUrl: "https://github.com/Jeffinitely00"
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app",
    githubUrl: "https://github.com/Jeffinitely00"
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: 'app',
    githubUrl: "https://github.com/Jeffinitely00"
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design",
    githubUrl: "https://github.com/Jeffinitely00"
  }
]


export const workNavs = [
  "All", "Web", "App"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Plano, Texas"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "limjeffrey104@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+(469) 954-2725"
  }
]
