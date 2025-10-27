import Hero from './components/Hero.jsx';
import FeatureGrid from './components/FeatureGrid.jsx';
import Monetization from './components/Monetization.jsx';
import FeedbackCTA from './components/FeedbackCTA.jsx';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-20 w-full border-b border-neutral-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3" aria-label="Primary">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#FFB800]" />
            <span>VidHive</span>
          </a>
          <div className="hidden items-center gap-6 sm:flex">
            <a href="#features" className="text-sm text-neutral-700 hover:text-neutral-900">Features</a>
            <a href="#monetization" className="text-sm text-neutral-700 hover:text-neutral-900">Monetization</a>
            <a href="#feedback" className="text-sm text-neutral-700 hover:text-neutral-900">Feedback</a>
            <a href="#invite" className="rounded-lg bg-neutral-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-neutral-800">Request Invite</a>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <FeatureGrid />
        <Monetization />
        <FeedbackCTA />
      </main>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} VidHive — The Creative Hive for Meaningful Video Experiences</p>
          <div className="flex items-center gap-4 text-sm text-neutral-600">
            <a href="mailto:creator@vidhive.example" className="hover:text-neutral-900">Contact</a>
            <a href="#privacy" className="hover:text-neutral-900">Privacy</a>
            <a href="#terms" className="hover:text-neutral-900">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
