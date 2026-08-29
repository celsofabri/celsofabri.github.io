// Vite só ajusta caminhos absolutos de asset (ex: '/avatar.jpg') para o `base`
// configurado quando eles aparecem no index.html. Caminhos vindos de dados em
// runtime (profile.js) precisam desse prefixo manualmente, ou quebram em
// produção quando o site é publicado numa subpasta (GitHub Pages de projeto).
export function asset(path) {
  if (!path) return path
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
