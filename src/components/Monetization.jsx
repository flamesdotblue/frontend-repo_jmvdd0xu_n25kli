import { DollarSign, Crown, Gift } from 'lucide-react';

export default function Monetization() {
  return (
    <section id="monetization" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Ethical monetization that respects attention
          </h2>
          <p className="mt-3 text-neutral-600">
            Support creativity with donations, memberships, and Hive+. No intrusive auto‑ads —
            just transparent value for value.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3">
              <Gift className="mt-0.5 h-5 w-5 text-[#6C2BD9]" aria-hidden />
              <div>
                <p className="font-medium text-neutral-900">Donations</p>
                <p className="text-sm text-neutral-600">Razorpay and Stripe provider support with receipts.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Crown className="mt-0.5 h-5 w-5 text-[#6C2BD9]" aria-hidden />
              <div>
                <p className="font-medium text-neutral-900">Memberships</p>
                <p className="text-sm text-neutral-600">Tiers with badges and exclusive polls for supporters.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <DollarSign className="mt-0.5 h-5 w-5 text-[#6C2BD9]" aria-hidden />
              <div>
                <p className="font-medium text-neutral-900">Hive+ Subscription</p>
                <p className="text-sm text-neutral-600">Ad‑light experience with early feature access.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-gradient-to-br from-[#FFB800]/20 to-[#6C2BD9]/10 p-5">
              <p className="text-sm font-medium text-neutral-800">Projected creator payout ratio</p>
              <p className="mt-2 text-3xl font-bold text-neutral-900">70%+</p>
              <p className="mt-1 text-xs text-neutral-600">after fees and platform costs</p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-[#6C2BD9]/20 to-[#FFB800]/10 p-5">
              <p className="text-sm font-medium text-neutral-800">Invite‑only pricing</p>
              <p className="mt-2 text-3xl font-bold text-neutral-900">Pre‑Alpha</p>
              <p className="mt-1 text-xs text-neutral-600">limited early access</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#invite"
              className="inline-flex items-center justify-center rounded-lg bg-[#6C2BD9] px-4 py-2 font-medium text-white shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#6C2BD9]/50"
            >
              Request Early Access
            </a>
            <a
              href="#learn-more"
              className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-4 py-2 font-medium text-neutral-900 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
