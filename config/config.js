import profile from './profile.png';
import {
  faAppStore,
  faGithub,
  faGooglePlay,
} from '@fortawesome/free-brands-svg-icons';
import {} from '@fortawesome/free-solid-svg-icons';
import web_icon from '../public/website_icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: 'David',
  links: [
    {
      title: 'About',
      link: '#about',
    },
    {
      title: 'Projects',
      link: '#projects',
    },
    {
      title: 'Contact',
      link: '#contact',
    },
    {
      title: 'Links',
      link: '/links',
    },
  ],
};
export const intro = {
  title: "Hey, I'm David",
  description: 'A Software Engineer studying at Boston University.',
  image: profile.src,
  buttons: [
    {
      title: 'Contact Me',
      link: '#contact',
      isPrimary: true,
    },
    {
      title: 'Resume',
      link: 'https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing',
      isPrimary: false,
    },
  ],
};

export const about = {
  title: 'Who I am',
  description: [
    "I'm a junior at Boston University studying Computer Science.",
    'When I’m not programming, I focus on my hobbies which are: tennis and movies',
  ],
};

export const work = {
  title: 'What I do',
  cards: [
    {
      title: 'Mobile App Development',
      description: 'I create pixel perfect iOS and Andriod apps using Flutter.',
      icons: null,
    },
    {
      title: 'Web Development',
      description: 'I create responsive static websites using Reactjs.',
      icons: null,
    },
  ],
};

export const projects = {
  title: 'Projects',
  cards: [
    {
      title: 'PlateCritique',
      description:
        'A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year.',
      icons: [
        {
          icon: faLink,
          link: 'https://www.platecritique.com',
        },
        {
          icon: faGithub,
          link: 'https://github.com/hashirshoaeb/portfolio',
        },
      ],
    },
    {
      title: 'Job Scraper',
      description:
        'A specialized program that scrapes indeed.com to streamline the search process and assist job seekers in job market',
      icons: [
        {
          icon: faGithub,
          link: 'https://github.com/hashirshoaeb/portfolio',
        },
      ],
    },
    {
      title: 'Portfolio',
      description:
        'A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.',
      icons: [
        {
          icon: faGithub,
          link: 'https://github.com/hashirshoaeb/portfolio',
        },
      ],
    },
  ],
};

export const contact = {
  title: 'Get in touch',
  description:
    'Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at hashirshoaeb@gmail.com.',
  buttons: [
    {
      title: 'Email Me',
      link: 'mailto:hashirshoaeb@gmail.com',
      isPrimary: true,
    },
    {
      title: 'Schedule Meeting',
      link: 'https://topmate.io/hashirshoaeb',
      isPrimary: false,
    },
  ],
};

// SEARCH ENGINE
export const SEO = {
  // 50 - 60 char
  title:
    'David Myat | Computer Science Student | Software Engineer | Fullstack developer | Backend Developer',
  description:
    'I created backend projects and fullstack websites. I am studying computer science at Boston University.',
  image: profile.src,
};

export const links = {
  image: profile.src,
  title: '@hashirshoaeb',
  description: 'Computer Engineer | Flutter | Reactjs Developer',
  cards: [
    {
      title: 'My website',
      link: 'https://hashirshoaeb.com/',
    },
    {
      title: 'QuranTalk App',
      link: 'https://www.qurantalk.app/',
    },
    {
      title: 'StarBook App',
      link: 'https://starbook.dev/',
    },
    {
      title: 'My GitHub',
      link: 'https://github.com/hashirshoaeb/',
    },
    {
      title: 'My LinkedIn',
      link: 'https://www.linkedin.com/in/hashirshoaeb/',
    },
  ],
};
