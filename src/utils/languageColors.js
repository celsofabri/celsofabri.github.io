export const languageColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Kotlin: '#A97BFF',
  Python: '#3572A5',
  Java: '#b07219',
  Swift: '#F05138',
  Go: '#00ADD8',
  Rust: '#dea584',
  Shell: '#89e051',
}

export function languageColor(language) {
  return languageColors[language] || 'var(--color-text-muted)'
}
