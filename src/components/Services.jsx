import { useInView } from '../hooks/useInView';

const services = [
  {
    title: 'Landing Pages',
    sub: 'One focused goal. One powerful page.',
    desc: "Whether you're launching a product, promoting a service, or capturing leads, your landing page needs to do one thing: convert. We build pages that communicate clearly, build trust instantly, and guide visitors toward a single action.",
    ideal: 'Product launches · Lead gen campaigns · Service promotions',
    popular: false
  },
  {
    title: 'Business Websites',
    sub: 'Your most valuable business asset done properly.',
    desc: "A business website isn't just a website, It's your lead generation engine, your credibility signal, and your brand's first impression. We design full websites structured to convert and positioned to attract the clients you want.",
    ideal: 'Startups · Service businesses · Consultants · Personal brands',
    popular: true
  },
  {
    title: 'Website Redesigns',
    sub: 'Your business has grown. Your website hasn\'t.',
    desc: "If your current site feels outdated, underperforms, or no longer reflects the quality of your work, It's costing you clients. We take what exists and completely transform it: refined visuals, stronger messaging, faster performance.",
    ideal: 'Established businesses · Rebrands · Post-funding pivots',
    popular: false
  }
];

export default function Services() {
  const [ref, isInView] = useInView();

  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-foreground text-background">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`max-w-2xl mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-400 mb-4">Our Services</p>
          <h2 className="font-display text-4xl md:text-5xl font-800 tracking-tighter mb-6">Three Ways We Help You Grow</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">Whether you're starting from scratch or scaling an existing business, we have a focused solution for where you are right now.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <div key={i} className={`group relative p-8 rounded-2xl border ${service.popular ? 'bg-background text-foreground border-foreground' : 'bg-foreground text-background border-zinc-800 hover:border-zinc-600'} transition-all duration-500 flex flex-col ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${(i+1)*150}ms` }}>
              {service.popular && (
                <span className="absolute top-4 right-4 bg-foreground text-background text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded-full">Most Popular</span>
              )}
              <div className="mb-6">
                <div className="w-10 h-10 border border-current rounded-lg flex items-center justify-center text-lg mb-4 opacity-50">◱</div>
                <h3 className="font-display text-2xl font-700 mb-2">{service.title}</h3>
                <p className="text-sm opacity-70">{service.sub}</p>
              </div>
              <p className="text-sm opacity-70 leading-relaxed mb-6 flex-grow">{service.desc}</p>
              <div className="mb-8">
                <p className="text-xs uppercase tracking-wider opacity-50 mb-2">Ideal for</p>
                <p className="text-sm font-medium">{service.ideal}</p>
              </div>
              {/* <div className="mt-auto pt-6 border-t border-current/10">
                <p className="font-display text-xl font-800">{service.price}</p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}