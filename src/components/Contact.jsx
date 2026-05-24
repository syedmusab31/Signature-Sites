import { useInView } from '../hooks/useInView';

export default function Contact() {
  const [ref, isInView] = useInView();

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-foreground text-background">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-400 mb-4">Ready to Elevate Your Brand?</p>
            <h2 className="font-display text-4xl md:text-5xl font-800 tracking-tighter mb-6">Let's Build Something Worth Being Proud Of.</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">Your next client is already searching for what you offer. The question is whether your website gives them a reason to choose you. Let's make sure it does.</p>
            
            <div className="space-y-4 mb-8">
              {[
                'Free 30-minute discovery call',
                'No commitment required',
                'Response within 24 hours',
                'Honest advice, even if we\'re not the right fit'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-background"></div>
                  <span className="text-sm text-zinc-300">{item}</span>
                </div>
              ))}
            </div>

            {/* Left Column CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-4 text-sm font-medium rounded-full hover:bg-zinc-200 transition-colors duration-300 group">
                Book Call now
                <svg className="group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </a>
              <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-background px-8 py-4 text-sm font-medium rounded-full transition-colors duration-300">
                Whatsapp me
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'} delay-200`}>
            <div className="bg-zinc-900 p-8 md:p-10 rounded-2xl">
              <p className="text-sm text-zinc-400 mb-8">Tell us about your project. We'll be in touch within 24 hours.</p>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs text-zinc-500 mb-2 uppercase tracking-wider">Your Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-zinc-700 py-3 text-background focus:outline-none focus:border-zinc-400 transition-colors placeholder-zinc-600" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs text-zinc-500 mb-2 uppercase tracking-wider">Your Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-zinc-700 py-3 text-background focus:outline-none focus:border-zinc-400 transition-colors placeholder-zinc-600" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-xs text-zinc-500 mb-2 uppercase tracking-wider">Business Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-zinc-700 py-3 text-background focus:outline-none focus:border-zinc-400 transition-colors placeholder-zinc-600" placeholder="Company Inc." />
                </div>
                <div>
                  <label className="block text-xs text-zinc-500 mb-2 uppercase tracking-wider">Project Overview</label>
                  <textarea rows="4" className="w-full bg-transparent border-b border-zinc-700 py-3 text-background focus:outline-none focus:border-zinc-400 transition-colors placeholder-zinc-600 resize-none" placeholder="Tell us about your goals..."></textarea>
                </div>
                <button type="submit" className="w-full bg-background text-foreground py-4 rounded-full font-medium text-sm hover:bg-zinc-200 transition-colors duration-300 mt-4">
                  Send Email Now →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}