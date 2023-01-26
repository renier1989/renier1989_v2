import { 
    linkedin
    , github
    , instagram
    , laravel
    , livewire
    , mysql
    , php
    , reactjs
    , tailwind
    , javascript
    , bootstrap
} from '../assets'

export const navLinks = [
    {
        id: 'home',
        titleEn: 'Home',
        titleEs: 'Inicio',
    },
    {
        id: 'about',
        titleEn: 'About',
        titleEs: 'Acerca de',
    },
    {
        id: 'skills',
        titleEn: 'Skills',
        titleEs: 'Habilidades',
    },
    {
        id: 'experiences',
        titleEn: 'Experiences',
        titleEs: 'Experiencia',
    },
    {
        id: 'portfolio',
        titleEn: 'Portfolio',
        titleEs: 'Portafolio',
    },
    {
        id: 'testimonials',
        titleEn: 'Testimonials',
        titleEs: 'Referencias',
    },
    {
        id: 'contact',
        titleEn: 'Contact',
        titleEs: 'Contanto',
    },
];

export const aboutInfo = 
    {
        // information about
        infoEn : "I'm Renier Vargas Web Developer",
        infoEs : "Soy Renier Vargas Desarrollador Web",

        // text for button of contact
        buttonEn : "Contact me!",
        buttonEs : "Contactame!",

    }
;

export const socialMediaIcons = [
    {
        id : 'icon-1',
        name : 'linkedin',
        url : 'https://www.linkedin.com/in/reniervargas1989/',
        img : linkedin,
        visible: true,
    },
    {
        id : 'icon-2',
        name : 'github',
        url : 'https://github.com/renier1989',
        img : github,
        visible: true,
    },
    {
        id : 'icon-3',
        name : 'instagram',
        url : 'https://www.instagram.com/colossus3dart/',
        img : instagram,
        visible: false,
    },
];

export const skills = [
    {
        id: 'logo-1',
        title: 'Laravel',
        yearsEn: '5 Years',
        yearsEs: '5 Años',
        stat: '90',
        img: laravel,
        visible : true,
        current : true,
    },
    {
        id: 'logo-2',
        title: 'TailwindCss',
        yearsEn: '1 Year',
        yearsEs: '1 Año',
        stat: '70',
        img: tailwind,
        visible : true,
        current : true,
    },
    {
        id: 'logo-3',
        title: 'Javascript',
        yearsEn: '4 Years',
        yearsEs: '4 Años',
        stat: '80',
        img: javascript,
        visible : true,
        current : false,
    },
    {
        id: 'logo-4',
        title: 'MySql',
        yearsEn: '7 Years',
        yearsEs: '7 Años',
        stat: '94',
        img: mysql,
        visible : true,
        current : true,
    },
    {
        id: 'logo-5',
        title: 'php',
        yearsEn: '8 Years',
        yearsEs: '8 Años',
        stat: '95',
        img: php,
        visible : true,
        current : false,
    },
    {
        id: 'logo-6',
        title: 'ReactJs',
        yearsEn: '1 Years',
        yearsEs: '1 Años',
        stat: '60',
        img: reactjs,
        visible : true,
        current : true,
    },
    {
        id: 'logo-7',
        title: 'Liviwire',
        yearsEn: '2 Years',
        yearsEs: '2 Años',
        stat: '91',
        img: livewire,
        visible : true,
        current : true,
    },
    {
        id: 'logo-8',
        title: 'Bootstrap',
        yearsEn: '5 Years',
        yearsEs: '5 Años',
        stat: '92',
        img: bootstrap,
        visible : true,
        current : false,
    },
]