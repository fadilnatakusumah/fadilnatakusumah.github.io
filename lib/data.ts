import { StepProps } from "../components/commons/Steps/Step";

export const EXPERIENCES = [
  {
    title: "Frontend Developer",
    employment: "Full-time",
    at: "Flip.id",
    link: "https://flip.id",
    logo: "/assets/images/companies/flip.png",
    current: true,
    duration: {
      from: "Jul 2021",
      to: "",
    },
    techstacks: ["react", "redux", "styled-components"],
    descriptions: [
      "Develop and maintain Bigflip.id (Flip.id B2B) web UI to facilitate best user experience to for b2b transfer services.",
    ],
  },
  {
    title: "Frontend Engineer",
    employment: "Full-time",
    at: "Codemi",
    link: "https://codemi.co.id/",
    logo: "/assets/images/companies/codemi.png",
    current: false,
    duration: {
      from: "Apr 2019",
      to: "Jun 2021",
    },
    techstacks: [
      "react",
      "react-boilerplate",
      "mobx",
      "redux",
      "xstate",
      "emotion",
    ],
    descriptions: [
      "Develop and implement new features for Codemi’s LMS (Learning Management System).",
      "Help maintain the codes, make custom components to support and fix unexpected bugs.",
    ],
  },
  {
    title: "Assistant Lecture",
    employment: "Position",
    at: "Universitas Islam Indonesia",
    link: "https://www.uii.ac.id/en/",
    logo: "/assets/images/companies/uii.png",
    current: false,
    duration: {
      from: "Sep 2017",
      to: "Mar 2018",
    },
    techstacks: [],
    descriptions: [
      "Help teacher work with students for Course: Interaction of Human and Computer (3 credits).",
    ],
  },
  {
    title: "Frontend Developer",
    employment: "Internship",
    at: "Javasign",
    link: "https://www.javasign.net/",
    logo: "/assets/images/companies/javasign.png",
    current: false,
    duration: {
      from: "Nov 2017",
      to: "Jan 2018",
    },
    techstacks: ["vue", "vuetify", "firebase"],
    descriptions: [
      "Built frontend app with Vue, Vuetify and Firebase to display e-money balance of Banks in Indonesia, taken from Javasign's backend API service.",
    ],
  },
];

export const PROJECTS: StepProps[] = [
  {
    title: "Nevernote",
    employment: "Personal",
    image: "/assets/images/projects/nevernote.png",
    duration: {
      from: "Jun 2021",
      to: "July 2021",
    },
    techstacks: [
      "typescript",
      "react",
      "emotion",
      "express",
      "graphql",
      "typeorm",
      "type-graphql",
      "mysql",
      "docker",
    ],
    descriptions: [
      "Build an Evernote clone app.",
      "Easely make a note, update and delete.",
    ],
    githubLink: "https://github.com/fadilnatakusumah/nevernote",
  },
  {
    title: "Artikel Islam",
    githubLink: "https://github.com/fadilnatakusumah/catch-a-pokemon",
    appLink:
      "https://play.google.com/store/apps/details?id=com.fadilnatakusumah.artikel_islam",
    descriptions: [
      "Mobile app for reading Islamic articles from trusted websites like Konsultasisyariah.com, Muslim.or.id, Muslimah.or.id, and many more.",
      "The app let you save articles for reading in offline mode.",
    ],
    duration: {
      from: "Dec 2020",
      to: "Current",
    },
    techstacks: ["flutter", "dart"],
    employment: "Personal",
    image: "/assets/images/projects/artikel_islam_preview.gif",
  },
  {
    title: "Catch a Pokemon",
    employment: "Personal",
    image: "/assets/images/projects/catch_a_pokemon.gif",
    duration: {
      from: "Mar 2021",
      to: "Apr 2021",
    },
    techstacks: ["typescript", "apollo-client", "react-hooks", "emotion"],
    descriptions: [
      "Choose a pokemon, capturing, renaming and releasing a pokemon.",
      "Read info about it and what’s skill it has. Built with mobile-first design..",
    ],
    githubLink: "https://github.com/fadilnatakusumah/catch-a-pokemon",
  },
  {
    title: "React BitQuran",
    githubLink: "https://github.com/fadilnatakusumah/react-bitquran",
    appLink: "https://fadilnatakusumah.github.io/react-bitquran/",
    descriptions: [
      "Simple lite Quran web that can use to read and copy Ayahs of Quran.",
    ],
    techstacks: ["react", "emotion", "font-awesome"],
    employment: "Personal",
    image: "/assets/images/projects/bitQuran.gif",
    duration: {
      from: "Dec 2019",
      to: "August 2020",
    },
  },
  {
    title: "API Artikel Islam",
    githubLink: "https://github.com/fadilnatakusumah/artikel-islam-api",
    descriptions: [
      "Web scrapper for getting articles data from Islamic websites.",
    ],
    techstacks: ["express", "cheerio", "netlify"],
    image: "https://www.metatrader4.com/c/2/0/metatrader_4_api_ru_en__1.jpg",
    employment: "Personal",
    duration: {
      from: "Aug 2020",
      to: "Current",
    },
  },
];
