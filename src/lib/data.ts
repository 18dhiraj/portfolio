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
  androidlink?: string
  ioslink?: string
  resp?: string[]

}

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Paybacck',
    description: 'Web platform for digital project evaluation and ROI tracking.',
    technologies: ['React', 'Bootstrap', 'Paypal'],
    thumbnail: findImage('project-1-thumb'),
    gallery: [
      requirefindImage(require('../assets/project/paybacck/paybacck1.png')),
      requirefindImage(require('../assets/project/paybacck/paybacck2.png')),
      requirefindImage(require('../assets/project/paybacck/paybacck3.png'))
    ],
    resp: [
      "Developed core React UI and business workflows",
      "Integrated PayPal payments and subscription access",
      "Implemented secure data encryption and role-based access"
    ],
    liveUrl: 'https://paybacck.com/',
    // repoUrl: '#',
  },
  {
    id: 'proj-2',
    title: 'myEventpromo',
    description: "Production event planning and ticketing app with payments, refunds, and QR-based entry.",
    technologies: ['React Native', 'Stripe', 'Native Base'],
    thumbnail: findImage('project-2-thumb'),
    gallery: [
      requirefindImage(require('../assets/project/event/event1.png')),
      requirefindImage(require('../assets/project/event/event2.png')),
      requirefindImage(require('../assets/project/event/event3.png'))

    ],
    resp: [
      "Built and shipped a production React Native app end-to-end",
      "Integrated Stripe payments, refunds, and secure transactions",
      "Implemented QR-based ticket check-in and real-time validation"
    ],
    androidlink: 'https://play.google.com/store/apps/details?id=com.myeventpromo&pcampaignid=web_share',
    ioslink: 'https://apps.apple.com/us/app/myeventpromo/id6504923833',

  },
  {
    id: 'proj-3',
    title: 'Safariies',
    description: "Safariies tracks the user's location, even when the app is running in the background, to provide real-time location updates and enhance user experience.",
    technologies: ['React Native', 'Background Processes', 'Firebase Notifications', "Permissions"],
    thumbnail: findImage('project-3-thumb'),
    gallery: [
      requirefindImage(require('../assets/project/safariies/safariis2.png')),
      requirefindImage(require('../assets/project/safariies/safariis.png')),
      requirefindImage(require('../assets/project/safariies/safariis1.png')),
    ],
    resp: [
      "Built and shipped a production React Native app end-to-end",
      "Location Getter (GPS Device)",
    ],
    androidlink: "https://play.google.com/store/apps/details?id=com.safariis.app&hl=en&pli=1"
  },
  // {
  //   id: 'proj-4',
  //   title: 'Instablogs',
  //   description: 'A Blogging website where you can find different types of Blogs.',
  //   technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase', "Vercel"],
  //   thumbnail: findImage('project-4-thumb'),
  //   gallery: [
  //     requirefindImage(require('../assets/project/instablog/insta1.png')),
  //     requirefindImage(require('../assets/project/instablog/insta2.png')),
  //     requirefindImage(require('../assets/project/instablog/insta3.png'))
  //   ],
  //   resp: [
  //     "Built from scratch",
  //     "With Admin panel"
  //   ],
  //   liveUrl: 'https://instablogs-seven.vercel.app/',
  // },
  {
    id: 'proj-4',
    title: 'Zing Meal',
    description: 'Meal planning and food discovery platform with user-facing app and admin dashboard.',
    technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase', "Vercel"],
    thumbnail: findImage('project-4-thumb'),
    gallery: [
      requirefindImage(require('../assets/project/zingmeal/zingmeal.png')),
      requirefindImage(require('../assets/project/zingmeal/zingmeal1.png')),
      requirefindImage(require('../assets/project/zingmeal/zingmeal2.png')),
      requirefindImage(require('../assets/project/zingmeal/zingmeal3.png')),
      requirefindImage(require('../assets/project/zingmeal/zingmeal4.png'))
    ],
    resp: [
      "Built a web application for browsing meals, generating meal plans, and managing user preferences",
      "Developed an admin panel to manage meals, categories, pricing, dietary tags, and content",
      "Implemented authentication, data management, and scalable UI workflows using modern frontend practices"
    ],
    liveUrl: 'https://zingmeal.com/',
  },
    {
    id: 'proj-5',
    title: 'Nida & Danish',
    description: 'Large-scale e-commerce app with 30,000+ products across 200+ categories.',
    technologies: ['React Native', 'CS-cart', 'Cybersource'],
    thumbnail: findImage('project-5-thumb'),
    gallery: [
      findImage('project-5-gallery-1'),
    ],
    resp: [
      'Contributed to production React Native app used by thousands of users',
      "Cybersource payment gateway",
      "Worked on performance optimization and UI consistency"

    ],
    androidlink: 'https://play.google.com/store/apps/details?id=com.nidadanish&hl=en',
    ioslink: 'https://apps.apple.com/us/app/myeventpromo/id6504923833',

  },
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
