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
        visible:true,
    },
    {
        id: 'about',
        titleEn: 'About',
        titleEs: 'Acerca de',
        visible:true,
    },
    {
        id: 'skills',
        titleEn: 'Skills',
        titleEs: 'Habilidades',
        visible:true,
    },
    {
        id: 'portfolio',
        titleEn: 'Portfolio',
        titleEs: 'Portafolio',
        visible:true,
    },
    {
        id: 'experiences',
        titleEn: 'Experiences',
        titleEs: 'Experiencia',
        visible:true,
    },
    {
        id: 'testimonials',
        titleEn: 'Testimonials',
        titleEs: 'Referencias',
        visible:false,
    },
    {
        id: 'contact',
        titleEn: 'Contact',
        titleEs: 'Contanto',
        visible:true,
    },
];

export const homeInfo = {
        // information home
        shortInfoEn : "I'm a Systems Engineer specializing in Fullstack web development with expertise in designing and building administrative systems and websites that meet specific client requirements.",
        shortInfoEs : "Soy Ingeniero en Sistemas especializado en el desarrollo web Fullstack con experiencia en la creación de sistemas administrativos y sitios web adaptados a las necesidades específicas de los clientes.",

        shortPhraseEn : "Creating innovative digital solutions.",
        shortPhraseEs : "Creando soluciones digitales e innovadoras.",

        // text for button of contact
        buttonEn : "Contact me!",
        buttonEs : "Contactame!",
}

export const aboutInfo = 
    {
        // information home
        infoEn : "I'm a Systems Engineer specializing in Fullstack web development with expertise in designing and building administrative systems and websites that meet specific client requirements.",
        infoEs : `Cuento con más de 9 años de experiencia en el ámbito tecnológico centrados en el Desarrollo como Backend, Frontend, Base de datos, Administración y Gestión de versiones, haciendo uso de tecnologías como Php, Laravel Framework, Laravel Livewire, Javascript, AlpineJS, VueJs, Bootstrap, Bulma, TailwindCSS, MySQL, PostgresSQL, HTML, CSS, PHPMyAdmin, Git, GiyHub, GitLab, Bitbucket. <br> holas`,

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

export const experiences = [
    {
        id: 'experience-1',
        nameJobEn: 'Experience 1',
        nameJobEs: 'Experiencia 1',
        datesEn : 'Jul 2020 - Present',
        datesEs : 'Jul 2020 - Actual',
        positionEn: 'Programmer Amalyst',
        positionEs: 'Analista Programador',
        roles: [
            {
                id:'role-1',
                descriptionEn : 'description number 1',
                descriptionEs : 'descripcion numero 1',
            },
            {
                id:'role-2',
                descriptionEn : 'description number 2',
                descriptionEs : 'descripcion numero 2',
            },
            {
                id:'role-3',
                descriptionEn : 'description number 3',
                descriptionEs : 'descripcion numero 3',
            },
        ]
    },
    {
        id: 'experience-2',
        nameJobEn: 'Experience 2',
        nameJobEs: 'Experiencia 2',
        datesEn : 'Apr 2018 - Jul 2020',
        datesEs : 'Abr 2020 - Jul 2020',
        positionEn: 'Web Developer',
        positionEs: 'Desarrollador Web',
        roles: [
            {
                id:'role-1',
                descriptionEn : 'description number 1',
                descriptionEs : 'descripcion numero 1',
            },
            {
                id:'role-2',
                descriptionEn : 'description number 2',
                descriptionEs : 'descripcion numero 2',
            },
            {
                id:'role-3',
                descriptionEn : 'description number 3',
                descriptionEs : 'descripcion numero 3',
            },
        ]
    },
    {
        id: 'experience-3',
        nameJobEn: 'Experience 3',
        nameJobEs: 'Experiencia 2',
        datesEn : 'Apr 2018 - Jul 2020',
        datesEs : 'Abr 2020 - Jul 2020',
        positionEn: 'Web Developer',
        positionEs: 'Desarrollador Web',
        roles: [
            {
                id:'role-1',
                descriptionEn : 'description number 1',
                descriptionEs : 'descripcion numero 1',
            },
            {
                id:'role-2',
                descriptionEn : 'description number 2',
                descriptionEs : 'descripcion numero 2',
            },
            {
                id:'role-3',
                descriptionEn : 'description number 3',
                descriptionEs : 'descripcion numero 3',
            },
        ]
    },
];