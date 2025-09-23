import React from 'react'

type Props = {
  onNavigate?: (to: string) => void
}

export default function Navbar({ onNavigate }: Props) {
  const handleNav = (to: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    if (onNavigate) onNavigate(to)
    window.location.hash = to
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#/" onClick={handleNav('#/')} className="flex items-center gap-2">
          {/* Placeholder logo */}
          <img src="/logo.png" className="h-8 w-8 rounded" />
          <span className="text-lg font-semibold text-gray-900">NutriTrack</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#/" onClick={handleNav('#/')} className="text-sm font-medium text-gray-700 hover:text-gray-900">Home</a>
          <a href="#/" onClick={handleNav('#/privacy')} className="rounded-md bg-[#0432FF] px-3 py-2 text-sm font-semibold text-white hover:bg-[#0028d8]">Privacy</a>
        </nav>
      </div>
    </header>
  )
}

