interface IProject {
  name: string,
  description: string,
  technologies: Array<string>
}
type IProjects = Array<IProject>

const projects: IProjects = [
  {
    name: 'Adere.so',
    description: 'Tech lead Front-end...',
    technologies: ['AngularJS', 'Vue', 'Vuex', 'AWS', 'Angular']
  },
  {
    name: 'Mall Plaza',
    description: 'As UI Developer working with React developing A/B Testing, new features...',
    technologies: ['React', 'PWA', 'Angular']
  },
  {
    name: 'Cardif',
    description: '',
    technologies: ['React', 'JavaScript']
  },
  {
    name: 'Enel',
    description: 'UI Designer and developer creating templates for custom CMS develop with react',
    technologies: ['React']
  },

  {
    name: 'BBVA',
    description: '',
    technologies: ['Angular', 'AngularJS']
  },
  {
    name: 'Seguros Falabella',
    description: '',
    technologies: []
  },
  {
    name: 'AGCE',
    description: '',
    technologies: ['JavaScript', 'JQuery']
  },
  {
    name: 'Factoring Security',
    description: 'Design and Create UI Kit template for custom CMS develop with angularJS',
    technologies: ['AngularJS', 'HTML', 'CSS']
  },
  {
    name: 'Servicio Nacional del Patrimonio Cultural',
    description: 'Develop responsive UI for main website...',
    technologies: ['JavaScript', 'HTML', 'CSS']
  },
  {
    name: 'Maui and Sons',
    description: 'Develop Landing page for new summer season',
    technologies: ['Wordpress', 'HTML', 'CSS']
  }
]
export default projects
