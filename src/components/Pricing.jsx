import { useInView } from '../hooks/useInView';

const tiers = [
  {
    name: 'Landing Page',
    price: 'From $500',
    sub: 'Scope-dependent · Single-page',
    features: ['Strategy & positioning', 'Copy structure', 'Custom design', 'Development & launch', '2 rounds of revisions'],
    cta: 'Start with a Landing Page →',
    popular: false
  },
  {
    name: 'Business Website',
    price: 'From $1,500',
    sub: 'Multi-page · Custom scope',
    features: ['Everything in Landing Page', 'Multi-page architecture', 'Brand strategy session', 'SEO-ready structure', 'Conversion-optimized UX', 'Priority support'],
    cta: 'Build My Website →',
    popular: true
  },
  {
    name: 'Website Redesign',
    price: 'From $1,100',
    sub: 'Audit-first · Custom scope',
    features: ['Full site audit', 'Visual overhaul', 'Copy refinement', 'Performance optimization', 'Structural improvements'],
    cta: 'Redesign My Site →',
    popular: false
  }
];

export default function Pricing() {
  const [ref, isInView] = useInView();

  return (
    <section id="pricing" className="py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <p className="text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase text-muted mb-4">Pricing</p>
            <h2 className="font-display text-4xl md:text-5xl font-800 tracking-tighter mb-6">An Investment in Your Business, Not Just a Line Item.</h2>
            <p className="text-muted text-lg leading-relaxed">We're transparent about pricing because we respect your time. Every project is scoped individually but here's where things typically start.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {tiers.map((tier, i) => (
            <div key={i} className={`relative flex flex-col p-8 rounded-2xl border ${tier.popular ? 'bg-foreground text-background border-foreground' : 'bg-white border-border hover:border-muted'} transition-all duration-500 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${(i+1)*150}ms` }}>
              {tier.popular && (
                <span className="absolute top-4 right-4 bg-background text-foreground text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded-full">Most Popular</span>
              )}
              <div className="mb-8">
                <h3 className="font-display text-xl font-700 mb-2">{tier.name}</h3>
                <p className="font-display text-4xl font-800 tracking-tighter mb-2">{tier.price}</p>
                <p className="text-sm opacity-60">{tier.sub}</p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <svg className={`w-4 h-4 ${tier.popular ? 'text-zinc-400' : 'text-muted'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {feat}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-auto block w-full text-center py-3 px-6 rounded-full text-sm font-medium transition-colors duration-300 ${tier.popular ? 'bg-background text-foreground hover:bg-zinc-200' : 'bg-foreground text-background hover:bg-muted'}`}>
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center ${isInView ? 'animate-fade-in-up' : 'opacity-0'} delay-500`}>
          <p className="text-sm text-muted max-w-xl mx-auto">Final pricing is confirmed after a discovery call, where we understand your scope, goals, and timeline. We only take on projects we're confident we can deliver exceptionally.</p>
        </div>
      </div>
    </section>
  );
}