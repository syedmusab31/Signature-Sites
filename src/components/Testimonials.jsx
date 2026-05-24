import { useInView } from '../hooks/useInView';

const testimonials = [
  {
    quote: "The system Musab developed replaced our spreadsheet-based workflow completely. It made our operations faster, more accurate, and much easier to manage on a daily basis.",
    name: 'Aaron Bloyer',
    title: 'Founder, Audatime LLC · USA'
  },
  {
    quote: "He created a clean and professional landing page that clearly communicates our mission and services. It helped us present our business with much more confidence.",
    name: 'Ramsey Paye Willie',
    title: 'Founder, Happy AgriCompany · Liberia'
  },
  {
    quote: "The application improved our workflow speed and reliability significantly. Tasks that used to take longer are now handled much more efficiently.",
    name: 'Bill',
    title: 'Government Sector · South Africa'
  },
  {
    quote: "The website gave our product a strong and professional presence. The structure and clarity made it much easier for users to understand what we offer.",
    name: 'Mohsin Bajja',
    title: 'Product Owner · Morocco'
  },
  {
    quote: "Musab built a system that allowed us to launch and operate smoothly from the start. It matched our business needs perfectly.",
    name: 'Aldo',
    title: 'Founder, TalentMesh · UK'
  },
  {
    quote: "Combining our application with a proper website improved how we present our business. It made a big difference in how clients and partners perceive us.",
    name: 'Martin',
    title: 'Founder, Shipday · Switzerland'
  }
];

export default function Testimonials() {
  const [ref, isInView] = useInView();

  return (
    <section id="testimonials" className="py-24 md:py-40 px-6 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className={`max-w-2xl mb-16 md:mb-24 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase text-muted mb-4">Client Stories</p>
          <h2 className="font-display text-4xl md:text-6xl font-800 tracking-tighter">What Our Clients Say</h2>
        </div>

        {/* Staggered 3-Column Masonry */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-16 md:gap-y-20">
          
          {/* Column 1 */}
          <div className="space-y-16 md:space-y-20">
            {[testimonials[0], testimonials[3]].map((t, i) => (
              <TestimonialCard key={i} t={t} isInView={isInView} delay={i * 100} />
            ))}
          </div>

          {/* Column 2 - Pushed down on desktop for stagger effect */}
          <div className="space-y-16 md:space-y-20 md:pt-24">
            {[testimonials[1], testimonials[4]].map((t, i) => (
              <TestimonialCard key={i} t={t} isInView={isInView} delay={200 + (i * 100)} />
            ))}
          </div>

          {/* Column 3 - Slight push */}
          <div className="space-y-16 md:space-y-20 md:pt-12">
            {[testimonials[2], testimonials[5]].map((t, i) => (
              <TestimonialCard key={i} t={t} isInView={isInView} delay={400 + (i * 100)} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// Extracted Card Component for cleanliness
function TestimonialCard({ t, isInView, delay }) {
  return (
    <div className={`group cursor-default ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${delay}ms` }}>
      {/* Animated Line Indicator - Replaces the generic quote mark */}
      <div className="w-8 h-[1px] bg-foreground/20 mb-6 group-hover:w-12 group-hover:bg-foreground transition-all duration-500"></div>
      
      {/* Quote - Using Serif for elegant typographic contrast */}
      <p className="text-lg md:text-xl font-serif italic leading-relaxed text-foreground/80 mb-8 transition-colors duration-500 group-hover:text-foreground">
        {t.quote}
      </p>
      
      {/* Attribution - Clean and tight */}
      <div>
        <p className="font-display text-sm font-700 tracking-tight">{t.name}</p>
        <p className="text-xs text-muted mt-1">{t.title}</p>
      </div>
    </div>
  );
}