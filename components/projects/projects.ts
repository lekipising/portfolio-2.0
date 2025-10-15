import { Project } from ".";

import NextIcon from "../../assets/next.svg";
import StyledcIcon from "../../assets/styledc.svg";
import TailwindIcon from "../../assets/tailwind.svg";
import ReduxIcon from "../../assets/redux.svg";
import NestJsIcon from "../../assets/nest.svg";

export const projects: Project[] = [
  {
    title: "Navu360",
    description:
      "Built for businesses. Create, manage, and scale custom training programs effortlessly. Navu360 empowers companies to simplify their training operations and achieve quantifiable development",
    features: [
      "Single Sign On with Auth0",
      "Checkout and Subscription by PayStack",
      "Custom Domain with Vercel and Cloudflare",
      "Email Marketing with SendGrid",
      "Fully featured B2B SaaS platform",
      "SEO Optimized",
    ],
    image:
      "https://res.cloudinary.com/dpnbddror/image/upload/v1699979124/liplan/Screenshot_from_2023-11-14_19-25-16_znvvkv.png",
    link: "https://navu360.com",
    technologies: [
      {
        svg: NextIcon,
        text: "Next JS",
      },
      {
        svg: TailwindIcon,
        text: "Tailwind CSS",
      },
      {
        svg: ReduxIcon,
        text: "Redux Toolkit",
      },
    ],
    status: "Completed",
  },
  {
    title: "Karent App",
    description:
      "A modern social media web application designed for university/college students to share ideas, stay connected and foster communities",
    features: [
      "Oauth with Google",
      "Push Notifications with Firebase",
      "Customizable User Profiles and Interests",
      "Topic-based feed",
      "Cloudinary CDN for storage",
    ],
    image:
      "https://res.cloudinary.com/dpnbddror/image/upload/v1699979294/liplan/Screenshot_from_2023-11-14_19-28-02_vkrzfv.png",
    link: "https://karent.app/welcome",
    technologies: [
      {
        svg: NextIcon,
        text: "Next JS",
      },
      {
        svg: StyledcIcon,
        text: "Styled Components",
      },
      {
        svg: NestJsIcon,
        text: "Nest JS",
      },
    ],
    status: "Inactive",
  },
  {
    title: "CourierPal App",
    description:
      "An ordering web app that connects shoppers and travelers who assist each other in getting items across the world",
    features: [
      "Secure User Authentication and Authorization",
      "Real-time Order Tracking",
      "Error Logging and Monitoring with Sentry",
      "Integration with RESTful API",
    ],
    image:
      "https://res.cloudinary.com/dpnbddror/image/upload/v1683393573/liplan/paint_water_liquid_85058_1280x800_r9fa2d.jpg",
    link: "https://courierpal.vercel.app/",
    technologies: [
      {
        svg: NextIcon,
        text: "Next JS",
      },
      {
        svg: StyledcIcon,
        text: "Styled Components",
      },
      {
        svg: NestJsIcon,
        text: "Nest JS",
      },
    ],
    status: "Completed",
  },
  {
    title: "Maskani App",
    description:
      "Augmented reality web platform that recreates the life-like experience of walking inside a real-sized house in any location",
    features: [
      "Responsive Design for Mobile and Desktop",
      "Accessibility Compliance for ADA Standards",
      "Minimalistic Layout to Reduce Cognitive Load",
    ],
    image:
      "https://res.cloudinary.com/dpnbddror/image/upload/v1685812969/bg_main_df77us.jpg",
    link: "https://maskani-app.vercel.app",
    technologies: [
      {
        svg: NextIcon,
        text: "Next JS",
      },
      {
        svg: TailwindIcon,
        text: "Tailwind CSS",
      },
    ],
    status: "Completed",
  },
];
