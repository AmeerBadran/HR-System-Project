// src/constants/projectsData.js
import tanjiro from "../assets/images/tanjiro.jpg";
import profileImage from "../assets/images/vaiolet.png";
import luffy from "../assets/images/luffy.jpg";
import naroto from "../assets/images/naroto.jpg";

export const projectsData = [
  {
    title: "Web Portal Development",
    description: "Create a user-friendly web portal for internal employee management.",
    date: "21.8.1.19",
    timeRequired: 85,
    status: "In Progress",
    employees: [
      {
        name: "Tanjiro",
        image: tanjiro,
        specialty: "Frontend Development",
        task: "Designing UI components"
      },
      {
        name: "Violet",
        image: profileImage,
        specialty: "Backend Development",
        task: "Creating APIs"
      },
      
    ],
  },
  {
    title: "Mobile App Development",
    description: "Develop a mobile application for the HR system.",
    date: "21.7.1.19",
    timeRequired: 70,
    status: "Started",
    employees: [
      {
        name: "Luffy",
        image: luffy,
        specialty: "Mobile Development",
        task: "Developing Android version"
      },
      {
        name: "Naruto",
        image: naroto,
        specialty: "UI/UX Design",
        task: "Designing mobile user interfaces"
      },
    ],
  },
  {
    title: "CRM System Upgrade",
    description: "Upgrade the existing CRM system to enhance client interaction tracking.",
    date: "21.9.10.19",
    timeRequired: 90,
    status: "Under Review",
    employees: [
      {
        name: "Tanjiro",
        image: tanjiro,
        specialty: "Backend Development",
        task: "Database migration"
      },
      {
        name: "Violet",
        image: profileImage,
        specialty: "Quality Assurance",
        task: "Testing the upgraded system"
      },
    ],
  },
  {
    title: "E-Commerce Platform",
    description: "Build a scalable e-commerce platform for online retail.",
    date: "21.10.5.19",
    timeRequired: 50,
    status: "Started",
    employees: [
      {
        name: "Luffy",
        image: luffy,
        specialty: "Full Stack Development",
        task: "Developing both frontend and backend"
      },
      {
        name: "Naruto",
        image: naroto,
        specialty: "Database Design",
        task: "Setting up the database schema"
      },
    ],
  },
  {
    title: "Data Analysis Tool",
    description: "Develop a data analysis tool for visualizing company sales data.",
    date: "21.6.15.20",
    timeRequired: 60,
    status: "Started",
    employees: [
      {
        name: "Tanjiro",
        image: tanjiro,
        specialty: "Data Science",
        task: "Analyzing sales data"
      },
      {
        name: "Violet",
        image: profileImage,
        specialty: "Data Visualization",
        task: "Creating visual reports"
      },
    ],
  },
  {
    title: "Network Security Enhancement",
    description: "Enhance the security protocols for the company's internal network.",
    date: "21.11.22.19",
    timeRequired: 75,
    status: "In Progress",
    employees: [
      {
        name: "Luffy",
        image: luffy,
        specialty: "Cybersecurity",
        task: "Implementing new security measures"
      },
      {
        name: "Naruto",
        image: naroto,
        specialty: "Network Administration",
        task: "Configuring secure network settings"
      },
    ],
  },
];
