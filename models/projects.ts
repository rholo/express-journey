interface IProject {
  name: string,
  hash: string,
  description: string,
  company: string,
  tags: Array<string>,
  legacy: boolean
}
type IProjects = Array<IProject>

const projects: IProjects = [
  {
    name: 'Desk - Postcenter',
    hash: 'adereso',
    legacy: false,
    company: 'Adere.so',
    description: 'Tech lead Front-end...',
    tags: ['AngularJS', 'Vue', 'AWS', 'Angular']
  },
  {
    name: 'Autoplaza',
    hash: 'autoplaza',
    legacy: true,
    company: 'Mall Plaza',
    description: 'As UI Developer working with React developing A/B Testing, new features...',
    tags: ['Angular', 'PWA']
  },

  {
    name: 'Giwer',
    hash: 'giwer',
    legacy: true,
    company: 'Mall Plaza',
    description: 'As UI Developer working with React developing A/B Testing, new features...',
    tags: ['React', 'PWA', 'Angular']
  },
  {
    name: 'Cardif',
    hash: 'cardif',
    legacy: true,
    company: 'BNP Paribas Cardif',
    description: '',
    tags: ['React', 'JavaScript']
  },
  {
    name: 'Gestcon',
    hash: 'enel',
    legacy: false,
    company: 'Enel',
    description: 'UI Designer and developer creating templates for custom CMS develop with react',
    tags: ['React']
  },

  {
    name: 'Sistema WEPBAY',
    hash: 'bbva',
    legacy: true,
    company: 'BBVA',
    description: '',
    tags: ['Angular', 'AngularJS']
  },
  {
    name: 'SOAP',
    hash: 'segurods-falabella',
    legacy: false,
    company: 'Seguros Falabella',
    description: '',
    tags: ['javascript', 'angularJS']
  },
  {
    name: 'Corrector SIMCE',
    hash: 'agce',
    legacy: true,
    company: 'AGCE - Ministerio de Educacion',
    description: '',
    tags: ['JavaScript', 'JQuery']
  },
  {
    name: 'Factoring',
    hash: 'factoring-security',
    legacy: true,
    company: 'Factoring Security',
    description: 'Design and Create UI Kit template for custom CMS develop with angularJS',
    tags: ['AngularJS', 'HTML', 'CSS']
  },
  {
    name: 'Portal de Bibliotecas y Museos de Chile',
    hash: 'dibam',
    legacy: true,
    company: 'Servicio Nacional del Patrimonio Cultural',
    description: 'Develop responsive UI for main website...',
    tags: ['JavaScript', 'HTML', 'CSS']
  },
  {
    name: 'Landing Summers',
    hash: 'maui-and-sons',
    legacy: true,
    company: 'Maui and Sons',
    description: 'Develop Landing page for new summer season',
    tags: ['Wordpress', 'HTML', 'CSS']
  }
]
export default projects
