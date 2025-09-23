import { useEffect, useState } from 'react'
import './App.css'
import Landing from './pages/Landing'
import Privacy from './pages/Privacy'

type Route = 'home' | 'privacy'

function getRoute(): Route {
  const hash = window.location.hash || '#/'
  if (hash.startsWith('#/privacy')) return 'privacy'
  return 'home'
}

export default function App() {
  const [route, setRoute] = useState<Route>(getRoute())

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    if (route === 'privacy') document.title = 'Privacy • NutriTrack'
    else document.title = 'NutriTrack — Track Nutrition Smarter'
  }, [route])

  if (route === 'privacy') return <Privacy />
  return <Landing />
}
