import { Project } from ".";

import NextIcon from "../../assets/next.svg";
import StyledcIcon from "../../assets/styledc.svg";
import TailwindIcon from "../../assets/tailwind.svg";
import ReduxIcon from "../../assets/redux.svg";
import NestJsIcon from "../../assets/nest.svg";

export const projects: Project[] = [{
    title: "Navu360",
    description: "Built for businesses. Create, manage, and scale custom training programs effortlessly",
    image: "https://res.cloudinary.com/dpnbddror/image/upload/v1699979124/liplan/Screenshot_from_2023-11-14_19-25-16_znvvkv.png",
    link: "https://navu360.com",
    technologies: [
        {
            svg: NextIcon,
            text: "Next JS"
        },
        {
            svg: TailwindIcon,
            text: "Tailwind CSS"
        },
        {
            svg: ReduxIcon,
            text: "Redux Toolkit"
        },
    ],
    status: "Active"
},
{
    title: "Karent App",
    description: "A modern social media web application designed for university/college students to share ideas and stay connected.",
    image: "https://res.cloudinary.com/dpnbddror/image/upload/v1699979294/liplan/Screenshot_from_2023-11-14_19-28-02_vkrzfv.png",
    link: "https://karent.app/welcome",
    technologies: [
        {
            svg: NextIcon,
            text: "Next JS"
        },
        {
            svg: StyledcIcon,
            text: "Styled Components"
        },
        {
            svg: NestJsIcon,
            text: "Nest JS"
        },
    ],
    status: "On Hold"
},
{
    title: "CourierPal App",
    description: "An ordering web app that connects shoppers and travelers who assist each other in getting items across the world",
    image: "https://res.cloudinary.com/dpnbddror/image/upload/v1683393573/liplan/paint_water_liquid_85058_1280x800_r9fa2d.jpg",
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
        {
            svg: NestJsIcon,
            text: "Nest JS"
        },
    ],
    status: "Completed"
},
{
    title: "Maskani App",
    description: "Augmented reality web platform that recreates the life-like experience of walking inside a real-sized house in any location",
    image: "https://res.cloudinary.com/dpnbddror/image/upload/v1685812969/bg_main_df77us.jpg",
    link: "https://maskani-app.vercel.app",
    technologies: [
        {
            svg: NextIcon,
            text: "Next JS"
        },
        {
            svg: TailwindIcon,
            text: "Tailwind CSS"
        },
    ],
    status: "Completed"
}
]
