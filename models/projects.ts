interface IProject {
  name: string,
  description: string,
  company: string,
  technologies: Array<string>
}
type IProjects = Array<IProject>

const projects: IProjects = [
  {
    name: 'Desk - Postcenter',
    company: 'Adere.so',
    description: 'Tech lead Front-end...',
    technologies: ['AngularJS', 'Vue', 'Vuex', 'AWS', 'Angular']
  },
  {
    name: 'Giwer',
    company: 'Mall Plaza',
    description: 'As UI Developer working with React developing A/B Testing, new features...',
    technologies: ['React', 'PWA', 'Angular']
  },
  {
    name: 'Cardif',
    company: 'BNP Paribas Cardif',
    description: '',
    technologies: ['React', 'JavaScript']
  },
  {
    name: 'Gestcon',
    company: 'Enel',
    description: 'UI Designer and developer creating templates for custom CMS develop with react',
    technologies: ['React']
  },

  {
    name: 'Sistema Webpay',
    company: 'BBVA',
    description: '',
    technologies: ['Angular', 'AngularJS']
  },
  {
    name: 'SOAP',
    company: 'Seguros Falabella',
    description: '',
    technologies: []
  },
  {
    name: '',
    company: 'AGCE - Ministerio de Educacion',
    description: '',
    technologies: ['JavaScript', 'JQuery']
  },
  {
    name: '',
    company: 'Factoring Security',
    description: 'Design and Create UI Kit template for custom CMS develop with angularJS',
    technologies: ['AngularJS', 'HTML', 'CSS']
  },
  {
    name: 'Portal de Bibliotecas y Museos de Chile',
    company: 'Servicio Nacional del Patrimonio Cultural',
    description: 'Develop responsive UI for main website...',
    technologies: ['JavaScript', 'HTML', 'CSS']
  },
  {
    name: 'Landing Summers',
    company: 'Maui and Sons',
    description: 'Develop Landing page for new summer season',
    technologies: ['Wordpress', 'HTML', 'CSS']
  }
]
export default projects
