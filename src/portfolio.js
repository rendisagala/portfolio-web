const header = {
  homepage: 'https://github.com/rendisagala',
  title: 'RAS.',
}

const about = {
  name: 'Rendi Anjuma Sagala',
  role: 'Full Stack Developer',
  description:
    'Hi👋, i am Rendi Anjuma Sagala. I am a self-motivated developer from West Borneo, Indonesia. Currently, i am learning JavaScript FullStack. I love to learn new things. Please check out my work below.',
  resume:
    'https://drive.google.com/file/d/1cFfUOzpkPOKR1RXSJuXFB_wnRJXP7aXC/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/rendisagala/',
    github: 'https://github.com/rendisagala',
  },
}

const projects = [
  {
    name: 'Printoj API',
    description: `Printoj is an innovative digital printing company based in Pristina, Kosovo, offering both B2B and B2C services. They specialize in print-on-demand products, allowing customers to design and order customized items through their online platform.
- Designed and developed scalable RESTful APIs using Node.js, Express.js, and TypeScript for a custom print-on-demand platform.
- Utilized Prisma ORM to efficiently manage relational data models and handle complex queries in a PostgreSQL database.
- Implemented error handling middleware, request validation, and clean architecture practices for maintainable code.
- Collaborated with the frontend team to define API contracts and support a seamless user experience.`,
    stack: ['Node.js', 'Express.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    livePreview: 'https://printoj.com/',
  },
  {
    name: 'Listub API',
    description: `Listub is a productivity app that helps you organize your daily life by combining task management and plan sharing in one simple, efficient platform.
- Developed robust RESTful APIs using Node.js, Express.js, and TypeScript to support core functionalities such as task creation, scheduling, and collaboration.
- Designed and implemented MongoDB schemas for scalable data modeling, ensuring smooth handling of tasks, user data, and shared plans.
- Optimized API performance through query indexing, middleware abstraction, and modular architecture.`,
    stack: ['Node.js', 'Express.js', 'TypeScript', 'MongoDB'],
    livePreview: 'https://listub.app/',
  },
  {
    name: 'Tedera API',
    description: `Tedera is an upcoming delivery platform developed by Tedera L.L.C., based in Pristina, Kosovo, and set to launch in 2025. It allows users to order deliveries and register/manage their own stores, offering a dual experience for customers and business owners.
- Designed and developed the backend API using TypeScript, Node.js, and Express.js to handle core delivery and store management functionalities.
- Integrated MongoDB for scalable NoSQL data modeling and efficient data operations.
- Implemented modular architecture and middleware for error handling, authentication, and request validation to ensure clean and maintainable code.`,
    stack: [
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'AWS',
      'Firebase',
    ],
    livePreview: 'https://tedera.app/',
  },
  {
    name: 'ReachMe',
    description:
      'ReachMe is a social media app that connects people from any place in one app. User can post what they want in ReachMe App. Each user can check other user profile like profile picture, name, email, posts, etc. You will be needed to register your account to using ReachMe App and after that, Enjoy The App!',
    stack: ['MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS'],
    sourceCode: 'https://github.com/rendisagala/ReachMe',
    livePreview: 'https://reachme.vercel.app',
  },
  {
    name: 'ArenaSports',
    description:
      'ArenaSports is a website that provides you all the information you need about football. Football Teams, Scores, Stats, News, Fixtures, Results, Tables. All you need about your favorite league is here. Enhance your football knowledge by digging through ArenaSports App.',
    stack: ['React', 'Axios', 'Bootstrap'],
    sourceCode: 'https://github.com/rendisagala/ArenaSports',
    livePreview: 'https://arenasports.vercel.app',
  },
  {
    name: 'Hotel Geeks API',
    description:
      'An API that provide hotels data free to use made by @rendisagala. This API provide more than 50 hotels with each special details like facilites, stars, nearby places, and details that related to hotels data.',
    stack: ['NodeJS', 'Express', 'MongoDB'],
    sourceCode: 'https://github.com/rendisagala/hotel-geeks',
    livePreview: 'https://github.com/rendisagala/hotel-geeks',
  },
  {
    name: 'Movie Geeks',
    description:
      'Movie Geeks is a website that provides you information about your favorite movie and TV series. You can see all about the film, trailer, photos, review, and other stuff you need to know about your favorite movie and film from TMDB API.',
    stack: ['NodeJS', 'Express', 'EJS'],
    sourceCode: 'https://github.com/rendisagala/Movie-Geeks',
    livePreview: 'https://moviegeeksapp.herokuapp.com/',
  },
  {
    name: 'Employee Tracker API',
    description:
      'An API that provide more than 1000+ dummy employee data that is free to use made by @rendisagala. This API provide employee data with each special details like avatar, job, etc.',
    stack: ['NodeJS', 'Express', 'MySQL'],
    sourceCode: 'https://github.com/rendisagala/Employee-Tracker-API',
    livePreview: 'https://github.com/rendisagala/Employee-Tracker-API',
  },
  {
    name: 'TaskHelper App',
    description:
      'TaskHelper is a website that will help you manage list of the tasks that you have to do, or things that you want to do. TaskHelper is provided with a login system that will secure and keep your data save.',
    stack: ['NodeJS', 'Express', 'MongoDB', 'EJS'],
    sourceCode: 'https://github.com/rendisagala/TaskHelper-App',
    livePreview: 'https://taskhelper-app.herokuapp.com',
  },
  {
    name: 'Old Portfolio Website',
    description:
      'My portfolio website, like any other portfolio website, this website provides my professional information about me which is include my resume; my work; something about me; my contact; etc. ',
    stack: ['JavaScript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/rendisagala/rendisagala19',
    livePreview: 'https://rendisagala19.vercel.app/',
  },
]

const skills = [
  'NodeJS',
  'Express',
  'MongoDB',
  'MySQL',
  'React',
  'Git',
  'HTML',
  'CSS',
  'JavaScript',
]

const contact = {
  email: 'rendisagala19@gmail.com',
}

export { header, about, projects, skills, contact }
