import htmlLogo from './assets/brandIcons/html5.svg';
import cssLogo from './assets/brandIcons/css3.svg';
import typescriptLogo from './assets/brandIcons/typescript.svg';
import tailwindcss from './assets/brandIcons/tailwindcss.svg';
import reactLogo from './assets/brandIcons/react.svg';
import jestLogo from './assets/brandIcons/jest.svg';
import webpackLogo from './assets/brandIcons/webpack.svg';
import gitLogo from './assets/brandIcons/git.svg';
import tennsCentrlClip from './assets/projectClips/clipOneH264.m4v';
import cvMakerClip from './assets/projectClips/clipTwoH264.m4v';
import battleshipClip from './assets/projectClips/clipThreeH264.m4v';

export const navConfig = [
  {
    name: 'About',
    url: '/#about'
  },
  {
    name: 'Skills',
    url: '/#skills'
  },
  {
    name: 'Projects',
    url: '/#projects'
  },
  {
    name: 'Contact',
    url: '/#contact'
  }
];

export const about = {
  p1: `Hello! My name is Sumedh Inamdar and I enjoy building things for the web. I'm currently self-studying web development through the Odin Project.`,
  p2: 'Before embarking on a journey to becoming a self-taught software developer, I worked as an Engineering Program Manager at Apple where I managed the technical execution of Magsafe and several other wireless charging technologies.',
  p3: 'Utilizing my background in Mechanical Engineering and hardware developement, I enjoy approaching problems with a creative and technical mindset.'
};

export const brandIcons = [
  {
    name: 'HTML5',
    src: htmlLogo
  },
  {
    name: 'CSS3',
    src: cssLogo
  },
  {
    name: 'Typescript / JS',
    src: typescriptLogo
  },
  {
    name: 'Tailwind CSS',
    src: tailwindcss
  },
  {
    name: 'React',
    src: reactLogo
  },
  {
    name: 'Jest',
    src: jestLogo
  },
  {
    name: 'Webpack',
    src: webpackLogo
  },
  {
    name: 'Git',
    src: gitLogo
  }
];

export const featuredProjects = [
  {
    clip: tennsCentrlClip,
    name: 'TENNS CENTRL',
    description:
      'Fictional tennis shop site where a user can browse through merchandise across different pages, add / delete items, and proceed to a checkout page.',
    tech: [
      'React',
      'React Router',
      'Context API',
      'React Testing Library',
      'Intersection Observer API',
      'Tailwind CSS',
      'CSS Animations'
    ],
    link: 'https://sumedh-inamdar.github.io/shopping-cart/',
    github: 'https://github.com/sumedh-inamdar/shopping-cart'
  },
  {
    clip: cvMakerClip,
    name: 'CV Maker',
    description:
      'CV creator that allows user to add / delete / update jobs, education, skills, and their profile. User can then export their CV as a PDF.',
    tech: ['React', 'ReactToPrint (PDF export)', 'React Calendar'],
    link: 'https://sumedh-inamdar.github.io/cv-application/',
    github: 'https://github.com/sumedh-inamdar/cv-application'
  },
  {
    clip: battleshipClip,
    name: 'Battleship',
    description:
      'Classic Battleship game where users place ships and take turns placing attacks on their opponents board.',
    tech: [
      'Test Driven Development (TDD)',
      'Jest',
      'Algorithms',
      'Pure Functions'
    ],
    link: 'https://sumedh-inamdar.github.io/battleship/',
    github: 'https://github.com/sumedh-inamdar/battleship'
  }
];

export const regularProjects = [
  {
    name: 'SpiceCard',
    description:
      'Memory card game built using React Hooks. User must select unique cards each turn (max of 12) to test their memory.',
    tech: ['React', 'React Hooks', 'CSS'],
    link: 'https://sumedh-inamdar.github.io/memory-card/',
    github: 'https://github.com/sumedh-inamdar/memory-card'
  },
  {
    name: 'Weather App',
    description:
      'Provides real-time weather information of user supplied location using the OpenWeather API',
    tech: ['Async JS', 'APIs'],
    link: 'https://sumedh-inamdar.github.io/weather-app/',
    github: 'https://github.com/sumedh-inamdar/weather-app'
  },
  {
    name: 'To-do List',
    description:
      'To-do list application encompassing JS OOP common principles / best practices. Layout and design inspired by Todoist (todoist.com)',
    tech: ['Vanilla JS', 'SOLID principles'],
    link: 'https://sumedh-inamdar.github.io/Todo-List/',
    github: 'https://github.com/sumedh-inamdar/Todo-List'
  }
];
