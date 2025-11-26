// src/data.js
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaAngular,
  FaReact,
  FaPython,
  FaNodeJs,
  FaAws,
  FaAndroid,
  FaWordpress,
  FaGithub,
  FaDatabase,
  FaCode,
  FaCuttlefish,
} from "react-icons/fa";

import {
  SiTypescript,
  SiXml,
  SiPhp,
  SiDjango,
  SiMongodb,
  SiFlutter,
  SiKotlin,
  SiTensorflow,
  SiMysql,
  SiCplusplus,
  SiGooglecloud,
} from "react-icons/si";
import { SiDotnet } from "react-icons/si";


export const PROFILE = {
  name: "Afrah Mukadam",
  title: "Full-Stack Web Developer",
  location: "Dubai, United Arab Emirates",
  email: "mukadamafrah@gmail.com",
  phone: "+971 0556397865",
  about:
"I'm a passionate Full Stack Developer dedicated to crafting efficient, scalable, and user-friendly software solutions.",
  
  links: {
    github: "https://github.com/AfrahMukadam",
    linkedin: "https://www.linkedin.com/in/afrah-mukadam-688479219",
    resume: "/Afrah Mukadam_Full Stack Developer.pdf", 
  },
  avatar:
"/myimage.jpg"};

export const EXPERIENCE = [
  {
    company: "Skillvertex",
    title: "Cloud Computing Intern",
    period: "July 2022 — Sep 2022",
    location: "Remote",
    bullets: [
      "Undertook an internship in Cloud Computing at Skillvertex, focusing on fundamental concepts.",
      "Enhanced understanding of cloud architecture and deployment strategies.",
      "Explored how to effectively utilize cloud services for diverse applications.",
    ],
    skills: ["AWS Cloud", "Cloud Computing"],
  },
  {
    company: "Kiyanch Solutions",
    title: "Software Developer",
    period: "Oct 2021 — Jan 2022",
    location: "Remote",
    bullets: [
      "Developed and maintained web applications with responsive UI/UX.",
      "Designed backend architectures and optimized database performance.",
      "Integrated APIs and implemented secure user authentication mechanisms.",
    ],
    skills: ["HTML", "CSS", "Javascript", "Node.js", "PHP", "MySQL"],
  },
  {
    company: "Aaryak Solutions Pvt. Ltd",
    title: "Web Developer",
    period: "May 2019 — June 2019",
    location: "Ratnagiri, India",
    bullets: [
      "Designed and implemented full-stack web applications with real-time functionality.",
      "Managed server-side optimization and database administration.",
      "Ensured best security practices for data protection.",
    ],
    skills: ["HTML", "CSS", "Javascript", "Node.js", "PHP", "MySQL"],
  },
];

export const PROJECTS = [
  {
    name: "🌤️ Weather App",
    tagline: "Get the forecast in a flash!",
    description:
      "A lightweight and easy to use API that delivers real-time weather updates for any city around the world",
    tech: ["HTML", "CSS", "Javascript", "API"],
    live: "https://weatherly-api.netlify.app",
    repo: "https://github.com/AfrahMukadam/Weather-API",
    image:
      "/weather.png",
  },
  {
    name: "✈️ Flight Fare Prediction System",
    //tagline: "Predict your flight cost with confidence!",
    description: "A machine learning-based web app that predicts flight fares using real-world data and intelligent models, helping users make smarter travel decisions",
    tech: ["Python", "Machine Learning","Pandas", "Scikit-learn", "Flask", "HTML", "CSS", "JavaScript"],
    live: "#",
    repo: "https://github.com/AfrahMukadam/Flight-Fare-Prediction-System",
    image:
      "/flight.jpg",
  },
  {
    name: "🎓 College Connect",
    tagline: "Access your campus in a tap!",
    description: "A cross-platform mobile application built with Flutter that brings your college website to life. It provides quick access to announcements, events, and essential campus information — making it easier for students and faculty to stay connected anytime, anywhere",
    tech: ["Flutter", "Dart", "Firebase", "REST API"],
    live: "#",
    repo: "https://github.com/AfrahMukadam/Flutter-Project",
    image:
      "/flutter.jpg"
  },
  {
  name: "🎭 Emotion Recognition using Image Processing",
  //tagline: "See emotions through the lens of AI!",
  description:
    "An intelligent emotion detection system that identifies six universal human emotions — happiness, sadness, anger, disgust, surprise, and fear using facial expression analysis. Built with neural networks and image processing, it performs real-time emotion recognition through live camera feeds and stored images",
  tech: ["Python", "Java", "Image Processing", "TensorFlow", "OpenCV", "Android"],
  live: "#", // optional or can be left blank if not deployed
  repo: "#", // replace with actual repo link if different
  image: "/emotion.png"
},
{
  name: "🛒 Online Clothes Shopping System",
  //tagline: "Shop smart, stylish, and secure!",
  description:
    "A responsive full-stack ecommerce web application for online clothes shopping. Features include secure user registration and login with form validation, product listing, search functionality, cart management, order confirmation, and customer feedback. Includes an admin dashboard to manage inventory, users, and order statuses in real time. Designed with a clean and responsive UI using Bootstrap for seamless mobile compatibility",
  tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
  live: "#", // add live demo link if hosted
  repo: "#",
  image: "/clothes.jpg"
},
{
  name: "🖥️ Students Management System",
  //tagline: "Streamline student registration with ease!",
  description:
    "A desktop-based full-function student registration and management system built using Java frontend and MS Access backend. Features include automated student registration, profile management, real-time updates of student data, and easy-to-use administrative controls. Designed to simplify university enrollment and record-keeping with a clean UI and intuitive workflows",
  tech: ["Advanced Java", "MS Access Database", "Swing (Java GUI)"],
  live: "#", // add a demo link if available
  repo: "https://github.com/AfrahMukadam/Students-Management-System--Java-Project",
  image: "/students.png"
}



];

export
  const EDUCATION = [
    {
      degree: "Bachelor's of Information Technology Engineering (B.E.)",
      institution: "Finolex Academy of Management and Technology",
      period: "2020 — 2023",
      location: "Ratnagiri, Maharashtra, India",
      details: "CGPI: 9.67 / 10",
      
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Government Polytechnic Ratnagiri",
      period: "2017 — 2020",
      location: "Ratnagiri, Maharashtra, India",
      details: "Percentage: 90.57%",
    },
  ];


  export const CERTIFICATIONS = [
    {
      title: "Introduction to ASP.Net",
      issuer: "Simplilearn",
      year: "2025",
      link: "/Asp.net Certificate.pdf",
    },
    {
      title: "Getting Started with Full Stack Java Development",
      issuer: "Simplilearn",
      year: "2025",
      link: "/Getting started with full stack java development .pdf",
    },
    {
      title: "Introduction to Generative AI Studio",
      issuer: "Google Cloud",
      year: "2024",
      link: "/Introduction to Generative AI.pdf",
    },
    {
      title: "Boosting Machine Learning Models in Python",
      issuer: "Infosys",
      year: "2022",
      link: "/Boosting Machine Learning Models in Python-1.jpg",
    },
    {
      title: ".Net Fundamentals",
      issuer: "Great Learning",
      year: "2022",
      link: "/Net Fundamentals_page-0001.jpg",
    },
    {
      title: "Project Management Virtual Experience",
      issuer: "Forage",
      year: "2022",
      link: "/Project Management Virtual Experience_page-0001.jpg",
    },
    {
      title: "Cybersecurity Foundation",
      issuer: "Palo Alto Networks",
      year: "2022",
      link: "/Cybersecurity_Foundation_Student_Certificate.jpg",
    },
    {
      title: "Mobile App Development",
      issuer: "Cisco thingQbator",
      year: "2021",
      link: "/Mobile App Development certificate .jpg",
    },
    {
      title: "Introduction to AWS Solutions",
      issuer: "Amazon Web Services (AWS)",
      year: "2021",
      link: "/Introduction to AWS Solutions_page-0001.jpg",
    },
  
    {
      title: "Python Basics for Data Science",
      issuer: "IBM",
      year: "2021",
      link: "/Python Basics for Data Scienc by edx Certificate .jpg",
    },
    
  ];







// =========================
// SKILLS SECTION
// =========================
export const SKILLS = [
  { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
  { name: "AngularJS", icon: <FaAngular color="#DD0031" /> },
  { name: "ReactJS", icon: <FaReact color="#61DAFB" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "XML", icon: <SiXml color="#006699" /> },
  { name: "PHP", icon: <SiPhp color="#777BB4" /> },
  { name: "Python", icon: <FaPython color="#3776AB" /> },
  { name: "NodeJS", icon: <FaNodeJs color="#339933" /> },
  { name: "Django", icon: <SiDjango color="#092E20" /> },
  { name: ".NET", icon: <SiDotnet color="#512BD4" /> },
  { name: "SQL", icon: <SiMysql color="#00758F" /> },
  { name: "NoSQL", icon: <FaDatabase color="#4DB33D" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "AWS", icon: <FaAws color="#FF9900" /> },
  { name: "Android", icon: <FaAndroid color="#3DDC84" /> },
  { name: "Flutter", icon: <SiFlutter color="#02569B" /> },
  { name: "Kotlin", icon: <SiKotlin color="#7F52FF" /> },
  { name: "WordPress", icon: <FaWordpress color="#21759B" /> },
  { name: "Cloud Computing", icon: <SiGooglecloud color="#4285F4" /> },
  { name: "Machine Learning", icon: <SiTensorflow color="#FF6F00" /> },
  {
    name: "Data Science",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png"
        alt="Data Science"
        style={{ width: "28px", height: "28px" }}
      />
    ),
  },
  { name: "GitHub", icon: <FaGithub color="#181717" /> },
  { name: "OOP", icon: <FaCode color="#6f42c1" /> },
  { name: "C", icon: <FaCuttlefish color="#A8B9CC" /> },
  { name: "C++", icon: <SiCplusplus color="#00599C" /> },
];

export const CONTACT_NOTICE =
  "I’m open to interesting frontend and full-stack opportunities. The fastest way to reach me is email.";
