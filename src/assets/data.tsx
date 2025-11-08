import { 
    IconPhoneFilled,
    IconMail,
    IconMapPinFilled,
    IconBrandLinkedinFilled
} from '@tabler/icons-preact';

export const data = {
    header: {
        title: "Juan Pablo Moreno Rico",
        subtitle: "Full Stack Developer",
        photo: "https://avatars.githubusercontent.com/u/11802554?s=200&u=badff61fb1f854d299a276b12398cdd5cbca6793&v=2"
    },
    sidebar: [
        {
            title: "Contacto",
            items: [
                {
                    icon: IconPhoneFilled,
                    text: "+57 123 456 789",
                },
                {
                    icon: IconMail,
                    text: "juanpa@mail.com",
                },
                {
                    icon: IconMapPinFilled,
                    text: "Bogotá D.C."
                },
                {
                    icon: IconBrandLinkedinFilled,
                    text: "linkedin.com/juan-pablo-moreno",
                    link: "https://www.linkedin.com/in/juan-pablo-moreno-5473b41a9/"
                }
            ]
        },
        {
            title: "Habilidades",
            items: [
                {
                    text: "JavaScript, TypeScript, Python, Java"
                },
                {
                    text: "React, Preact, Node.js, Express"
                },
                {
                    text: "SQL, NoSQL, RESTful APIs"
                }
            ]
        },
        {
            title: "Idiomas",
            items: [
                {
                    text: "Español - Nativo"
                },
                {
                    text: "Inglés - Avanzado"
                },
                {
                    text: "Italiano - Básico"
                }
            ]
        },
        {
            title: "Intereses",
            items: [
                {
                    text: "Desarrollo web"
                },
                {
                    text: "Inteligencia Artificial"
                },
                {
                    text: "Aprendizaje continuo"
                }
            ]
        },
    ],
    content: [
        {
            title: "Perfil profesional",
            text: "Desarrollador Full Stack con más de 4 años de experiencia en la creación de aplicaciones web escalables y eficientes. Apasionado por aprender nuevas tecnologías y mejorar continuamente mis habilidades de programación."
        },
        {
            title: "Experiencia laboral",
            items: [
                {
                    title: "Desarrollador Full Stack",
                    subtitle: "Tech Solutions Inc. | Ene 2020 - Presente",
                    description: "Desarrollo y mantenimiento de aplicaciones web utilizando React y Node.js. Implementación de APIs RESTful y optimización de bases de datos SQL y NoSQL.",
                    functions: [
                        "Desarrollé una aplicación de gestión de proyectos que aumentó la productividad del equipo en un 20%.",
                        "Implementé mejoras en la base de datos que redujeron los tiempos de consulta en un 30%.",
                    ]
                },
                {
                    title: "Desarrollador Junior",
                    subtitle: "Web Creators Ltd. | Jul 2018 - Dic 2019",
                    description: "Colaboré en el desarrollo de sitios web y aplicaciones utilizando JavaScript y frameworks front-end. Participé en revisiones de código y pruebas de software.",
                    functions: [
                        "Contribuí al desarrollo de más de 10 proyectos web exitosos.",
                        "Mejoré la experiencia del usuario mediante la implementación de interfaces intuitivas y responsivas.",
                    ]
                }
            ]
        },
        {
            title: "Educación",
            items: [
                {
                    title: "Ingeniería de Sistemas",
                    subtitle: "Universidad Nacional de Colombia | 2014 - 2018",
                },
                {
                    title: "Certificación en Desarrollo Web Full Stack",
                    subtitle: "Platzi | 2019",
                }
            ]
        }
    ]
};
