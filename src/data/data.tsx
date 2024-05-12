import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage8 from '../images/portfolio/portfolio-datapane.png';
import porfolioImage3 from '../images/portfolio/portfolio-dealty.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-ecommerce.png';
import porfolioImage4 from '../images/portfolio/portfolio-evolve.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-femometer.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-masterybrandambassador.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-realestate.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-schoolmanagement.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Michael Ann',
  description: "Michael Ann's Portfolio",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'strengths',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Michael Ann.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Experienced full-stack developer with <strong>5+ years</strong> of experiences in developing both front-end and back-end development.
        <br/>
        Proven track record in improving <strong>load times by 25%</strong>, increasing <strong>user engagement by 15%</strong>, boosting <strong>sales by 30%</strong>, 
        accelerating <strong>project completion speed by 10%</strong> and improving <strong>performance by 30%</strong>. 
        <br/>
        Collaborative team player with expertise in managing the software development life cycle and delivering projects on time. 
        <br/>
        Experienced in implementing and integrating Generative AI, Data Analysis and Blockchain.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ``,
  aboutItems: [
    {label: 'Location', text: 'Kingston, Ontario, Canada', Icon: MapIcon},
    {label: 'Age', text: '26', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Canadian / Japanese', Icon: FlagIcon},
    {label: 'Interests', text: 'Singing, Table-tennis', Icon: SparklesIcon},
    {label: 'Study', text: 'Queen\'s University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Equilibre Finance', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Front-end',
    skills: [
      {
        name: 'React',
        level: 10,
      },
      {
        name: 'Next.js',
        level: 10,
      },
      {
        name: 'Tailwind CSS',
        level: 10,
      },
      {
        name: 'JavaScript',
        level: 10,
      },
      {
        name: 'TypeScipt',
        level: 10,
      },
      {
        name: 'HTML',
        level: 10,
      },
      {
        name: 'CSS',
        level: 10,
      },
    ],
  },
  {
    name: 'Back-end',
    skills: [
      {
        name: 'Node.js',
        level: 10,
      },
      {
        name: 'Express.js',
        level: 10,
      },
      {
        name: 'Django',
        level: 10,
      },
      {
        name: 'Laravel',
        level: 10,
      },
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'PHP',
        level: 10,
      },
      {
        name: 'Solidity',
        level: 10,
      },
    ],
  },
  {
    name: 'DevOps',
    skills: [
      {
        name: 'Git',
        level: 10,
      },
      {
        name: 'Zira',
        level: 10,
      },
      {
        name: 'Azura',
        level: 10,
      },
      {
        name: 'Docker',
        level: 10,
      },
      {
        name: 'AWS',
        level: 10,
      },
    ],
  },
  {
    name: 'Database',
    skills: [
      {
        name: 'SQL',
        level: 10,
      },
      {
        name: 'PostgreSQL/MySQL',
        level: 10,
      },
      {
        name: 'MongoDB',
        level: 10,
      },
      {
        name: 'Firebase',
        level: 10,
      },
    ],
  },
  {
    name: 'Other',
    skills: [
      {
        name: 'GraphQL',
        level: 10,
      },
      {
        name: 'Web.js',
        level: 10,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'School Management',
    description: 'School Management System using Python & Django',
    url: 'https://github.com/mi-ann0613/SchoolManagement',
    image: porfolioImage1,
  },
  {
    title: 'Ecommerce',
    description: 'Ecommerce Project using Python & Django',
    url: 'https://github.com/mi-ann0613/Ecommerce',
    image: porfolioImage2,
  },
  {
    title: 'Real Estate',
    description: 'Real Estate Management System based on Laravel framework.',
    url: 'https://github.com/mi-ann0613/Real-estate',
    image: porfolioImage3,
  },
  {
    title: 'Dealty',
    description: 'Developed by React framework',
    url: 'https://yourdealty.com',
    image: porfolioImage4,
  },
  {
    title: 'Evolve',
    description: 'I optimized the search engine using Algolia Search Engine and updated all pages for the mobile responsive.',
    url: 'https://evolve.com',
    image: porfolioImage5,
  },
  {
    title: 'Femometer',
    description: 'I updated the old frontend page with XD and developed the order and shipping feature with Shipstation integration.',
    url: 'https://www.femometer.com',
    image: porfolioImage6,
  },
  {
    title: 'Masterybrandambassador',
    description: 'Built the graphic according data analysis using Python',
    url: 'https://masterybrandambassador.com',
    image: porfolioImage7,
  },
  {
    title: 'Datapane',
    description: 'Built and shared data reports in 100% Python',
    url: 'https://github.com/mi-ann0613/datapane',
    image: porfolioImage8,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Sep 2015 - Mar 2019',
    location: 'Bachelor\'s Degree',
    title: 'Queen\'s University',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Mar 2023 - Apr 2024',
    location: 'Blockchain Full Stack Developer',
    title: 'Equilibre Finance',
    content: (
      <ul>
        <li>- Participated in designing the decentralized exchange model based on AMM model and ve(3,3) tokenomics from Velodrom</li>
        <li>- Developed and deployed a user-friendly dApp using Next.js, incorporating advanced modules to streamline the entire process</li>
        <li>- Implemented a fast and efficient pipeline for production based on understanding of whole protocol, resulting in a 30% performance enhancement</li>
        <li>- Worked closely with cross-functional teams to integrate smart contracts, addressing complex challenges such as BigNumber management with high decimals</li>
      </ul>
    ),
  },
  {
    date: 'Aug 2021 - Feb 2023',
    location: 'Full Stack Developer',
    title: 'Thoughtbot',
    content: (
      <ul>
        <li>- Collaborating with cross-functional teams to develop web applications from concept to deployment</li>
        <li>- Developed user-friendly web interfaces from the Figma design leveraging front-end development frameworks such as React, Next.js and Tailwind CSS, increased user engagement by 15%</li>
        <li>- Built efficient MySQL database infrastructure utilizing back-end frameworks such as Django, contributing to a 10% acceleration in project completion</li>
        <li>- Implemented performance optimization strategies, resulting in a 25% reduction in page load times and enhancing overall user experience</li>
      </ul>
    ),
  },
  {
    date: 'Apr 2019 - Jul 2021',
    location: 'Full Stack Developer',
    title: 'Inorbital',
    content: (
      <ul>
        <li>- Developed and maintained full-stack web applications, utilizing a combination of front-end and back-end technologies such as HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB</li>
        <li>- Successfully resolved over 120 tickets pertaining to work items during the launch phase of the main platform, contributing to a 10% acceleration in project completion</li>
        <li>- Scripted efficient and maintainable code, optimizing database queries, and integrating third-party services, boosted sales by 10%</li>
        <li>- Collaborating with cross-functional teams to develop web applications from concept to deployment</li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Problem Solving',
      text: 'known for creativity in troubleshooting and resolving complex software issues, facilitating a 20% overall improvement in system performance',
      //image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Deadline-oriented',
      text: 'Throughout my career, I\'\ve proven my ability to consistently deliver high-quality code within tight deadlines, fostering trust amongst my team',
    },
    {
      name: 'Team Collaboration',
      text: 'Established effective communication and increased team cohesion, resulting in 20% faster project completion',
    },
    {
      name: 'Attention to detail',
      text: 'Can spot tiny errors in massive code database, prioritize accuracy in front-end web development',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'michaelann0613@gmail.com',
      href: 'mailto:michaelann0613@gmail.com',
    },
    {
      type: ContactType.Phone,
      text: '+1 4133499777',
    },
    {
      type: ContactType.Location,
      text: '198 Colborne Street, Kingston, Canada',
    },
    {
      type: ContactType.Github,
      text: 'mi-ann0613',
      href: 'https://github.com/mi-ann0613',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/mi-ann0613'},
];
