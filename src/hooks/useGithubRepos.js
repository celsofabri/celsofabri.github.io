import { useEffect, useState } from 'react'

export function useGithubRepos(username) {
  const [repos, setRepos] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    if (!username) return

    let cancelled = false
    setStatus('loading')

    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`)
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API respondeu ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (cancelled) return
        const filtered = data
          .filter((repo) => !repo.fork && !repo.archived)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        setRepos(filtered)
        setStatus('success')
      })
      .catch(() => {
        if (!cancelled) setStatus('error')
      })

    return () => {
      cancelled = true
    }
  }, [username])

  return { repos, status }
}
