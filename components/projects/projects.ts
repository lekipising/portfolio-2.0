import { Project } from ".";

import ReactIcon from "../../assets/react.svg";
import NextIcon from "../../assets/next.svg";
import StyledcIcon from "../../assets/styledc.svg";
import TailwindIcon from "../../assets/tailwind.svg";

export const projects: Project[] = [{
    title: "Navu360",
    description: "Onboarding platform for new talents. The ultimate onboarding platform",
    image: "https://res.cloudinary.com/dpnbddror/image/upload/v1682427741/navu/Group_1_1_s3dduo.png",
    link: "https://staging.navu360.com/",
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
    image: "https://res.cloudinary.com/dpnbddror/image/upload/v1683393622/liplan/abstraction_line_wavy_113046_1280x800_xugyej.jpg",
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
    title: "Zero App",
    description: "A simple web app demontrating the power of motion and animation",
    image: "https://res.cloudinary.com/dpnbddror/image/upload/v1683393521/liplan/cat_smile_funny_133926_1280x800_qppov6.jpg",
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
}
]