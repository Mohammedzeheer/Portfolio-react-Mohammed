import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    java,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    bootstrap,
    Uvito,
    nodejs,
    mongodb,
    postgresql,
    MySQL,
    firebase,
    git,
    figma,
    docker,
    brototype,
    traction,
    textutils,
    netflixclone,
    threejs,
    turfWebsite,
    fashionWebsite,
    todoWebsite,
    urlWebsite,
    olxCloneWebsite,
    techrender,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    // {
    //     name: "Java",
    //     icon: java,
    // },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
   {
        name: "MySQL",
        icon: MySQL,
    },
    {
        name: "Firebase",
        icon: firebase,
    },
    {
        name: "Docker",
        icon: docker,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "Full stack Developer",
        company_name: "Techrender.ai",
        icon: techrender,
        iconBg: "#E6DEDD",
        date: "2024 - present",
        points: [
            "As a full stack developer, I utilize NestJS, Node.js, React, PostgreSQL, and JavaScript to craft efficient and dynamic web applications",
        ],
    },
    {
        title: "Mern stack Developer",
        company_name: "Brototype",
        icon: brototype,
        iconBg: "#E6DEDD",
        date: "2022 - 2023",
        points: [
            "As a Mern stack developer, I utilize Node.js, React, Express,MongoDB and JavaScript to craft efficient and dynamic web applications",
        ],
    },
    {
        title: "Mern stack Developer",
        company_name: "UVITO Technology Mangalore",
        icon: Uvito,
        iconBg: "#E6DEDD",
        date: "2020 - 2021",
        points: [
            "Developed gold billing application and Collaborated with team members to deliver high-quality solutions",
        ],
    },
];

const testimonials = [
    {
        testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "A One Turf",
        description:
            "The Turf Booking Web App makes reserving football fields easy. You can sign up, pick a field like location and facilities, choose a date and time, and pay securely online. You can also leave reviews. It's mobile-friendly too! This web app saves time.It's a handy tool for football lovers and field owners to enjoy and manage their spaces better!",
        tags: [
            {
                name: "Node.Js",
                color: "green-text-gradient",
            },
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "MongoDb",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: turfWebsite,
        live_demo_link: "https:aoneturf.netlify.app/",
        source_code_link: "https://github.com/Mohammedzeheer/turffrontend.git",
    },
    {
        name: "Aone Fashion",
        description:
            "Designed a chic fashion e-commerce app for effortless shopping. Built with Node and Handlebars, it ensures smooth navigation, secure payments, and intelligent search. It adapts beautifully to any device. Features include a streamlined booking process and a user-friendly cart for convenient shopping Explore it.",
       

            tags: [
            {
                name: "Node.Js",
                color: "green-text-gradient",
            },
            {
                name: "Hbs",
                color: "blue-text-gradient",
            },
            {
                name: "MongoDb",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
            
        ],
        image: fashionWebsite,
        live_demo_link: "https://a1fashion.online/",
        source_code_link: "https://github.com/Mohammedzeheer/a1fashion.git",
    },

    {
        name: "Url Shortner",
        description:
            "URL Shortener! It's made with React and lets you quickly turn long web addresses into easy-to-share links. You can sign in easily using your Google account for added convenience and security. The design is simple and works well on any device. Take a look at this project to see how I create smooth and enjoyable experiences for users",
        tags: [
            
            {
                name: "Node.Js",
                color: "green-text-gradient",
            },
            {
                name: "React.js",
                color: "blue-text-gradient",
            },
            {
                name: "MongoDb",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: urlWebsite,
        live_demo_link: "https://url-shortner-seven-virid.vercel.app/",
        source_code_link: "https://github.com/Mohammedzeheer/UrlShortner-frontend.git",
    },
  
    // {
    //     name: "Netflix Clone",
    //     description:
    //         "A cutting-edge Netflix clone project, offering users a seamless streaming experience with a vast library of movies, TV shows, and original content, all complemented by personalized recommendations and user-friendly features for an immersive entertainment journey.",
    //     tags: [
    //         {
    //             name: "react.js",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "firebase",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "scss",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: netflixclone,
    //     source_code_link: "https://github.com/Mohammedzeheer/netflix.git",
    // },
    // {
    //     name: "Olx Clone",
    //     description:
    //         "A cutting-edge Netflix clone project, offering users a seamless streaming experience with a vast library of movies, TV shows, and original content, all complemented by personalized recommendations and user-friendly features for an immersive entertainment journey.",
    //     tags: [
    //         {
    //             name: "react.js",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "firebase",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "scss",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: netflixclone,
    //     source_code_link: "https://github.com/Mohammedzeheer/netflix.git",
    // },
];

export { services, technologies, experiences, testimonials, projects };
