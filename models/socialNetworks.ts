export interface ISocialNetworks {
  name: string,
  url: string,
  id: string
}
export const socialNetworks: ISocialNetworks[] = [
  { id: 'linkedin', name: 'LinkedIn', url: '//linkedin.com/in/rholo/' },
  { id: 'npm', name: 'NPM', url: 'https://www.npmjs.com/~rholo' },
  { id: 'gist', name: 'Gist', url: 'https://gist.github.com/rholo' },
  { id: 'codepen', name: 'Codepen', url: 'https://codepen.io/rholo' },
  { id: 'devto', name: 'Dev.to', url: 'https://dev.to/rholo' }
]

export const repositories: ISocialNetworks[] = [
  { id: 'github', name: 'GitHub', url: '//github.com/rholo' },
  { id: 'gitlab', name: 'GitLab', url: 'https://gitlab.com/rhockr' },
]