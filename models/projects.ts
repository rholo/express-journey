interface IProject {
  name: string,
  description: string,
  tags: Array<string>
}
type IProjects = Array<IProject>

const projects: IProjects = [
  {
    name: 'Adere.so',
    description: 'Tech lead Front-end...',
    tags: ['AngularJS', 'Vue', 'Vuex', 'AWS', 'Angular']
  },
  {
    name: 'Mall Plaza',
    description: 'As UI Developer working with React developing A/B Testing, new features...',
    tags: ['React', 'PWA', 'Angular']
  },
  {
    name: 'Cardif',
    description: '',
    tags: ['React', 'JavaScript']
  },
  {
    name: 'Enel',
    description: 'UI Designer and developer creating templates for custom CMS develop with react',
    tags: ['React']
  },

  {
    name: 'BBVA',
    description: '',
    tags: ['Angular', 'AngularJS']
  },
  {
    name: 'Seguros Falabella',
    description: '',
    tags: []
  },
  {
    name: 'AGCE',
    description: '',
    tags: ['JavaScript', 'JQuery']
  },
  {
    name: 'Factoring Security',
    description: 'Design and Create UI Kit template for custom CMS develop with angularJS',
    tags: ['AngularJS', 'HTML', 'CSS']
  },
  {
    name: 'Servicio Nacional del Patrimonio Cultural',
    description: 'Develop responsive UI for main website...',
    tags: ['JavaScript', 'HTML', 'CSS']
  },
  {
    name: 'Maui and Sons',
    description: 'Develop Landing page for new summer season',
    tags: ['Wordpress', 'HTML', 'CSS']
  }
]
export default projects
