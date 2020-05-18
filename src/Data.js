const resume = {
  name: "Low Zi Jian",
  email: "lowbak1998@gmail.com",
  contact: "018-7880225",
  address: "Bandar Damai Perdana , Cheras , KL",
  fullAddress:
    "No.11 Taman Damai Impian 2, 2/8A Jalan Damai Impian, 56000 Kuala Lumpur.",
  isFullTime: true,
  profession: "Software Engineer",
  careerObjective:
    "A software engineering graduate from UTAR who is seeking to find a responsible career opportunity to fully utilize my training and skills, while making a significant contribution to the success of the company. ",
  workExperience: [
    {
      title: "Intern Web App Developer",
      company: "Datum ClearMind",
      location: "Kuala Lumpur",
      timeline: "October 2019 - December 2019",
      duration: 3,
      unit: "month",
      isFullTime: true,
      workContent: ["Develop front end layout ", "Fix UI bug"],
    },
  ],
  education: {
    Secondary: {
      title: "SPM",
      grade: " 5A, 6B, 1C",
      school: "Tsun Jin High School",
      timeline: "2013 - 2015",
    },

    Foundation: {
      title: "Foundation in Science",
      grade: " 3.4906",
      school: "University of Tunku Abdul Rahhman (UTAR)",
      timeline: "May 2016 - May 2017",
    },

    Degree: {
      title: "Bachelor of Science (Hons) Software Engineering",
      grade: " 3.5393",
      muet: "Band 4",
      school: "University of Tunku Abdul Rahhman (UTAR)",
      timeline: "May 2017 - May 2020",
    },
  },
  technicalSkills: [
    {
      title: "React & React Native",
      description: "Proficient in React & React Native Javascript library",
      level: "Amateur",
      icon: "react",
    },
    {
      title: "HTML , CSS , SCSS , Javascript , PHP",
      description:
        "Fundamental understanding in HTML , CSS , SCSS , Javascript and PHP",
      level: "Beginner",
      icon: "web",
    },
    {
      title: "Laravel",
      description: "Experience with web application development using Laravel",
      level: "Beginner",
      icon: "laravel",
    },
    {
      title: "Angular",
      description:
        "Beginner in Angular Framework , learned during Internship with Typescript",
      level: "Beginner",
      icon: "angular",
    },
    {
      title: "Python",
      description:
        "Beginner level in Python and data mining libraries such as  Pandas, Numpy, Matplotlib, Seaborn and Scikit Learn",
      level: "Beginner",
      icon: "python",
    },
    {
      title: "Java , C ,C++ , C#",
      description: "Novice in Java , C ,C++ , C# programming languages",
      level: "Beginner",
      icon: "program",
    },
    {
      title: "NoSQL , MySQL",
      description: "Novice in database structure and queries",
      level: "Beginner",
      icon: "database",
    },
  ],
  softSkills: {
    Language: [
      {
        title: "English",
        description: "Proficient in speaking , writing and reading",
      },
      {
        title: "Chinese",
        description: "Native Language",
      },
      {
        title: "Malay",
        description: "Proficient in reading , beginner in writing and speaking",
      },
    ],
    "Personal Trait": [
      "Eager to learn",
      "Able to work in team or as an individual",
      "Patience",
      "Great adaptability in new environment",
      "Creative Thinking",
    ],
  },
  achivements: {
    "Bachelor of Science (Hons) Software Engineering": [
      {
        title: "DEAN's List",
        semester: "January 2018 , October 2018 , May 2019",
      },
      {
        title: "PRESIDENT's List",
        semester: "January 2019",
      },
    ],
  },
};

const recentProjects = [
  {
    title: "Scrum Board Mobile App",
    description:
      "UTAR Final Year Project . Developed using React Native. A mobile application which allows Scrum users to keep track of their projects and tasks remotely",
    timeline: "January 2020 - May 2020",
    fyi: "https://github.com/lowzijian/ScrumMobile",
    screenShots: [
      {
        img: "scrummobile1",
        description:
          "Scrum mobile application show a dashboard of Scrum member's projects and recent activity.",
      },
      {
        img: "scrummobile2",
        description:
          "Scrum mobile application show all the Scrum member's sprint activities",
      },
    ],
  },
  {
    title: "Scrum Board Web App",
    description:
      "UTAR Final Year Project . Developed using React. A web application which allows Scrum masters to manage projects and sprints concurrently ,in sync with the Scrum Mobile App",
    timeline: "January 2020 - May 2020",
    fyi: "https://scrumfyp.web.app",
    screenShots: [
      {
        img: "scrumweb1",
        description:
          "Scrum web application show the scrum board of an ongoing sprint.",
      },
      {
        img: "scrumweb2",
        description:
          "Scrum web application allows Scrum master to manage product backlogs",
      },
    ],
  },
  {
    title: "Travel Bucketlist system",
    description:
      "A Web application created using Laravel Framework , allows user to manage their travel bucket ideas and destination ",
    timeline: "January 2020 - May 2020",
    fyi: "https://github.com/lowzijian/Travel-Bucketlist-Management-System",
    screenShots: [
      {
        img: "travel1",
        description:
          "Travel Bucketlist system show a dashboard of travel buckelist items",
      },
      {
        img: "travel2",
        description:
          "User view the information of favourite travel bucketlist item",
      },
    ],
  },
];

const aboutMe = {
  careerStatements:
    "These three years of degree really inspire me a lot. I learn a lot of new things and come to endure hardships better.I look forward to work in a dynamic IT work environment where I can continuously strive for gaining newer knowledge and skills. Hopes to become a prudential and goal-oriented team player under guidance of senior developers.",
  careerInterests: [
    {
      title: "Full stack developer",
      description:
        "Working on both the server and client slide professionally opens more opportunities for me learn",
      icon: "developer",
    },
    {
      title: "UI and UX",
      description:
        "Involve in creating icons , mock-up of the UI for an application",
      icon: "protoype",
    },
    {
      title: "Research and Discover",
      description: "Discover new tech and third party libraries to play with",
      icon: "discover",
    },
  ],
};

export { resume, recentProjects, aboutMe };
