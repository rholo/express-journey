interface Repos {
  title: string,
  url: string,
  id: string
}
interface Profile {
  nickname: string,
  name: string,
  title: string,
  avatar: string,
  description: string,
  repos: Repos[],
  links: Repos[]
}
const profile: Profile = {
  nickname: 'Rholo',
  name: 'Rodrigo Ahumada',
  title: 'Front-end developer && UI designer',
  avatar: '//rholo.cl/assets/avatar.jpg',
  description: 'this is a demo with node and express!',
  repos: [
    { id: 'github', title: 'GitHub', url: '//github.com/rholo' },
    { id: 'gitlab', title: 'GitLab', url: 'https://gitlab.com/rhockr' },
  ],
  links: [
    { id: 'linkedin', title: 'LinkedIn', url: '//linkedin.com/in/rholo/' },
    { id: 'npm', title: 'NPM', url: 'https://www.npmjs.com/~rholo' },
    { id: 'gist', title: 'Gist', url: 'https://gist.github.com/rholo' },
    { id: 'codepen', title: 'Codepen', url: 'https://codepen.io/rholo' },
    { id: 'devto', title: 'Dev.to', url: 'https://dev.to/rholo' }
  ],
}

export default profile;
