import resumedarko from './components/assets/resume.pdf'
import omnifood from './components/assets/omnifood.png'
import order from './components/assets/omnifood-order.png'
import quiz from './components/assets/quiz.png'

const header = {
  homepage: 'https://darkos-portfolio.netlify.com',
  title: 'DI.',
}

const about = {
  name: 'Darko Ilievski',
  role: 'Front End Developer',
  description:
    'I’ve always been a great problem solver, loyal, an extrovert, and a technophile obsessed with the latest devices. After a college education in the economy department and continuing to work as a human resources manager, I realized software development was the right field for me. Since then, I’ve dedicated my time to learn and work on some projects which you can see on my portfolio site and GitHub page.I’m familiar with some programming languages, including JavaScript, HTML, CSS, ReactJS, NextJS but I’m always adding new skills to my repertoire.',
  resume: resumedarko,
  social: {
    linkedin: 'https://www.linkedin.com/in/darko-ilievski-156141233/',
    github: 'https://github.com/darkoilievski',
  },
}

const projects = [
  {
    name: 'Omnifood',
    description:
      'This is a website i made after i finished learning HTML and CSS, it has a little bit of JavaScript included for some functionality',
    stack: ['HTML 5', 'CSS 3', 'JS'],
    sourceCode: 'https://github.com/darkoilievski/omnifood',
    livePreview: 'https://omnifood-darko.netlify.app/',
    image: omnifood,
  },
  {
    name: 'Omnifood Order App',
    description:
      'This is an e-commerce store that i made in React, as an inspiration i used my previous OmniFood website.',
    stack: ['React', 'CSS Modules', 'React-Context'],
    sourceCode: 'https://github.com/darkoilievski/Omnifood-Food-Order-React',
    livePreview: 'https://omnifood-order-app.netlify.app/',
    image: order,
  },
  {
    name: 'Quiz App',
    description:
      'One of the most challenging projects i built so far, i have a more detailed summary in my ReadMe file on GitHub. The app is fully responsive.',
    stack: ['React', 'JavaScript'],
    sourceCode: 'https://github.com/darkoilievski/Quiz-Darko',
    livePreview: 'https://darko-quiz.netlify.app/',
    image: quiz,
  },
]

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Git', 'Next JS']

const skillsMessage = [
  'These are some of the skills i am comfortable to work with, i am always learning and expanding my knowledge',
]

const contact = {
  email: 'darkoilievski@yahoo.com',
}

export { header, about, projects, skills, contact, skillsMessage }
