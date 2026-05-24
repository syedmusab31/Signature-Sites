import { useInView } from '../hooks/useInView';

const clients = [
    { name: 'Shipday', index: '01' },
    { name: 'Pilaris', index: '02' },
    { name: 'Happy Liberia', index: '03' },
    { name: 'Bud Vizion', index: '04' },
    { name: 'The LintStones', index: '05' },
    { name: 'Orbis Labs', index: '06' },
];

export default function TrustBar() {
    const [ref, isInView] = useInView();

    return (
        <section ref={ref} className="py-20 md:py-28 px-6 border-y border-border">
            <div className={`max-w-7xl mx-auto ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>

                {/* Header - Left aligned for editorial feel */}
                <div className="mb-12 md:mb-16">
                    <p className="text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase text-muted max-w-sm">
                        Trusted by founders and businesses across the World
                    </p>
                </div>

                {/* 
          Interactive Client Index 
          - 'group' on the container allows us to trigger sibling fading on hover
          - Staggered grid via 'md:pt-12' on the second column breaks the rigid template look
        */}
                <div className="grid grid-cols-2 gap-x-8 md:gap-x-16 group">

                    {/* Column 1 */}
                    <div className="space-y-0">
                        {clients.slice(0, 3).map((client) => (
                            <div
                                key={client.index}
                                className="flex items-center justify-between py-5 md:py-6 border-b border-border cursor-default transition-all duration-500 opacity-100 group-hover:opacity-30 hover:!opacity-100 hover:border-foreground"
                            >
                                <span className="font-display text-2xl md:text-4xl lg:text-5xl font-700 tracking-tighter transition-transform duration-500 hover:translate-x-2">
                                    {client.name}
                                </span>
                                <span className="text-[10px] font-mono text-muted hidden md:block">{client.index}</span>
                            </div>
                        ))}
                    </div>

                    {/* Column 2 - Staggered */}
                    <div className="space-y-0 md:pt-12">
                        {clients.slice(3, 6).map((client) => (
                            <div
                                key={client.index}
                                className="flex items-center justify-between py-5 md:py-6 border-b border-border cursor-default transition-all duration-500 opacity-100 group-hover:opacity-30 hover:!opacity-100 hover:border-foreground"
                            >
                                <span className="font-display text-2xl md:text-4xl lg:text-5xl font-700 tracking-tighter transition-transform duration-500 hover:translate-x-2">
                                    {client.name}
                                </span>
                                <span className="text-[10px] font-mono text-muted hidden md:block">{client.index}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}