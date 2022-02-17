type Repos = {
  title: string,
  url: string
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
    { title: 'GitHub', url: '//github.com/rholo' },
    { title: 'GitLab', url: 'https://gitlab.com/rhockr' },
    { title: 'NPM', url: 'https://www.npmjs.com/~rholo' }
  ],
  links: [
    { title: 'LinkedIn', url: '//linkedin.com/in/rholo/' },
    { title: 'Gist', url: 'https://gist.github.com/rholo' },
    { title: 'Codepen', url: 'https://codepen.io/rholo' },
    { title: 'Dev.to', url: 'https://dev.to/rholo' }
  ],
}

export default profile;
