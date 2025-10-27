import { Mail, Star } from 'lucide-react';

export default function FeedbackCTA() {
  return (
    <section id="feedback" className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-2xl bg-neutral-900 px-6 py-10 text-neutral-100">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-2xl font-semibold">We value thoughtful feedback</h3>
            <p className="mt-2 max-w-2xl text-neutral-300">
              Help shape VidHive — share ideas, report issues, and request features. Select creators will
              get invite codes during Pre‑Alpha.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:creator@vidhive.example?subject=VidHive%20Feedback"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-medium text-neutral-900 shadow hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-white/60"
              aria-label="Send feedback via email"
            >
              <Mail className="h-5 w-5" aria-hidden />
              Send Feedback
            </a>
            <a
              href="#roadmap"
              className="inline-flex items-center gap-2 rounded-lg bg-[#FFB800] px-4 py-2 font-medium text-neutral-900 shadow hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#FFB800]/70"
            >
              <Star className="h-5 w-5" aria-hidden />
              View Roadmap
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
