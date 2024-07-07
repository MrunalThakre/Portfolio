import { link } from "node:fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Work Experience", link: "#experiences" },
  { name: "Contact", link: "#contact" },
  { name: "Resume", link: "https://drive.google.com/file/d/1_t2mQeAzTf80iFoiYOTW3jQKYKuV02Fi/view?usp=sharing"}
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize teamwork as the cornerstone of success in all my endeavors",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I’m very flexible with design, and create impactful experiences",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/b2.svg",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on Machine Learning Projects",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-1",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
 
];

export const projects = [
  {
    id: 1,
    title: "Maths Multiplication Game",
    des: "The objective of the game is to solve as many multiplication questions as possible within a time limit of 1 minute.",
    img: "/p1.svg",
    iconLists: ["/html.svg", "/css.svg", "/js.svg"],
    link: "https://github.com/MrunalThakre/maths_multiplication_game",
  },
  {
    id: 2,
    title: "Cognifyz Internship Landing Page",
    des: "Web Developer Internship Oppurtunities at Cognifyz Technologies",
    img: "/p2.svg",
    iconLists: ["/html.svg", "/css.svg"],
    link: "https://github.com/MrunalThakre/Company_Landing_Page",
  },
  {
    id: 3,
    title: "Fruit Slice Game",
    des: "Slice, Dice, and Juicy Delight: Unleash Your Inner Fruit Ninja in Every Swipe!",
    img: "/p3.svg",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/jquery.svg"],
    link: "https://github.com/MrunalThakre/Fruit_Slice_Game",
  },
  {
    id: 4,
    title: "To-do Website",
    des: "designed to boost your productivity and streamline your daily tasks effortlessly. Manage your tasks with ease and stay organized like never before!",
    img: "/p4.svg",
    iconLists: ["/html.svg", "/css.svg", "/js.svg"],
    link: "https://github.com/MrunalThakre/To-do-website",
  },

];



export const workExperience = [
  {
    id: 1,
    title: "Lead User Interface Designer - Epidise",
    desc: "Directing continuous UI design efforts for Epidise skincare app and UX features enhancement.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web-Development Intern - Cognifyz Technologies",
    desc: "Led the development of multiple web assets, such as company landing pages, photo galleries, and grid views, utilizing expertise in HTML, CSS, and JavaScript.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Core Team Member - ML Nagpur",
    desc: "Produced impactful reports, reaching diverse audiences and promoting community engagement and •Actively collaborated with team members to achieve organizational goals.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Content Writer - GDSC RCOEM",
    desc: "Produced comprehensive reports highlighting GDSC RCOEM's initiatives and achievements and played a pivotal role in event coordination, ensuring seamless execution and fostering positive attendee experiences",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/MrunalThakre"
  },
  {
    id: 2,
    img: "/twit.svg",
    link:"https://x.com/MrunalThakre23"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/mrunal-thakre/"
  },
];