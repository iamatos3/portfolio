import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { DiMongodb, DiPostgresql } from 'react-icons/di';

export const links = [
  { id: 1, href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML & CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Node.js',
    icon: <FaNodeJs className='h-16 w-16 text-emerald-500' />,
    text: 'Proficiently skilled in Node.js, having a deep understanding of its core concepts and libraries, allowing for the development of complex and high-performance server-side applications.',
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    icon: <DiMongodb className='h-16 w-16 text-emerald-500' />,
    text: 'Possessing a high level of proficiency in MongoDB with the expertise to architect and optimize database structures, facilitating robust and scalable data management solutions for diverse applications.',
  },
  {
    id: nanoid(),
    title: 'PostgreSQL',
    icon: <DiPostgresql className='h-16 w-16 text-emerald-500' />,
    text: 'Being well-versed in PostgreSQL by having the capability to design and manage relational databases, ensuring data integrity and performance in a variety of applications.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://github.com/iamatos3/unsplashed-images/raw/main/public/ui-banner.png',
    url: 'https://unsplashed-images.netlify.app/',
    github: 'https://github.com/iamatos3/unsplashed-images',
    title: 'Unsplashed Images',
    text: 'Unsplashed Images is an engaging React.js project that harnesses the power of the Unsplash API to deliver an immersive photo discovery experience. This innovative web application enables users to effortlessly explore a vast array of captivating photos by performing custom searches.',
  },
  {
    id: nanoid(),
    img: 'https://github.com/iamatos3/grocery-pal/raw/main/public/gp-banner.png',
    url: 'https://grocerypal-gp.netlify.app/',
    github: 'https://github.com/iamatos3/grocery-pal',
    title: 'Grocery Pal 🥦',
    text: 'Grocery Pal is a feature-rich CRUD application built using Vite and React.js. It offers users a convenient and reliable solution to manage their grocery or errand items. Users can seamlessly add, read, update, and delete items while ensuring that their information is persistently stored even after refreshing the application.',
  },
  {
    id: nanoid(),
    img: 'https://user-images.githubusercontent.com/88846920/267393088-3b0461c9-657f-42c5-a504-4c3e79720146.png',
    url: 'https://color-generator-cg.netlify.app/',
    github: 'https://github.com/iamatos3/color-generator',
    title: 'Color Generator',
    text: 'Color Generator is a web application that allows users to explore and generate a wide range of colors based on their preferred hex code. Built using Vite and React.js, this application provides a user-friendly interface to interact with the color generation functionality.',
  },
  {
    id: nanoid(),
    img: 'https://github.com/iamatos3/Our-Tours/raw/main/public/our-tours-banner.png',
    url: 'https://our-tours-ot.netlify.app/',
    github: 'https://github.com/iamatos3/Our-Tours',
    title: 'Our Tours',
    text: 'An Application designed for a tour company with user-friendly UI to view and read more information within the description provided on the landing page.',
  },
  {
    id: nanoid(),
    img: 'https://user-images.githubusercontent.com/88846920/267396854-131cefe6-8b4d-4a31-a446-0a8a70cf800d.png',
    url: 'https://ians-react-task.netlify.app/',
    github: 'https://github.com/iamatos3/react-todo-app',
    title: `Ian's React To-do App`,
    text: 'A Complete To-Do Application with all features and using CRUD operations. React.js was used to manage our states along with Redux. Also learned to make simple animations using Framer Motion.',
  },
];
