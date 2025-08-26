export function initTheme() {
  const stored = localStorage.getItem('theme') as 'dark' | 'light' | null
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const mode: 'dark' | 'light' = stored ?? (prefersDark ? 'dark' : 'light')
  setTheme(mode)
}

export function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark')
  setTheme(isDark ? 'light' : 'dark')
}

export function setTheme(mode: 'dark' | 'light') {
  const root = document.documentElement
  if (mode === 'dark') root.classList.add('dark')
  else root.classList.remove('dark')
  localStorage.setItem('theme', mode)
}