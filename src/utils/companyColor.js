const palette = ['#6d3bff', '#00c2d6', '#ff6b6b', '#f5a524', '#2dd4bf', '#818cf8', '#f472b6']

export function companyColor(name) {
  let hash = 0
  for (let i = 0; i < name.length; i += 1) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  return palette[Math.abs(hash) % palette.length]
}

export function companyInitials(name) {
  const words = name.replace(/[—–-].*$/, '').trim().split(/\s+/)
  const letters = words.slice(0, 2).map((word) => word.charAt(0))
  return letters.join('').toUpperCase()
}
