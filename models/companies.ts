interface IProject {
  name: string,
  id: string,
  role: string,
  activities: string,
  legacy: boolean,
  description: string,
  tags: string[]
}
interface ICompany {
  name: string,
  hash: string,
  avatar: string | null,
  description: string,
  projects: IProject[]
}

const companies: ICompany[] = [
  {
    name: 'Adereso',
    hash: 'adereso',
    avatar: '',
    description: `Adereso es una plataforma en la nube que te ayuda a organizar 
    tus mensajes de WhatsApp, Facebook, Instagram, Twitter, Correo electrónico y mucho más.`,
    projects: [
      {
        name: 'Desk',
        id: 'adereso_desk',
        role: 'Front-end Tech Lead',
        activities: 'Desarrollo de nuevas funcionalidades, modernización de plataforma web, implementación de tareas automatizadas para control de calidad de código con analizadores de código como ESlint y Prettier, pruebas unitarias, tareas de devOps.',
        legacy: false,
        description: `Responsable de todo el proceso de modernización de la plataforma web, 
          organizar y planificar desarrollo de nuevas features y organización del equipo Front`,
        tags: ['AngularJS', 'Vue', 'AWS', 'Angular'],
      }
    ]
  },
  {
    name: 'Mall plaza',
    hash: 'mall_plaza',
    avatar: '',
    description: `Mallplaza es una cadena de centros comerciales chilena que se 
    encuentran distribuidos en nueve ciudades de Chile`,
    projects: [
      {
        name: 'Autoplaza',
        id: 'mallplaza_autoplaza',
        role: 'Front-end dev',
        description: '',
        activities: '',
        legacy: false,
        tags: ['Angular', 'PWA'],
      },
      {
        name: 'Giwer',
        id: 'mallplaza_giwer',
        role: 'Front-end dev & UI Designer',
        description: '',
        activities: '',
        tags: ['Angular', 'PWA'],
        legacy: true
      }
    ]
  },
  {
    name: 'Cardif',
    hash: 'cardif',
    avatar: '',
    description: '',
    projects: [
      {
        name: 'Devolución de primas',
        id: 'cardif_dev_primas',
        role: 'Front-end dev & UI Designer',
        activities: '',
        description: '',
        legacy: true,
        tags: ['React', 'JavaScript'],
      },
      {
        name: 'SOAP',
        id: 'cardif_soap',
        role: 'Front-end dev & UI Designer',
        activities: '',
        description: '',
        legacy: true,
        tags: ['React', 'JavaScript']
      }
    ]
  },
  {
    name: 'Enel',
    hash: 'enel',
    avatar: '',
    description: 'UI Designer and developer creating templates for custom CMS develop with react',
    projects: [
      {
        name: 'Gestcon',
        id: 'enel_gestcon',
        description: '',
        role: 'Front-end dev & UI Designer',
        activities: '',
        legacy: false,
        tags: ['React'],
      }
    ]
  },

  {
    name: 'BBVA',
    hash: 'bbva',
    avatar: '',
    description: '',
    projects: [
      {
        name: 'Sistema WEBPAY',
        id: 'bbva_webpay',
        role: 'Front-end dev & UI Designer',
        activities: '',
        description: '',
        legacy: true, tags: ['Angular', 'AngularJS'],
      }
    ]
  },
  {
    name: 'Seguros Falabella',
    hash: 'seguros-falabella',
    avatar: '',
    description: '',
    projects: [
      {
        name: 'Matriz de seguros',
        id: 'falabella_matriz',
        description: '',
        role: 'Front-end dev',
        activities: '',
        legacy: true,
        tags: ['javascript', 'angularJS'],
      },

      {
        name: 'SOAP Perú - SOAP Colombia',
        id: 'falabella_soap',
        description: '',
        role: 'Front-end dev',
        activities: '',
        legacy: true,
        tags: ['javascript', 'angularJS'],
      }
    ]
  },
  {
    name: 'Agencia de Calidad de la Educación',
    hash: 'agce',
    avatar: '',
    description: '',
    projects: [
      {
        name: 'Corrector SIMCE',
        id: 'agce_simce',
        description: '',
        role: 'Front-end dev',
        activities: '',
        legacy: true,
        tags: ['JavaScript', 'JQuery'],
      }
    ]
  },
  {
    name: 'Factoring Security',
    hash: 'factoring-security',
    avatar: '',
    description: '',
    projects: [{
      name: '',
      id: 'factoring',
      description: 'Design and Create UI Kit template for custom CMS develop with angularJS',
      role: 'Front-end dev & UI Designer',
      activities: '',
      legacy: true,
      tags: ['AngularJS', 'HTML', 'CSS'],
    }]
  },
  {
    name: 'Servicio Nacional del Patrimonio Cultural',
    hash: 'dibam',
    avatar: '',
    description: 'Develop responsive UI for main website...',
    projects: [
      {
        name: 'Portal de Bibliotecas y Museos de Chile',
        id: 'dibam_portal',
        description: '',
        role: 'Front-end developer',
        legacy: false,
        activities: '',
        tags: ['JavaScript', 'HTML', 'CSS']
      },
      {
        name: 'Gestion de honorarios',
        id: 'dibam_gest_honorarios',
        description: '',
        role: 'Front-end developer & UI Designer',
        activities: '',
        legacy: false,
        tags: ['JavaScript', 'HTML', 'CSS']
      }

    ]
  },
  {
    name: 'Maui and Sons',
    hash: 'maui-and-sons',
    avatar: '',
    description: 'Develop Landing page for new summer season',
    projects: [{
      name: 'Landing Summers',
      id: 'maui_landing_summers',
      description: '',
      role: 'Front-end dev & UI Designer',
      activities: '',
      legacy: true,
      tags: ['Wordpress', 'HTML', 'CSS']
    }]
  }
]
export default companies 
