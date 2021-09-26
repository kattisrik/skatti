import one from "../assets/svg/projects/vaccine.svg";
import two from "../assets/svg/projects/notes.svg";
import three from "../assets/svg/projects/music.svg";
import four from "../assets/svg/projects/wedding.svg";

export const projectsData = [
  {
    id: 1,
    projectName: "Covid-19 Vaccine Availability",
    projectDesc:
      "A webpage for notifying the users via email when the covid-19 vaccines are available in their region.",
    tags: ["React", "Node JS", "Mongo DB"],
    code: "https://github.com/kattisrik/vaccine-availablity",
    demo: "https://getvaccinated.netlify.app",
    image: one,
  },
  {
    id: 2,
    projectName: "AWSome Note Taking App",
    projectDesc:
      "A note taking app which was built using many AWS technologies.",
    tags: ["React", "AWS", "Serverless"],
    code: "https://github.com/kattisrik/serverless-stack-api",
    demo: "https://scratch-the-notes.netlify.app",
    image: two,
  },
  {
    id: 3,
    projectName: "Janaka Raaga Identification In Carnatic Music",
    projectDesc:
      "Designed a model to identify the Raaga off the given audio clip, among the 72 Janaka Raagas in Carnatic Music.",
    tags: ["Django", "HTML", "CSS"],
    code: "https://github.com/kattisrik",
    demo: "https://github.com/kattisrik",
    image: three,
  },
  {
    id: 4,
    projectName: "Online wedding Planner",
    projectDesc:
      "Currently working on this project, as the name suggests it's an online wedding platform.",
    tags: ["Next JS", "SAAS"],
    code: "https://github.com/kattisrik/project-x",
    demo: "https://github.com/kattisrik/project-x",
    image: four,
  },
];
