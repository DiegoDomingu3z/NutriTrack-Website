import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 sm:pt-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold sm:text-5xl">
              Track your nutrition, build better habits.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              NutriTrack helps you log meals, analyze macros, and stay
              consistent with personalized insights. Simple, fast, and built
              for real life.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#/privacy"
                className="rounded-md bg-[#0432FF] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0028d8]"
              >
                Read Privacy
              </a>
            </div>

          </div>

          <div className="relative">
            {/* Fallback placeholder visual */}
            <img src="flyer.png" className="aspect-[4/3] w-full   " />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">Why NutriTrack?</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Fast meal logging",
              desc: "Save time with quick-add foods and recent meals.",
            },
            {
              title: "Macro insights",
              desc: "Understand protein, carbs, fats, and calories at a glance.",
            },
            {
              title: "Habit streaks",
              desc: "Stay motivated with daily goals and streak tracking.",
            },
            {
              title: "Personalized targets",
              desc: "Calibrated to your goals: cut, bulk, or maintain.",
            },
            {
              title: "Privacy-first",
              desc: "Your data stays yours. Export or delete anytime.",
            },
            {
              title: "Cross-device sync",
              desc: "Use it on web and mobile, seamlessly.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-3 h-8 w-8 rounded">
                <img src="/logo.png" className="h-8 w-8 rounded" />
              </div>
              <h3 className="text-base font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6">
        <div className="rounded-2xl bg-[#0432FF] px-6 py-10 text-white sm:px-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold sm:text-3xl">Start tracking today</h2>
            <p className="mt-2 text-white/90">
              Join others building sustainable nutrition habits with NutriTrack.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {/* <a
                href="#/"
                className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-black "
              >
                Create Free Account
              </a> */}
              <a
                href="# /privacy"
                className="rounded-md border border-white/30 px-4 py-2 text-sm font-semibold text-white hover:bg-white hover:text-black"
              >
                Our Privacy
              </a>
            </div>
          </div>
        </div>
      </section >

      <div className="mt-16" />
      <Footer />
    </div >
  )
}

