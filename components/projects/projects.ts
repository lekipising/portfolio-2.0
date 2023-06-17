import { Project } from ".";

import NextIcon from "../../assets/next.svg";
import StyledcIcon from "../../assets/styledc.svg";
import TailwindIcon from "../../assets/tailwind.svg";

export const projects: Project[] = [{
    title: "Navu360",
    description: "Onboarding platform for new talents. The ultimate onboarding platform",
    image: "https://res.cloudinary.com/dpnbddror/image/upload/v1682427741/navu/Group_1_1_s3dduo.png",
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
    ]
},
{
    title: "Karent App",
    description: "A modern social media web application designed for university/college students to share ideas and stay connected.",
    image: "https://res.cloudinary.com/dpnbddror/image/upload/v1685813549/Screenshot_from_2023-06-03_19-30-42_vswmuk.png",
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
    ]
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
    ]
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
    ]
}
]
