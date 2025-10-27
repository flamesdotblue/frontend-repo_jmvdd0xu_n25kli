import { MessageCircle, Layers, ShieldCheck, Users } from 'lucide-react';

const features = [
  {
    icon: MessageCircle,
    title: 'Timed Comments',
    desc: 'Post thoughts at exact moments. They appear as the video hits that timestamp.',
    badge: 'Engagement',
  },
  {
    icon: Layers,
    title: 'Danmaku Overlay',
    desc: 'Live floating messages for Premieres and streams with safe‑zone clipping.',
    badge: 'Realtime',
  },
  {
    icon: Users,
    title: 'Community‑First',
    desc: 'Threaded replies, polls, Q&A, and member‑only interactions that feel authentic.',
    badge: 'Social',
  },
  {
    icon: ShieldCheck,
    title: 'Healthy by Design',
    desc: 'Ad‑minimal experience with smart moderation to curb low‑quality spam.',
    badge: 'Trust',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-8 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          Interaction that enhances storytelling
        </h2>
        <p className="mt-3 text-neutral-600">
          VidHive blends community tools into the player so creators and viewers can connect
          without distractions.
        </p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <article
            key={f.title}
            className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            aria-label={f.title}
          >
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[#FFB800]/15 px-2 py-1 text-xs font-medium text-[#6C2BD9]">
                {f.badge}
              </span>
            </div>
            <div className="mt-4 flex items-start gap-3">
              <f.icon className="h-6 w-6 text-[#6C2BD9]" aria-hidden />
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">{f.title}</h3>
                <p className="mt-1 text-sm text-neutral-600">{f.desc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
