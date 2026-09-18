export const EXPERIENCES = [
  {
    title: "Software Engineer (Frontend)",
    employment: "Full-time",
    at: "Flip.id",
    about:
      "Flip helps people send money securely without any transaction fee. Individual users are able to use Flip to send money across 14 biggest banks in Indonesia with zero cost. Meanwhile, business users can send money swiftly, securely, and with lower cost to more than 100 banks across Indonesia.",
    link: "https://flip.id",
    logo: "/assets/images/companies/flip.png",
    current: true,
    duration: {
      from: "Jul 2021",
      to: "Feb 2025",
    },
    techstacks: ["react", "redux", "tailwind", "styled-components"],
    descriptions: [
      `Maintain and develop <a target="_blank" style="color: #5656d2; font-weight:bold;" href="https://flip.id/business">Flip for Business</a> (Flip.id’s B2B transfer service) web and provide the best user experience for B2B money transfer services.`,
    ],
  },
  {
    title: "Frontend Engineer",
    employment: "Full-time",
    at: "Codemi",
    about:
      "Codemi is a web based Learning Management System (LMS) that enable company to manage online training programs for employees and partners to improve their skills that could reduce cost, measurable and deploy rapidly.",
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
      "bootstrap",
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
    about:
      "Universitas Islam Indonesia (UII) is one of the leading private universities in Indonesia. Inspired by the spirit of nationalism and guided by perennial values, UII was founded one month before the proclamation of Indonesian independence in 1945. UII now has grown into a great place for learning. Located in the northern outskirt of Yogyakarta, the heart of Javanese culture, the main campus overlooks the stunning beauty of Merapi volcano, which is a perfect place to study.",
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
    about:
      'A software and design development company that resides in indonesia, a solid team who working passionately and professionally, an extension for other startup to help them build the digital product, part of our team is available for working together in co-location "a dynamic working partner who will put your success as priority, work with us and your startup will no longer be pie in the sky ! to make it even better we work on any budget"',
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

export const PROJECTS = [
  {
    title: "AI Wallpaper Gen",
    employment: "Personal",
    image: "/assets/images/projects/aiwallpapergen.png",
    duration: {
      from: "Nov 2024",
      to: "Feb 2025",
    },
    techstacks: [
      "tRPC",
      "typescript",
      "next.js",
      "react",
      "shadcn-ui",
      "prisma",
      "postgresql",
      "supabase",
      "amplify",
      "aws",
      "s3",
      "openAI",
    ],
    descriptions:
      "A web platform for AI-generated wallpapers using OpenAI APIs, supporting login, image sharing, and AWS S3 storage.",
    githubLink: "https://github.com/fadilnatakusumah/aiwallpapergen",
    appLink: "https://aiwallpapergen.com",
  },
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
    title: "Aksa Tech",
    employment: "Contract",
    image: "/assets/images/projects/aksatech.gif",
    duration: {
      from: "April 2025",
      to: "May 2025",
    },
    techstacks: ["typescript", "next.js", "tailwindcss", "react", "vercel"],
    descriptions: "A Drone Aviation company website that provide information about their services and products.",
    appLink: "https://aksatech.id",
  },
  {
    title: "PDF Generation",
    employment: "Contract",
    image: "/assets/images/projects/pdf-generation.gif",
    duration: {
      from: "April 2025",
      to: "April 2025",
    },
    techstacks: ["typescript", "next.js", "tailwindcss", "react", "vercel"],
    descriptions: "An app that allows you to generate a PDF from a URL.",
    appLink: "https://next-pdf-generation.vercel.app/",
    githubLink: "https://github.com/fadilnatakusumah/next-pdf-generation",
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

export const RESUME_LINK =
  "https://drive.google.com/file/d/193Q4TpjfMc6CVAeyyXyOdvartkv1Ffww/view?usp=sharing";
export const GITHUB_LINK = "https://github.com/fadilnatakusumah";

export const BLOG_POSTS: Record<
  string,
  { title: string; date: string; readTime: string; description: string; content: string }
> = {
  "building-accessible-web-applications": {
    title: "Building Accessible Web Applications",
    date: "2024-01-15",
    readTime: "8 min read",
    description:
      "Key principles and practical techniques for building accessible web applications, from semantic HTML to ARIA and keyboard navigation.",
    content: `
      <p>Web accessibility is not just a nice-to-have feature—it's a fundamental requirement for creating inclusive digital experiences. In this article, we'll explore the key principles and practical techniques for building accessible web applications.</p>
      
      <h2>Understanding Web Accessibility</h2>
      <p>Web accessibility means ensuring that websites and applications can be used by everyone, including people with disabilities. This includes users who rely on screen readers, keyboard navigation, or other assistive technologies.</p>
      
      <h2>Key Principles</h2>
      <p>The Web Content Accessibility Guidelines (WCAG) are built around four main principles:</p>
      <ul>
        <li><strong>Perceivable:</strong> Information must be presentable in ways users can perceive</li>
        <li><strong>Operable:</strong> Interface components must be operable by all users</li>
        <li><strong>Understandable:</strong> Information and UI operation must be understandable</li>
        <li><strong>Robust:</strong> Content must be robust enough for various assistive technologies</li>
      </ul>
      
      <h2>Practical Implementation</h2>
      <p>Here are some practical steps you can take to improve accessibility in your React applications:</p>
      
      <h3>Semantic HTML</h3>
      <p>Use semantic HTML elements that convey meaning and structure. Instead of using generic div elements for everything, use appropriate elements like header, nav, main, section, and footer.</p>
      
      <h3>ARIA Attributes</h3>
      <p>When semantic HTML isn't sufficient, use ARIA (Accessible Rich Internet Applications) attributes to provide additional context to assistive technologies.</p>
      
      <h3>Keyboard Navigation</h3>
      <p>Ensure that all interactive elements can be accessed and operated using only the keyboard. This includes proper focus management and visible focus indicators.</p>
      
      <h2>Conclusion</h2>
      <p>Building accessible web applications is an ongoing process that requires attention to detail and regular testing. By following these guidelines and making accessibility a priority from the start, we can create better experiences for all users.</p>
    `,
  },
};
