interface IProject {
  name: string,
  hash: string,
  description: string,
  company: string,
  tags: Array<string>
}
type IProjects = Array<IProject>

const projects: IProjects = [
  {
    name: 'Desk - Postcenter',
    hash: 'adereso',
    company: 'Adere.so',
    description: 'Tech lead Front-end...',
    tags: ['AngularJS', 'Vue', 'AWS', 'Angular']
  },
  {
    name: 'Giwer',
    hash: 'giwer',
    company: 'Mall Plaza',
    description: 'As UI Developer working with React developing A/B Testing, new features...',
    tags: ['React', 'PWA', 'Angular']
  },
  {
    name: 'Cardif',
    hash: 'cardif',
    company: 'BNP Paribas Cardif',
    description: '',
    tags: ['React', 'JavaScript']
  },
  {
    name: 'Gestcon',
    hash: 'enel',
    company: 'Enel',
    description: 'UI Designer and developer creating templates for custom CMS develop with react',
    tags: ['React']
  },

  {
    name: 'Sistema WEPBAY',
    hash: 'bbva',
    company: 'BBVA',
    description: '',
    tags: ['Angular', 'AngularJS']
  },
  {
    name: 'SOAP',
    hash: 'segurods-falabella',
    company: 'Seguros Falabella',
    description: '',
    tags: ['javascript', 'angularJS']
  },
  {
    name: 'Corrector SIMCE',
    hash: 'agce',
    company: 'AGCE - Ministerio de Educacion',
    description: '',
    tags: ['JavaScript', 'JQuery']
  },
  {
    name: 'Factoring',
    hash: 'factoring-security',
    company: 'Factoring Security',
    description: 'Design and Create UI Kit template for custom CMS develop with angularJS',
    tags: ['AngularJS', 'HTML', 'CSS']
  },
  {
    name: 'Portal de Bibliotecas y Museos de Chile',
    hash: 'dibam',
    company: 'Servicio Nacional del Patrimonio Cultural',
    description: 'Develop responsive UI for main website...',
    tags: ['JavaScript', 'HTML', 'CSS']
  },
  {
    name: 'Landing Summers',
    hash: 'maui-and-sons',
    company: 'Maui and Sons',
    description: 'Develop Landing page for new summer season',
    tags: ['Wordpress', 'HTML', 'CSS']
  }
]
export default projects
