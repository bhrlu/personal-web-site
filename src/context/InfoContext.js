import { createContext } from "react";

export const InfoContext = createContext();

export const InfoProvider = props => {

  const webSiteTitle = 'Amir Mahdi';

  const info = {
    name: 'Amir mahdi',
    family: 'baharlou',
    introduce: `I'm a young Engineer who has been educating in Computer Engineering and interested in programming since early childhood; I'm willing  to take and face any new challenge and like to experience new adventures.`,
    dateOfBrith: 'November 18, 1999',
    email: 'amirmahdibaharlou@gmail.com',
    phone: '+98 910 950 5714',
    gitHub: 'https://github.com/bhrlu',
    linkedIn: 'https://www.linkedin.com/in/amirmahdi-baharlou/',
    telegram: 'https://t.me/Amir_mb_b',
    cvDownload: 'https://drive.google.com/file/d/1X0Qw96X-NHb5dnwPA-d0HGUfTgjU7qic/view?usp=sharing',
    webSite: 'bhrlu.github.io/personal-web-site',
  };

  const skills = [
    { skill: 'HTML', persent: 90 },
    { skill: 'CSS', persent: 90 },
    { skill: 'JavaScript', persent: 80 },
    { skill: 'React', persent: 75 },
    { skill: 'Material UI', persent: 70 },
    { skill: 'Redux', persent: 50 },
    { skill: 'TDD development, React Unit Test (Jest, React Testing Library)', persent: 30 },
    { skill: 'MySQL', persent: 70 },
    { skill: 'Git', persent: 80 },
  ];

  const resume = [
    { date: 'March 2021- Sept 2021', title: 'Web Developer', title2: 'Tedinar', description: 'Start up Skills training system.Easy skill training is not just a simple slogan.', },
    { date: '2019-persent', title: 'Web Developer', title2: 'Sariab', description: 'Empowering students and developing mental health improvement solutions', },
    { date: '2019-persent', title: 'Computer Engineering', title2: 'Sina University', description: 'Bachelor of Science (BSc)', },
  ]

  return (
    <InfoContext.Provider value={{info, skills, resume, webSiteTitle}}>
      {props.children}
    </InfoContext.Provider>
  );
};