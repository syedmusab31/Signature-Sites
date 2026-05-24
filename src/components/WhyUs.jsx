import { useInView } from '../hooks/useInView';

const points = [
  { num: '01', title: 'Strategy Before Design', desc: "We don't open a design tool until we understand your business, your audience, and what a win looks like for you. Every decision has a reason behind it." },
  { num: '02', title: 'Conversion-First Thinking', desc: "Beautiful design is table stakes. We design every page with a conversion goal in mind. The right hierarchy, the right message, the right moment to ask for action." },
  { num: '03', title: 'Premium Brand Positioning', desc: "Your website should position you as the obvious choice, not just one of many. We bring a refined aesthetic sensibility that elevates how your brand is perceived." },
  { num: '04', title: 'Clear Communication', desc: "No chasing. No guessing. You'll always know what's happening, what's next, and why. We treat your project with the same seriousness you do." },
  { num: '05', title: 'Reliable Delivery', desc: "Deadlines matter. We set realistic timelines and we hold to them. When we say your site will be ready - It will be." },
  { num: '06', title: 'Genuine Business Focus', desc: "We're not here to win design awards. We're here to help you win more clients. Growth is the metric that matters and we design with that at the center." }
];

export default function WhyUs() {
  const [ref, isInView] = useInView();

  return (
    <section id="why-us" className="py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted mb-4">Why Signature Sites</p>
            <h2 className="font-display text-4xl md:text-5xl font-800 tracking-tighter mb-6">Not Another Agency. A Strategic Growth Partner.</h2>
            <p className="text-muted text-lg leading-relaxed">Most web designers build websites. We build business assets with strategy, intent, and a clear eye on what actually moves the needle for your growth.</p>
          </div>
          <div className={`bg-zinc-100 p-8 rounded-2xl flex items-center ${isInView ? 'animate-fade-in-up' : 'opacity-0'} delay-100`}>
            <blockquote>
              <p className="text-xl md:text-2xl font-display font-600 leading-snug mb-6">"The difference between a $300 website and a $10,000 website isn't the number of pages. It's the thinking behind every single decision."</p>
              <cite className="text-sm text-muted not-italic">— Signature Sites Design Philosophy</cite>
            </blockquote>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <div key={i} className={`group ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${(i+1)*100}ms` }}>
              <span className="text-xs font-mono text-muted">{point.num}</span>
              <h3 className="font-display text-xl font-700 mt-2 mb-3">{point.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}