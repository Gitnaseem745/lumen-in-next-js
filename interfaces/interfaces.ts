export interface ButtonProps {
    btnText: string;
}

export interface CardProps {
    img: string;
    tag: string;
    name: string;
}

export interface Section {
    title: string;
    description: string;
    address?: string;
    mail?: string;
    social?: string[];
}

export interface Project {
    theme: string;
    name: string;
    img: string;
    tags: string;
}

export interface Resource {
    img: string;
    tag: string;
    name: string;
}

export interface Inspiration {
    img: string;
    tag: string;
    name: string;
}
