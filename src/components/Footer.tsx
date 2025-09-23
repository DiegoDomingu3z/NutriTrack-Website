export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row sm:px-6">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} NutriTrack. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a className="text-sm text-gray-600 hover:text-gray-900" href="#/">Home</a>
          <a className="text-sm text-gray-600 hover:text-gray-900" href="#/privacy">Privacy</a>
        </div>
      </div>
    </footer>
  )
}

