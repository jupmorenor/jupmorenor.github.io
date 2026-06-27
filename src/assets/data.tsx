import {
    IconBrandWhatsappFilled,
    IconMapPinFilled,
    IconBrandLinkedinFilled,
    IconBrandGithubFilled,
    IconMailFilled
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
                    icon: IconBrandWhatsappFilled,
                    text: "+57 312 530 8411",
                    link: "https://wa.me/573125308411"
                },
                {
                    icon: IconMailFilled,
                    text: "jupmorenor@gmail.com",
                },
                {
                    icon: IconMapPinFilled,
                    text: "Bogotá D.C."
                },
                {
                    icon: IconBrandLinkedinFilled,
                    text: "linkedin.com/juan-pablo-moreno",
                    link: "https://www.linkedin.com/in/juan-pablo-moreno-5473b41a9/"
                },
                {
                    icon: IconBrandGithubFilled,
                    text: "github.com/jupmorenor",
                    link: "https://www.github.com/jupmorenor"
                }
            ]
        },
        {
            title: "Habilidades",
            items: [
                {
                    text: "JavaScript, TypeScript, Go, Python, Java, Angular, Microfrontend, RxJs, React, Redux, Express, NestJS, Beego, HTML5, CSS3, SASS, Material UI, Bootstrap, PostgreSQL, SQLite, MongoDB, ETL, Git, Github, Github Actions, GitFlow."
                },
                {
                    text: "Analisis de requerimientos, diseño de bases datos, diseño UML."
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
                    text: "Inglés - Avanzado escrito"
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
                    text: "Desarrollo de videojuegos"
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
            text: "Desarrollador fullstack intermedio, profesional en Ingeniería de Sistemas de la Universidad Distrital Francisco José de Caldas, con más de 4 años de experiencia en desarrollo de aplicaciones de escritorio, aplicaciones web y para dispositivos móviles en lenguajes de programación como Typescript, Go, Javascript (NodeJS), Html, CSS, entre otros relacionados, manejo de repositorios de código basados en Git, diseño de bases de datos y modelado con UML, aplicación de metodología SCRUM."
        },
        {
            title: "Experiencia laboral",
            items: [
                {
                    title: "Desarrollador Full Stack",
                    subtitle: "Oficina Asesora de Sistemas de la Universidad Distrital | Dic 2025 - Jun 2026",
                    description: "Desarrollo del sistema de administración de planes de auditoría y planes de mejoramiento para la Oficina de Control Interno de la Universidad Distrital de acuerdo con las políticas institucionales.",
                    functions: [
                        "Desarrollé los módulos de planeación y programación del sistema, cubriendo la creación individual y masiva de auditorías, la asignación de auditores y el flujo completo de aprobación por múltiples roles institucionales.",
                        "Implementé el soporte a múltiples dependencias por auditoría, incluyendo la migración de datos existentes y la validación completa del flujo en ambiente de pruebas.",
                        "Construí el flujo de edición extraordinaria del plan aprobado, con registro de actas de modificación, generación diferenciada de documentos e historial de ediciones accesible por roles autorizados.",
                        "Ejecuté la actualización de seguridad del frontend a Angular v20, resolví más de 500 observaciones de calidad e incorporé análisis de código automático en los repositorios del proyecto, reduciendo las vulnerabilidades de 57 a 6.",
                        "Apoyé el paso a producción mediante scripts de migración de datos, sincronización de ambientes, implementación de configuración por ambiente y resolución de incidencias críticas que bloqueaban flujos principales del sistema.",
                    ]
                },
                {
                    title: "Desarrollador Full Stack",
                    subtitle: "Oficina Asesora de Sistemas de la Universidad Distrital | Sep 2022 - Feb 2023",
                    description: "Desarrollo y entrega del sistema de generación de resoluciones para la contratación de docentes de vinculación especial de la Universidad Distrital de acuerdo con las políticas institucionales.",
                    functions: [
                        "Realicé ajustes finales al sistema de generación de resoluciones basado en las pruebas de usuario y hallazgos durante la fase de pruebas funcionales.",
                        "Programé las pruebas unitarias y de integración del sistema utilizando el framework de pruebas integrado de Go y Karma en Angular, asegurando la calidad y funcionalidad del software antes de su despliegue.",
                        "Elaboré los manuales de usuario y técnico y videotutoriales del sistema, documentando detalladamente las funcionalidades, procedimientos y aspectos técnicos relevantes para facilitar su uso y mantenimiento futuro.",
                        "Realicé la implementación, pruebas y despliegue del sistema en el entorno de producción, asegurando su correcto funcionamiento y disponibilidad para los usuarios finales.",
                    ]
                },
                {
                    title: "Desarrollador Full Stack",
                    subtitle: "Oficina Asesora de Sistemas de la Universidad Distrital | Jul 2021 - Jul 2022",
                    description: "Planeación y desarrollo de una nueva versión del sistema de generación de resoluciones para la contratación de docentes de vinculación especial de la Universidad Distrital de acuerdo con las políticas institucionales.",
                    functions: [
                        "Realicé la planeación y diseño del nuevo sistema a partir de la documentación disponible y las necesidades de los usuarios finales sobre el sistema legado.",
                        "Implementé los mockups de los diferentes módulos del sistema utilizando Angular, TypeScript, HTML y SASS, siguiendo las mejores prácticas de desarrollo web y asegurando una experiencia de usuario óptima.",
                        "Desarrollé el backend del sistema utilizando Golang con el framework Beego, creando una API RESTful eficiente y segura para la gestión de datos mejorando el rendimiento respecto a la versión original.",
                        "Utilicé gofpdf para la generación dinámica de documentos PDF, facilitando el almacenamiento de las resoluciones generadas en el gestor documental.",
                        "Ajusté las reglas de negocio usando Golog para calcular los valores de honorarios y prestaciones sociales de los docentes contratados.",
                    ]
                },
                {
                    title: "Desarrollador Full Stack",
                    subtitle: "Oficina Asesora de Sistemas de la Universidad Distrital | Sep 2020 - Mar 2021",
                    description: "Desarrollo de nuevos módulos para la nueva versión del Sistema de Gestión Académica de la Universidad Distrital de acuerdo con las políticas institucionales.",
                    functions: [
                        "Implementé el maquetado web y funcionalidad en el server para los módulos de 'Calendario académico' y 'Derechos pecuniarios' utilizando Angular, TypeScript, HTML y CSS en el frontend y Golang con Beego en el backend.",
                        "Finalicé la integración del módulo de inscripción, revisión de documentos y admisiones para nuevos estudiantes de posgrado modificando los modelos de datos de varios microservicios.",
                        "Desarrollé un generador de recibos de pago para aspirantes a programas de posgrado utilizando gofpdf.",
                    ]
                },
                {
                    title: "Desarrollador de software y videojuegos",
                    subtitle: "Ashara Studios SAS | Abr 2017 - Oct 2019",
                    description: "Colaboré en el desarrollo de videojuegos, aplicaciones web, móviles y de escritorio con diferentes lenguajes y herramientas de programación en modalidad Freelance.",
                    functions: [
                        "Colaboré con el diseño de base de datos y migración de datos para la aplicación web del proyecto 'ARC Abogados Especializados' utilizando PostgreSQL.",
                        "Desarrollé el concepto y prototipo del videojuego 'Infection', utilizando Godot Engine y GDScript.",
                        "Implementé la animación de los logotipos de las diferentes areas de la empresa en el sitio web corporativo utilizando React y CSS.",
                        "Programé la comunicación entre una aplicación móvil y un dispositivo de hardware utilizando React Native, websockets y Arduino",
                    ]
                }
            ]
        },
        {
            title: "Educación",
            items: [
                {
                    title: "Ingeniería de Sistemas",
                    subtitle: "Universidad Distrital Francisco José de Caldas | 2011 - 2025",
                },
                {
                    title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
                    subtitle: "Coursera | 2020",
                },
                {
                    title: "Front-End JavaScript Frameworks: Angular",
                    subtitle: "Coursera | 2021",
                },
                {
                    title: "Server-side Development with NodeJS, Express and MongoDB",
                    subtitle: "Coursera | 2023",
                },
                {
                    title: "Multiplatform Mobile App Development with React Native",
                    subtitle: "Coursera | 2023",
                },

            ]
        }
    ]
};
