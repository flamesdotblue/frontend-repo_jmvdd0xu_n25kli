import Spline from '@splinetool/react-spline';
import { Rocket, PlaySquare } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden rounded-b-3xl">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Readability gradient overlay (does not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-900/40 via-neutral-900/20 to-neutral-900/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6 text-neutral-100">
        <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900/50 px-3 py-1 text-xs backdrop-blur">
          <Rocket className="h-3.5 w-3.5 text-[#FFB800]" aria-hidden />
          <span className="uppercase tracking-wide">VidHive • v1.0 Pre‑Alpha</span>
        </div>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          The Creative Hive for Meaningful Video Experiences
        </h1>
        <p className="mt-4 max-w-2xl text-base text-neutral-100/90 sm:text-lg">
          A social‑first, ad‑minimal platform where audiences interact with creators using
          timed comments, danmaku, polls, donations, and memberships.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-lg bg-[#FFB800] px-4 py-2 font-medium text-neutral-900 shadow hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#FFB800]/70"
            aria-label="See a product preview"
          >
            <PlaySquare className="h-5 w-5" aria-hidden />
            Preview Experience
          </a>
          <a
            href="#invite"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 font-medium text-white backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            Request Invite
          </a>
        </div>
      </div>
    </section>
  );
}
