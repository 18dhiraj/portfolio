
import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

// Helper to find an image by ID
const findImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find((img) => img.id === id);

  if (!image) {
    return {
      id: 'fallback',
      description: 'Fallback image',
      imageUrl: 'https://picsum.photos/seed/fallback/600/400',
      imageHint: 'abstract placeholder',
    };
  }

  return image;
};

const requirefindImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find((img) => img.id === id);

  if (!image) {
    return {
      id: 'fallback',
      description: 'Fallback image',
      imageUrl: id,
      imageHint: 'abstract placeholder',
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
  androidlink?: string;
  ioslink?: string;
  resp?: string[];
  category: 'web' | 'mobile';
}

export const projects: Project[] = [
  // 1. Nida & Danish — Mobile
  {
    id: 'proj-5',
    title: 'Nida & Danish',
    description:
      'Online shopping app for Tanzania with 30,000+ products across 200+ categories and 300+ brands. 10K+ downloads on Google Play.',
    technologies: ['React Native', 'CS-cart', 'Cybersource'],
    thumbnail: findImage('project-5-thumb'),
    gallery: [
      requirefindImage(require('../assets/project/nida/nida1.png')),
      requirefindImage(require('../assets/project/nida/nida2.png')),
      requirefindImage(require('../assets/project/nida/nida3.png')),
      requirefindImage(require('../assets/project/nida/nida4.png')),
    ],
    resp: [
      'Contributed to production React Native app used by thousands of users (10K+ downloads on Google Play)',
      'Cybersource payment gateway with cash, mobile money and card payment options',
      'Worked on performance optimization and UI consistency across a 30,000+ product catalogue',
    ],
    androidlink:
      'https://play.google.com/store/apps/details?id=com.nidadanish&hl=en',
    category: 'mobile',
  },

  // 2. Paybacck — Web
  {
    id: 'proj-1',
    title: 'Paybacck',
    description: 'Web platform for digital project evaluation and ROI tracking.',
    technologies: ['React', 'Bootstrap', 'Paypal'],
    thumbnail: findImage('project-1-thumb'),
    gallery: [
      requirefindImage(require('../assets/project/paybacck/paybacck1.png')),
      requirefindImage(require('../assets/project/paybacck/paybacck2.png')),
      requirefindImage(require('../assets/project/paybacck/paybacck3.png')),
    ],
    resp: [
      'Developed core React UI and business workflows',
      'Integrated PayPal payments and subscription access',
      'Implemented secure data encryption and role-based access',
    ],
    liveUrl: 'https://paybacck.com/',
    category: 'web',
    // repoUrl: '#',
  },

  // 3. Proudly — Mobile
  {
    id: 'proj-7',
    title: 'Proudly',
    description:
      'Family app that helps parents and students track activities and accomplishments over the years, and turns them into a polished "brag sheet" for school applications.',
    technologies: ['React Native', 'Calendar Sync', 'Push Notifications'],
    thumbnail: findImage('project-7-thumb'),
    gallery: [
      requirefindImage(require('../assets/project/proudly/proudly1.png')),
      requirefindImage(require('../assets/project/proudly/proudly2.png')),
      requirefindImage(require('../assets/project/proudly/proudly3.png')),
    ],
    resp: [
      "Home dashboard with each child's activities, accomplishments and new activities found in connected calendars",
      'Timeline of every activity: skill level, years active and awards won',
      'Auto-built brag sheet with short descriptions that are easy to edit or rewrite',
    ],
    // androidlink: '',
    // ioslink: '',
    category: 'mobile',
  },

  // 4. Zing Meal — Web
  {
    id: 'proj-4',
    title: 'Zing Meal',
    description:
      'Meal planning and food discovery platform with user-facing app and admin dashboard.',
    technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase', 'Vercel'],
    thumbnail: findImage('project-4-thumb'),
    gallery: [
      requirefindImage(require('../assets/project/zingmeal/zingmeal.png')),
      requirefindImage(require('../assets/project/zingmeal/zingmeal1.png')),
      requirefindImage(require('../assets/project/zingmeal/zingmeal3.png')),
    ],
    resp: [
      'Built a web application for browsing meals, generating meal plans, and managing user preferences',
      'Developed an admin panel to manage meals, categories, pricing, dietary tags, and content',
      'Implemented authentication, data management, and scalable UI workflows using modern frontend practices',
    ],
    liveUrl: 'https://zingmeal.vercel.app',
    category: 'web',
  },

  // 5. IslandWatch — Mobile
  {
    id: 'proj-9',
    title: 'IslandWatch',
    description:
      'Driving and vehicle-tracking app for Bermuda that turns every trip into clear safety insights for riders and drivers.',
    technologies: [
      'React Native',
      'Google Maps',
      'Geofencing',
      'Push Notifications',
    ],
    thumbnail: findImage('project-9-thumb'),
    gallery: [
      requirefindImage(require('../assets/project/islandwatch/islandwatch1.png')),
      requirefindImage(require('../assets/project/islandwatch/islandwatch2.png')),
      requirefindImage(require('../assets/project/islandwatch/islandwatch3.png')),
    ],
    resp: [
      'Weekly overview: driving time, distance, incidents and a safety score',
      'Map of where speeding and harsh-driving incidents happened, filtered by parish',
      'Personal tips, trends over time and an optional island-wide ranking',
    ],
    // androidlink: '',
    // ioslink: '',
    category: 'mobile',
  },

  // 6. Safariies — Mobile
  {
    id: 'proj-3',
    title: 'Safariies',
    description:
      "Safariies tracks the user's location, even when the app is running in the background, to provide real-time location updates and enhance user experience.",
    technologies: [
      'React Native',
      'Background Processes',
      'Firebase Notifications',
      'Permissions',
    ],
    thumbnail: findImage('project-3-thumb'),
    gallery: [
      requirefindImage(require('../assets/project/safariies/safariis2.png')),
      requirefindImage(require('../assets/project/safariies/safariis3.png')),
      requirefindImage(require('../assets/project/safariies/safariis.png')),
      // requirefindImage(require('../assets/project/safariies/safariis1.png')),
    ],
    resp: [
      'Built and shipped a production React Native app end-to-end',
      'Location Getter (GPS Device)',
    ],
    androidlink:
      'https://play.google.com/store/apps/details?id=com.safariis.app&hl=en&pli=1',
    category: 'mobile',
  },

  // 7. SeekFirst — Mobile
  {
    id: 'proj-8',
    title: 'SeekFirst',
    description:
      'All-in-one workspace app that brings email, calendar, chat, tasks, contacts and notes together in one place, with built-in team surveys and assessments.',
    technologies: [
      'React Native',
      'Email & Calendar Integration',
      'Google Meet',
    ],
    thumbnail: findImage('project-8-thumb'),
    gallery: [
      requirefindImage(require('../assets/project/seekfirst/seekfirst1.png')),
      requirefindImage(require('../assets/project/seekfirst/seekfirst2.png')),
      requirefindImage(require('../assets/project/seekfirst/seekfirst3.png')),
    ],
    resp: [
      'One inbox with quick filters, plus anonymous team surveys and assessments delivered right inside email',
      'Calendar with recurring meetings, participants, reminders and video-call links',
      'Notes you can pin and filter by source, privacy and person',
    ],
    // androidlink: '',
    // ioslink: '',
    category: 'mobile',
  },

  // --------------------------------------------------
  // Commented-out projects — kept at the end
  // --------------------------------------------------

  // 8. myEventpromo — Mobile
  // {
  //   id: 'proj-2',
  //   title: 'myEventpromo',
  //   description: "Production event planning and ticketing app with payments, refunds, and QR-based entry.",
  //   technologies: ['React Native', 'Stripe', 'Native Base'],
  //   thumbnail: findImage('project-2-thumb'),
  //   gallery: [
  //     requirefindImage(require('../assets/project/event/event1.png')),
  //     requirefindImage(require('../assets/project/event/event2.png')),
  //     requirefindImage(require('../assets/project/event/event3.png'))
  //   ],
  //   resp: [
  //     "Built and shipped a production React Native app end-to-end",
  //     "Integrated Stripe payments, refunds, and secure transactions",
  //     "Implemented QR-based ticket check-in and real-time validation"
  //   ],
  //   androidlink: 'https://play.google.com/store/apps/details?id=com.myeventpromo&pcampaignid=web_share',
  //   ioslink: 'https://apps.apple.com/us/app/myeventpromo/id6504923833',
  //   category: 'mobile',
  // },

  // 9. Portfolio Website — Web
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
  name: 'Dhiraj Kumar',
  title: 'Mobile & Web App Developer',
  bio: "I'm a mobile and web app developer with 4+ years of experience, turning ideas into apps people actually enjoy using. I take projects from the first concept to a polished app that is live in the store, with real-world features like online payments, notifications and live location, and I care about the details that make users stay. When I'm not coding or designing, you can find me exploring new hiking trails or trying out new coffee shops.",
  image: findImage('about-me-photo'),
};
