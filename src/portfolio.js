const header = {
  homepage: 'https://github.com/rendisagala/portfolio-web',
  title: 'RAS.',
}

const about = {
  name: 'Rendi Anjuma Sagala',
  role: 'Full Stack Developer',
  description:
    'Hi👋, i am Rendi Anjuma Sagala. I am a self-motivated developer from West Borneo, Indonesia. Currently, i am learning JavaScript FullStack. I love to learn new things. Please check out my work below.',
  resume: '#contact',
  social: {
    linkedin: 'https://www.linkedin.com/in/rendisagala/',
    github: 'https://github.com/rendisagala',
    instagram: 'https://www.instagram.com/rendianjuma',
  },
}

const projects = [
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
    stack: ['NodeJS', 'Express', 'MongoDB', 'React'],
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
