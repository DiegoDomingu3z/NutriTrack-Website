import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="prose prose-gray mt-6 max-w-none">
          <h1 className="text-4xl font-bold mb-4">NutriTrack Privacy Policy</h1>
          <p className="text-zinc-600 mb-6">Effective date: September 22, 2025</p>

          <p className="bg-zinc-100 p-4 rounded-lg border border-zinc-200 mb-6">
            We collect the data you give us (account info,
            food and weight logs, calories burned) to help you track your progress.
            We don’t sell your data. Everything is deleted if you delete your
            account. Must be 18+ to use.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-3">1. Who we are</h2>
          <p>
            NutriTrack provides a mobile app that helps you
            log food, calories, and fitness progress. If you have questions about
            this Privacy Policy, contact us at {" "}
            <a href="mailto:support@nutritrack-app.com" className="text-brand underline">support@nutritrack-app.com</a>.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-3">2. What we collect</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Name and email (when creating an account)</li>
            <li>Age, gender, weight, activity level, and goals</li>
            <li>Food logs and types of foods you eat</li>
            <li>Weight logs</li>
            <li>Calories burned (via Apple HealthKit, if enabled)</li>
            <li>Basic analytics (via Firebase and Google Analytics)</li>
          </ul>

          <p className="mt-4">
            We do <strong>not</strong> collect precise location data or device info.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-3">3. How we use data</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To provide and maintain your account</li>
            <li>To calculate calories, macros, and show progress</li>
            <li>To store your food and weight logs until you delete them</li>
            <li>To improve the app through analytics and crash reports</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-3">4. Sharing</h2>
          <p>
            We don’t sell your data. We only share it with trusted service providers
            who help us run the app (Firebase, Google Analytics, Apple HealthKit).
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-3">5. Data retention</h2>
          <p>
            Your food logs, weight logs, and account data are kept while you use the
            app. If you delete your account, all personal data is removed from our
            active systems. Backups are cleared within 90 days.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-3">6. Security</h2>
          <p>
            We use encryption, access controls, and secure storage. No system is
            100% secure, but we work to protect your information.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-3">7. Children</h2>
          <p>
            NutriTrack is only for users 18+. We don’t knowingly collect information
            from anyone under 18.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-3">8. Changes</h2>
          <p>
            We may update this Privacy Policy as needed. We’ll post changes here and
            update the effective date.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-3">9. Contact</h2>
          <p>
            Questions? Contact us at {" "}
            <a href="mailto:privacy@yourdomain.com" className="text-brand underline"
            >support@nutritrack-app.com</a>.
          </p>
        </section>

        <div className="mt-8">
          <a href="#/" className="text-sm font-semibold text-[#0432FF] hover:text-[#0028d8]">
            ← Back to Home
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}

