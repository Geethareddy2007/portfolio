import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "K. Geetha reddy",
  title: "Hi all, I'm Geetha",
  description:
"I am currently pursuing a B.Tech with a strong foundation in programming and technology. I have developed practical skills in Java, Python, HTML, and CSS, along with a basic understanding of cybersecurity concepts. Through academic and mini projects, I have gained hands-on experience in applying my technical knowledge, which has strengthened my problem-solving, logical thinking, and debugging abilities. I am highly motivated to learn new technologies, adapt to emerging trends, and continuously improve my technical and practical skills. I aim to build a successful career in the technology field through dedication, consistency, and real-world application of knowledge.",
};

export const openSource = {
  githubUserName: "geethareddy2007",
};

export const contact = {
  image: "/img/icons/common/im.jpeg", 
};

export const socialLinks: SocialLinksType = {
  url: "https://www.linkedin.com/in/geethareddy2007", // Your profile page
  email: "mailto:geethareddy13@gmail.com",
  linkedin: "https://www.linkedin.com/in/geethareddy2007/",
  github: "https://github.com/geethareddy2007",
  instagram: "https://www.instagram.com/geetha_reddy_____",
    resumeLink: "file:///C:/Users/HP/Downloads/geetha-reddy_20260127_1847%20(1).pdf",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What i'm intrested in",
  subTitle: "I LOVE CODING, EXPLORING CYBERSECURITY, AND TURNING IDEAS INTO WORKING PROJECTS.",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/higuys.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building programs and projects using Java & Python"),
        emoji("⚡ Creating responsive websites using HTML & CSS"),
        emoji("⚡ Exploring basic cybersecurity concepts and secure coding practices"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "java",
          iconifyTag: "vscode-icons:file-type-java",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "CSS",
iconifyTag: "vscode-icons:file-type-css" ,
        },
        {
          skillName: "HTML",
iconifyTag: "vscode-icons:file-type-html",

        },
        {
          skillName: "C",
  iconifyTag: "vscode-icons:file-type-c",

        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Git",
iconifyTag: "vscode-icons:file-type-git"

        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "80", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "KKR AND KSR INSTITUTE OF TECHNOLOGY AND SCIENCE",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "2024-2028",
    desc: "",
    grade: "8.1(currently)",
    descBullets: [], // Array of Strings
  },{
    schoolName: "LOYOLA PUBLIC SCHOOL",
    subHeader: "Council For The Indian School Certificate Examinations(ICSE)",
    duration: "2021-2022",
    desc: "",
    grade: "8.5",
    descBullets: [], // Array of Strings
  },
];
export const projects: ProjectType[] = [
  {
    name: "novapass(IOT)",
    desc: "NovaPass is a smart academic wearable developed by Team TechNova that uses a light sensor-assisted power system to display timetables, announcements, and reminders on an OLED screen—offering an affordable, energy-efficient alternative to smartphones and smartwatches for campus communication.",
    github: "https://github.com/Geethareddy2007/nova-pass",
    link: "https://nova-pass-iota.vercel.app/",
  },
];



// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Geetha Reddy",
  description: greetings.description,
  author: "Geetha",
 image: "https://media.licdn.com/dms/image/v2/D4D03AQG0BVt37CclBg/profile-displayphoto-shrink_400_400/B4DZTqEwJkHkAg-/0/1739093903285?e=1769040000&v=beta&t=U9O00TLarqHXeUSEF8ivS9vHRUauo0F7CfUNctkZHmw",
  url: "https://www.linkedin.com/in/geethareddy2007",
  keywords: [
    "Geetha",
    "Geetha reddy",
    "Portfolio",
    "Geetha Portfolio ",
    "Geetha reddy Portfolio",
  ],
};
