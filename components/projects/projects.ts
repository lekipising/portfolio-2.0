import { Project } from ".";

import ReactIcon from "../../assets/react.svg";
import NextIcon from "../../assets/next.svg";
import StyledcIcon from "../../assets/styledc.svg";
import TailwindIcon from "../../assets/tailwind.svg";

export const projects: Project[] = [
    {
        title: "Karent App",
        description: "A modern social media web application designed for university/college students to share ideas and stay connected.",
        image: "https://res.cloudinary.com/dpnbddror/image/upload/v1646494823/1646494823423_bx1rjr.webp",
        link: "https://karent.vercel.app/welcome",
        technologies: [
            {
                svg: NextIcon,
                text: "Next JS"
            },
            {
                svg: StyledcIcon,
                text: "Styled Components"
            },
        ]
    },
    {
        title: "CourierPal App",
        description: "An ordering web app that connects shoppers and travelers who assist each other in getting items across the world",
        image: "https://res.cloudinary.com/dpnbddror/image/upload/v1646494691/1646494690335_rdm1i1.webp",
        link: "https://courierpal.vercel.app/",
        technologies: [
            {
                svg: NextIcon,
                text: "Next JS"
            },
            {
                svg: StyledcIcon,
                text: "Styled Components"
            },
        ]
    },
    {
        title: "Zero Users App",
        description: "A simple web app demontrating the power of motion and animation",
        image: "https://res.cloudinary.com/dpnbddror/image/upload/v1646466474/1646466472624_gwhome.webp",
        link: "https://zerousers.vercel.app/",
        technologies: [
            {
                svg: ReactIcon,
                text: "React"
            },
            {
                svg: StyledcIcon,
                text: "Styled Components"
            },
        ]
    },
    {
        title: "My Portfolio",
        description: "Showcase of my projects and skills",
        image: "https://res.cloudinary.com/dpnbddror/image/upload/v1646465961/1646465958744_avi7tt.webp",
        link: "https://lekipising.tech/",
        technologies: [
            {
                svg: NextIcon,
                text: "Next JS"
            },
            {
                svg: TailwindIcon,
                text: "Tailwind CSS"
            },
        ]
    },
]