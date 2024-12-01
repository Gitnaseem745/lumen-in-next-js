import { insImgFour, insImgOne, insImgThree, insImgTwo } from "../public/inspire_imgs";
import { proImgEight, proImgFive, proImgFour, proImgOne, proImgSeven, proImgSix, proImgThree, proImgTwo } from "../public/project_imgs";
import { resImgOne, resImgThree, resImgTwo } from "../public/resource_imgs";

interface Section {
    title: string;
    description: string;
    address?: string;
    mail?: string;
    social?: string[];
}

interface Project {
    theme: string;
    name: string;
    img: string;
    tags: string;
}

interface Resource {
    img: string;
    tag: string;
    name: string;
}

interface Inspiration {
    img: string;
    tag: string;
    name: string;
}

export const section: Record<string, Section> = {
    home: {
        title: "We See the World Differently.",
        description: "Premier photography studio specializing in timeless b/w imagery. We capture the essence of moments, bringing out the beauty in simplicity and contrast. From portraiture to architecture, our work transforms ordinary scenes into extraordinary art.",
    },
    featured: {
        title: "Beauty of Photography",
        description: "Our Photography Skills Showcase",
    },
    resources: {
        title: "Photography Resources & Inspiration",
        description: "We regularly share photography tutorials, offer guidance to aspiring photographers, walk you through capturing stunning black-and-white images, and provide access to exclusive photography tools and techniques.",
    },
    inspiration: {
        title: "New Day - New Inspire",
        description: "Every day brings fresh inspiration. Explore a collection of daily moments, captured in stunning black-and-white photography, designed to ignite your creative vision.",
    },
    footer: {
        title: "Have an idea?",
        description: "Tell us about it",
        address: "901 N Sydney, Suite 198 America, NA 22789, USA",
        mail: "info@lumen.com",
        social: ["LinkedIn", "Twitter", "Behance", "Instagram", "Facebook", "Dribble", "Youtube", "Threads"],
    },
};

export const project: Project[] = [
    {
        theme: "Urban",
        name: "Cityscapes in Monochrome",
        img: `${proImgOne}`,
        tags: "Architecture, Street Photography, Contrast",
    },
    {
        theme: "Ethereal",
        name: "Minimalist Portrait Series",
        img: `${proImgTwo}`,
        tags: "Portraiture, Lighting, Composition",
    },
    {
        theme: "Nature",
        name: "Forests Through Shadows",
        img: `${proImgThree}`,
        tags: "Landscape, Shadows, Depth",
    },
    {
        theme: "Timeless",
        name: "Vintage Cars in Black & White",
        img: `${proImgFour}`,
        tags: "Automotive, Texture, Contrast",
    },
    {
        theme: "Serenity",
        name: "Still Life in Shades of Gray",
        img: `${proImgFive}`,
        tags: "Still Life, Fine Art, Simplicity",
    },
    {
        theme: "Echo",
        name: "Reflections of the City",
        img: `${proImgSix}`,
        tags: "Reflections, Urban, Symmetry",
    },
    {
        theme: "Pulse",
        name: "Motion in Monochrome",
        img: `${proImgSeven}`,
        tags: "Action, Movement, Blur",
    },
    {
        theme: "Soul",
        name: "Expressions in Black & White",
        img: `${proImgEight}`,
        tags: "Emotions, Portraiture, Depth",
    },
];

export const resource: Resource[] = [
    {
        img: `${resImgOne}`,
        tag: "Photography Source",
        name: "Mastering Light & Shadows",
    },
    {
        img: `${resImgTwo}`,
        tag: "Photography Source",
        name: "Portrait Photography Essentials",
    },
    {
        img: `${resImgThree}`,
        tag: "Photography Source",
        name: "Composition in Architecture",
    },
];

export const inspiration: Inspiration[] = [
    {
        img: `${insImgOne}`,
        tag: "Nature",
        name: "The serenity of dawn captured in monochrome, where shadows and light blend to create a peaceful scene.",
    },
    {
        img: `${insImgTwo}`,
        tag: "Urban",
        name: "Street photography in black-and-white that highlights the energy and contrast of urban life.",
    },
    {
        img: `${insImgThree}`,
        tag: "Photography",
        name: "A tribute to the tools of the trade, reminding us that every shot has the power to tell a story.",
    },
    {
        img: `${insImgFour}`,
        tag: "Motion",
        name: "The power of nature in motion, frozen in time, where the textures and contrasts shine through in black-and-white.",
    },
];
