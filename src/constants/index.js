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
    , trips
    , todoapp
    , hoobank

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
        id: 'portfolio',
        titleEn: 'Portfolio',
        titleEs: 'Portafolio',
    },
    {
        id: 'experiences',
        titleEn: 'Experiences',
        titleEs: 'Experiencia',
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

export const homeInfo = {
        // information home
        shortInfoEn : "I'm a Systems Engineer specializing in Fullstack web development with expertise in designing and building administrative systems and websites that meet specific client requirements.",
        shortInfoEs : "Soy Ingeniero en Sistemas especializado en el desarrollo web Fullstack con experiencia en la creación de sistemas administrativos y sitios web adaptados a las necesidades específicas de los clientes.",

        // text for button of contact
        buttonEn : "Contact me!",
        buttonEs : "Contactame!",
}

export const aboutInfo = 
    {
        // information home
        infoEn : "I'm a Systems Engineer specializing in Fullstack web development with expertise in designing and building administrative systems and websites that meet specific client requirements.",
        infoEs : "Soy Ingeniero en Sistemas especializado en el desarrollo web Fullstack con experiencia en la creación de sistemas administrativos y sitios web adaptados a las necesidades específicas de los clientes.",

        // text for button of contact
        buttonEn : "Contact me!",
        buttonEs : "Contactame!",

};

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
];

export const portfolio = [
    {
        id:'project-1',
        img: trips,
        titleEn: 'Page Trips',
        titleEs: 'Pagina de Viajes',
        contentEn: 'This is a little web page that I created when I was learing to use TailwindCss.',
        contentEs: 'Esta esa una pagina simple que cree cuando estaba aprendiendo a usar TailwindCss.',
        visible: true,
        link:'https://reniervargas.com/trips/',
        code_link:'https://github.com/renier1989/trips',
        tech: [
            {
                id:'tech-1',
                img:'img-tech1'
            }
        ],
    },
    {
        id:'project-2',
        img: todoapp,
        titleEn: 'Todo App',
        titleEs: 'App de Tareas',
        contentEn: 'A little web page I made for learing and practice some cool things about ReactJs.',
        contentEs: 'Una pagina simple que hice para aprender y practicar algunas cosas geniales de ReactJs.',
        visible: true,
        link:'https://reniervargas.com/todo-app/',
        code_link:'https://github.com/renier1989/todo-app',
        tech: [
            {
                id:'tech-1',
                img:'img-tech1'
            }
        ],
    },
    {
        id:'project-3',
        img: hoobank,
        titleEn: 'HooBank',
        titleEs: 'HooBank',
        contentEn: 'A web page that I created using ReactJs and TailwindCss to practice both technologies. It looks awesome! ',
        contentEs: 'Una pagina que cree usando ReactJs y TailwindCss para practicar ambas tecnologias. Se ve genial! ',
        visible: true,
        link:'http://reniervargas.com/hoobank/',
        code_link:'https://github.com/renier1989/hoobank',
        tech: [
            {
                id:'tech-1',
                img:'img-tech1'
            }
        ],
    },
    {
        id:'project-4',
        img: hoobank,
        titleEn: 'HooBank',
        titleEs: 'HooBank',
        contentEn: 'A web page that I created using ReactJs and TailwindCss to practice both technologies. It looks awesome! ',
        contentEs: 'Una pagina que cree usando ReactJs y TailwindCss para practicar ambas tecnologias. Se ve genial! ',
        visible: false,
        link:'http://reniervargas.com/hoobank/',
        code_link:'https://github.com/renier1989/hoobank',
        tech: [
            {
                id:'tech-1',
                img:'img-tech1'
            }
        ],
    },
];