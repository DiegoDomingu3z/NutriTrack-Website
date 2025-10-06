import { useEffect, useState } from 'react'
import './App.css'
import Landing from './pages/Landing'
import Privacy from './pages/Privacy'
import { gaEvent } from './analytics'

type Route = 'home' | 'privacy'

function getRoute(): Route {
  const hash = window.location.hash || '#/'
  if (hash.startsWith('#/privacy')) return 'privacy'
  return 'home'
}

export default function App() {
  const [route, setRoute] = useState<Route>(getRoute())

  useEffect(() => {
    const onHashChange = () => {
      const newRoute = getRoute()
      setRoute(newRoute)

      if (import.meta.env.PROD) {
        gaEvent('page_view', {
          page_title:
            newRoute === 'privacy'
              ? 'Privacy • NutriTrack'
              : 'NutriTrack — Track Nutrition Smarter',
          page_location: window.location.href,
          page_path: window.location.hash,
        })
      }
    }

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