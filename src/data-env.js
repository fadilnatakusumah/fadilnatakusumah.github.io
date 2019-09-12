// SNAPSHOTS OF APPS
import SSBukuCeritamu from './assets/gifs/snapshot_bukuceritamu.gif';
import SSRandomCatsPicts from './assets/gifs/snapshot_randomcatpicts.gif';
import SSJobFinder from './assets/gifs/snapshot_jobfinder.gif';
import SSYourThoughts from './assets/gifs/snapshot_yourthoughts.gif';

const dataProjects = [
    // {
    //     projectName: 'Random Cat Pictures',
    //     description: 'Generate random cat pictures that got from API request',
    //     technologies: [
    //         'React',
    //         'Tachyons CSS'
    //     ],
    //     linkGithub: 'https://github.com/fadilnatakusumah/react-randomcat-api',
    //     linkApp: 'https://fadilnatakusumah.github.io/react-randomcat-api/',
    //     imageSrc: SSRandomCatsPicts,
    // },
    {
        projectName: 'Your Thoughts',
        description: 'Social Media for sharing your thoughts, and let other people comment about that. (still not finish though)',
        technologies: [
            'React',
            'Redux',
            'React Router',
            'Firebase Functions',
            'Express',
        ],
        linkGithub: 'https://github.com/fadilnatakusumah/your-thoughts-client',
        linkApp: 'https://your-thoughts-project.firebaseapp.com',
        imageSrc: SSYourThoughts,
    },
    {
        projectName: 'Job Finder',
        description: 'An App that provides jobs information at your area, and you can save the job first or directly apply to it',
        technologies: [
            'React Native',
            'React Native Navigation',
            'Redux',
            'Redux-Thunk',
            'Redux-Persist',
            'Firebase',
        ],
        linkGithub: 'https://github.com/fadilnatakusumah/react-native-job-finder',
        linkApp: 'https://expo.io/@fadilnatakusumah/jobFinder',
        imageSrc: SSJobFinder,
    },
    {
        projectName: 'BukuCeritamu',
        description: 'Basicly a web based app that allows you to make a storybook with supportive pictures. Plus you can export it to PDF. (BukuCeritamu v2 still on progress)',
        technologies: [
            'Laravel (PHP)',
            'FabricJS',
            'JQuery',
            'MySQL'
        ],
        linkGithub: 'https://github.com/fadilnatakusumah/bukuceritamu',
        linkApp: 'https://fadilnatakusumah.000webhostapp.com/',
        imageSrc: SSBukuCeritamu,
    },
]

export default dataProjects;