import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

// Helper to find an image by ID
const findImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    // Return a fallback or throw an error
    // For this example, we'll return a default placeholder to avoid crashing
    return {
      id: "fallback",
      description: "Fallback image",
      imageUrl: "https://picsum.photos/seed/fallback/600/400",
      imageHint: "abstract placeholder"
    };
  }
  return image;
};

const requirefindImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    // Return a fallback or throw an error
    // For this example, we'll return a default placeholder to avoid crashing
    return {
      id: "fallback",
      description: "Fallback image",
      imageUrl: id,
      imageHint: "abstract placeholder"
    };
  }
  return image;
};

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  thumbnail: ImagePlaceholder;
  gallery: ImagePlaceholder[];
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Paybacck',
    description: 'Paybacck is a decision-support platform that helps companies and investors zero in on high-potential opportunities. It streamlines evaluation so users can compare ideas, spot strengths and weaknesses, and back options with real growth promise. The system makes it easier to shape winning products by grounding choices in data, not guesswork. It also helps build and track a full investment portfolio, keeping everything organized and strategically aligned. Whether aiming for market dominance or stronger returns, the platform gives users a clearer path to smart, confident decisions.',
    technologies: ['React', 'Bootstrap', 'Paypal'],
    thumbnail: findImage('project-1-thumb'),
    gallery: [
      requirefindImage(require('../assets/project/paybacck/paybacck1.png')),
      requirefindImage(require('../assets/project/paybacck/paybacck2.png')),
      requirefindImage(require('../assets/project/paybacck/paybacck3.png'))
      // findImage('project-1-gallery-1'),
      // findImage('project-1-gallery-2'),
    ],
    liveUrl: 'https://paybacck.com/',
    // repoUrl: '#',
  },
  {
    id: 'proj-2',
    title: 'myEventpromo',
    description: "myEventpromo is a platform built to help events gain visibility and boost sales through a powerful promoter network. Event organizers can list their events, track performance, and reach wider audiences without extra complexity. Promoters get a streamlined way to earn commissions by sharing events they care about, backed by clear metrics and reliable payouts. The system focuses on ease of use, helping both sides collaborate without friction. It’s designed to widen reach, strengthen marketing efforts, and make event promotion more efficient and rewarding.",
    technologies: ['React Native', 'Stripe', 'Native Base'],
    thumbnail: findImage('project-2-thumb'),
    gallery: [
      requirefindImage(require('../assets/project/event/event1.png')),
      requirefindImage(require('../assets/project/event/event2.png')),
      requirefindImage(require('../assets/project/event/event3.png'))

    ],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.myeventpromo&pcampaignid=web_share',
  },
  {
    id: 'proj-3',
    title: 'Safariies',
    description: "Safariis is a marketplace portal aiming to facilitate products and services buying and logistics support for members of diasporas across countries. The site is organized into 5 distinct sections called market streams to define, develop, and publish catalogs across Products, Auctions, Services, Funding and Shipping, in aim to facilitate transactional value-added services and value streams for members of diasporas.",
    technologies: ['React Native', 'Background Processes', 'Firebase Notifications', "Permissions"],
    thumbnail: findImage('project-3-thumb'),
    gallery: [
      requirefindImage(require('../assets/project/safariies/safariis2.png')),
      requirefindImage(require('../assets/project/safariies/safariis.png')),
      requirefindImage(require('../assets/project/safariies/safariis1.png')),
    ],
    liveUrl: "https://play.google.com/store/apps/details?id=com.safariis.app&hl=en"
  },
  {
    id: 'proj-4',
    title: 'Instablogs',
    description: 'InstaBlogs is a global blogging platform built for quick publishing and easy discovery. It lets users share posts with a clean, modern interface that keeps the focus on content. The admin panel gives full control over blog management—approving posts, editing entries, and handling user activity without hassle. Its structure is lightweight and fast, making browsing smooth on any device. The platform supports creators who want a simple way to reach a wide audience. Overall, it’s designed to be straightforward, efficient, and ready for anyone who wants to write and share.',
    technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase', "Vercel"],
    thumbnail: findImage('project-4-thumb'),
    gallery: [
      requirefindImage(require('../assets/project/instablog/insta1.png')),
      requirefindImage(require('../assets/project/instablog/insta2.png')),
      requirefindImage(require('../assets/project/instablog/insta3.png'))
    ],
    liveUrl: 'https://instablogs-seven.vercel.app/',
  },
  //   {
  //   id: 'proj-5',
  //   title: 'AI Story Generator',
  //   description: 'A web app that uses generative AI to create short stories based on user prompts. It features a clean, minimalist interface and real-time text streaming.',
  //   technologies: ['Next.js', 'Genkit', 'Firebase', 'Tailwind CSS'],
  //   thumbnail: findImage('project-5-thumb'),
  //   gallery: [
  //     findImage('project-5-gallery-1'),
  //   ],
  //   liveUrl: '#',
  //   repoUrl: '#',
  // },
  // {
  //   id: 'proj-6',
  //   title: 'Portfolio Website',
  //   description: 'A personal portfolio website to showcase my work, skills, and experience. Designed to be fully responsive and performant, with a focus on clean aesthetics.',
  //   technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
  //   thumbnail: findImage('project-6-thumb'),
  //   gallery: [
  //     findImage('project-6-gallery-1'),
  //   ],
  //   liveUrl: '#',
  // }
];

export const aboutMe = {
  name: "Dhiraj Kumar",
  title: "Software Developer",
  bio: "I'm a passionate developer with a knack for creating beautiful, functional, and user-centered digital experiences. With experience in computer science, I love bringing ideas to life, from the initial concept to the final polished product. When I'm not coding or designing, you can find me exploring new hiking trails or trying out new coffee shops.",
  image: findImage('about-me-photo')
}
