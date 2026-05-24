import { useInView } from '../hooks/useInView';

export default function Hero() {
    const [ref, isInView] = useInView();

    return (
        // min-h-screen ensures it fills the viewport, creating a dramatic first impression
        <section className="relative min-h-screen flex items-center pt-32 pb-20 md:pt-44 md:pb-32 px-6 overflow-hidden">
            <div ref={ref} className="max-w-7xl mx-auto w-full">

                {/* Main Grid: 7 cols for Typography, 5 cols for Context */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-12 mb-20 md:mb-28">

                    {/* Left Column: Massive Staggered Typography */}
                    <div className={`lg:col-span-7 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>

                        {/* Dramatic typographic scale with staggered indentation and outline effect */}
                        <h1 className="font-display text-[3rem] leading-[0.95] md:text-[5rem] lg:text-[6.5rem] xl:text-[7.5rem] font-800 tracking-tighter">
                            <span className="block">Your Website</span>
                            <span className="block pl-[5%] md:pl-[20%] text-stroke">Should Be Working</span>
                            <span className="block">as Hard as You Are.</span>
                        </h1>
                    </div>

                    {/* Right Column: Context & CTA aligned to bottom */}
                    <div className={`lg:col-span-5 flex flex-col justify-end lg:pb-4 ${isInView ? 'animate-fade-in-up' : 'opacity-0'} delay-200`}>
                        {/* Premium Stats Bar: Now positioned on the right, above the subheadline */}
                        <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-border">
                            <div>
                                <p className="font-display text-3xl md:text-4xl font-800 tracking-tighter">50+</p>
                                <p className="text-[10px] md:text-xs text-muted mt-1 uppercase tracking-wider">Delivered</p>
                            </div>
                            <div>
                                <p className="font-display text-3xl md:text-4xl font-800 tracking-tighter">3×</p>
                                <p className="text-[10px] md:text-xs text-muted mt-1 uppercase tracking-wider">Lead Growth</p>
                            </div>
                            <div>
                                <p className="font-display text-3xl md:text-4xl font-800 tracking-tighter">98%</p>
                                <p className="text-[10px] md:text-xs text-muted mt-1 uppercase tracking-wider">Satisfaction</p>
                            </div>
                        </div>

                        <p className="text-base md:text-lg text-muted leading-relaxed mb-8 md:mb-10 max-w-lg">
                            We design and build high-converting websites for founders, service businesses, and personal brands who are serious about growth. No templates. No guesswork. Just a site that looks good and performs exceptionally.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-6">
                            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium rounded-full hover:bg-muted transition-colors duration-300 group">
                                Start a Project
                                <svg className="group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                            </a>
                            <a href="#work" className="inline-flex items-center justify-center gap-2 border border-border px-8 py-4 text-sm font-medium rounded-full hover:border-foreground transition-colors duration-300">
                                View Our Work
                            </a>
                        </div>

                        <p className="text-[11px] text-muted">No commitment required · Response within 24 hours</p>
                    </div>
                </div>

            </div>
        </section>
    );
}