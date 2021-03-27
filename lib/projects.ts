export interface ProjectProps {
  title: string,
  repo: string,
  url?: string,
  description: string,
  stacks: string[],
  wip?: boolean,
  private: boolean,
  image: string,
  docs?: string,
}

export const WebProjects = [
  {
    title: "React BitQuran",
    repo: "https://github.com/fadilnatakusumah/react-bitquran",
    url: "https://fadilnatakusumah.github.io/react-bitquran/",
    description: "Simple lite Quran web that can use to read and copy Ayahs of Quran.",
    stacks: ["React", "Emotion", "Font-Awesome"],
    image: "/assets/images/project/bitQuran.gif",
    wip: false,
    private: false,
  },
  {
    title: "API Artikel Islam",
    docs: "https://github.com/fadilnatakusumah/artikel-islam-api",
    url: "",
    description: "Web scrapper for getting articles data from Islamic websites.",
    stacks: ["Express", "Cheerio", "Netlify"],
    image: "https://www.metatrader4.com/c/2/0/metatrader_4_api_ru_en__1.jpg",
    wip: false,
    private: true,
  },
  {
    title: "Firewatch Web Clone",
    repo: "https://github.com/fadilnatakusumah/firewatch-page",
    url: "https://fadilnatakusumah.github.io/firewatch-page/",
    description: "Clone of Firewatch landing page website with paralax effect.",
    stacks: [
      'HTML',
      'CSS',
      'Javascript',
      'GSAP Animation'
    ],
    image: "/assets/images/project/firewatch.gif",
    wip: false,
    private: false,
  },
  {
    title: "Real World App",
    repo: "https://github.com/fadilnatakusumah/realworldapp-vue-ts",
    url: "https://fadilnatakusumah.github.io/realworldapp-vue-ts/",
    description: "Learning Vue with Typescript based on RealWorldApp.",
    stacks: [
      'Typescript',
      'Vue',
      'Vue Class Component',
      'Vue Property Decorator',
      'Vuex Module Decorators',
      'Vuex',
    ],
    image: "/assets/images/project/realworldApp.gif",
    wip: false,
    private: false,
  },
  {
    title: "BukuCeritamu",
    repo: "https://github.com/fadilnatakusumah/bukuceritamu",
    url: "",
    description: "Web based app that allows you to draw or make a storybook with supportive pictures. Also you can export it to PDF.",
    stacks: [
      'Laravel (PHP)',
      'FabricJS',
      'JQuery',
      'MySQL'
    ],
    image: "/assets/images/project/snapshot_bukuceritamu.gif",
    wip: false,
    private: false,
  },
]


export const MobileProjects = [
  {
    title: "Artikel Islam",
    repo: "https://github.com/fadilnatakusumah/artikel-islam-app",
    url: "",
    description: 'App for reading Islamic articles from trusted websites like Konsultasisyariah.com, Muslim.or.id, Muslimah.or.id, and many more will be added. The app let you save articles for reading in offline mode.',
    stacks: [
      'Flutter'
    ],
    image: "/assets/images/project/artikel_islam_preview.gif",
    wip: true,
    private: false,
  },
  {
    title: "Ibadaty",
    repo: "https://github.com/fadilnatakusumah/bukuceritamu",
    url: "",
    description: 'App for learning about Islam. It contains about information to do the shalah, prayers, dzikrs, and many more.',
    stacks: [
      'Flutter'
    ],
    image: "/assets/images/project/preview_ibadaty.gif",
    wip: true,
    private: true,
  },
]