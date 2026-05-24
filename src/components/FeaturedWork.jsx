import { useInView } from '../hooks/useInView';

const projects = [
    {
        num: '01',
        category: 'Operations System',
        tag: 'Custom Web Application · United States',
        title: 'Replacing Spreadsheet-Based Operations with a Scalable Internal Platform',
        desc: 'Audatime LLC was managing core operations through spreadsheets, resulting in inefficiencies, manual errors, and slow workflows. We designed and developed a custom web-based system that automated processes, centralized operational data, and created a far more reliable workflow for daily business operations.',
        stats: [
            { metric: '↓ 60%', label: 'Manual work' },
            { metric: '100%', label: 'Centralized data' },
            { metric: 'Instant', label: 'Operations' }
        ],
        class: 'lg:col-span-7'
    },
    {
        num: '02',
        category: 'Landing Page',
        tag: 'Agriculture Company · Liberia',
        title: 'Building a Professional Online Presence That Instantly Builds Trust',
        desc: 'Happy AgriCompany lacked a clear digital presence to communicate its mission, services, and credibility. We created a focused landing page with structured messaging, trust-driven design, and a modern visual identity that positioned the company more professionally online.',
        stats: [
            { metric: 'High', label: 'User trust' },
            { metric: 'Clear', label: 'Positioning' },
            { metric: 'Modern', label: 'Identity' }
        ],
        class: 'lg:col-span-5 lg:mt-24'
    },
    {
        num: '03',
        category: 'Government App',
        tag: 'Performance Application · South Africa',
        title: 'Improving Workflow Speed with a Faster and More Reliable System',
        desc: 'An existing workflow system was slowing down day-to-day operations and reducing productivity. We developed a performance-focused web application optimized for speed, reliability, and smoother execution of operational processes across the system.',
        stats: [
            { metric: '↑ 40%', label: 'Speed increase' },
            { metric: 'Zero', label: 'Delays' },
            { metric: 'High', label: 'Reliability' }
        ],
        class: 'lg:col-span-5'
    },
    {
        num: '04',
        category: 'Business Website',
        tag: 'Product Platform · Morocco',
        title: 'Transforming a Product into a Credible and Professionally Positioned Brand',
        desc: 'The product had functionality but lacked a proper digital presence to explain its value clearly or establish trust with potential users. We designed and developed a clean business website focused on messaging clarity, modern presentation, and stronger product positioning.',
        stats: [
            { metric: 'Premium', label: 'Online look' },
            { metric: 'Sharp', label: 'Product clarity' },
            { metric: 'Strong', label: 'Confidence' }
        ],
        class: 'lg:col-span-7 lg:-mt-12'
    },
    {
        num: '05',
        category: 'Custom Platform',
        tag: 'Startup Launch · United Kingdom',
        title: 'Launching a Startup with a Business-Ready Platform Built for Real Users',
        desc: 'TalentMesh needed a functional system before launching publicly. We developed a tailored web application aligned with their workflows and operational requirements, giving the business a scalable foundation ready to support users from day one.',
        stats: [
            { metric: 'Ready', label: 'For launch' },
            { metric: 'Built', label: 'To scale' },
            { metric: 'Day 1', label: 'Operational' }
        ],
        class: 'lg:col-span-7'
    },
    {
        num: '06',
        category: 'Website Redesign',
        tag: 'SaaS Platform · Switzerland',
        title: 'Combining Product and Website into a Unified Business Experience',
        desc: 'Shipday already had a working application but lacked a polished website experience to support growth and present the business professionally. We transformed the product into a combined website and application experience with clearer structure, stronger branding, and improved presentation.',
        stats: [
            { metric: 'Unified', label: 'Web ecosystem' },
            { metric: 'Elevated', label: 'Perception' },
            { metric: 'Sleek', label: 'Presentation' }
        ],
        class: 'lg:col-span-5 lg:mt-16'
    }
];

export default function FeaturedWork() {
    const [ref, isInView] = useInView();

    // Renders high-end, responsive typographic mockups matching Option B concept
    const renderMockup = (num) => {
        switch (num) {
            case '01':
                return (
                    <div className="bg-zinc-950 text-[#FAFAFA] h-full w-full p-6 flex flex-col justify-between font-mono relative overflow-hidden border border-zinc-800">
                        <div className="flex justify-between items-center text-[9px] opacity-60">
                            <span>AUDATIME.OPS // SYS_ACTIVE</span>
                            <span className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                ONLINE
                            </span>
                        </div>
                        <div className="my-auto flex flex-col items-center">
                            <span className="font-display text-stroke text-5xl font-800 tracking-tighter text-zinc-800">-60%</span>
                            <span className="text-[9px] tracking-widest uppercase mt-2 text-zinc-500">Manual Overhead</span>
                        </div>
                        <div className="grid grid-cols-6 gap-1 h-6 opacity-40">
                            {[...Array(6)].map((_, idx) => (
                                <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded flex items-center justify-center text-[7px]">{idx * 20}%</div>
                            ))}
                        </div>
                    </div>
                );
            case '02':
                return (
                    <div className="bg-[#F7F4EF] text-[#2C3E2B] h-full w-full p-6 flex flex-col justify-between relative overflow-hidden border border-[#E9E4DB]">
                        <div className="flex justify-between items-center text-[9px] font-semibold tracking-wider font-mono">
                            <span className="text-xs font-bold font-display tracking-tight">H.AGRI</span>
                            <span>EST. 2025</span>
                        </div>
                        <div className="my-auto space-y-2 text-center">
                            <div className="h-px border-t border-dashed border-[#2C3E2B]/20 w-full"></div>
                            <p className="font-display text-base md:text-lg italic font-semibold leading-snug">"Cultivating digital credibility."</p>
                            <div className="h-px border-t border-dashed border-[#2C3E2B]/20 w-full"></div>
                        </div>
                        <div className="flex justify-between text-[8px] uppercase tracking-widest opacity-60 font-mono">
                            <span>LIBERIA // AF</span>
                            <span>CROP SECURITY</span>
                        </div>
                    </div>
                );
            case '03':
                return (
                    <div className="bg-white text-black h-full w-full p-6 flex flex-col justify-between border border-zinc-200 relative overflow-hidden font-mono">
                        <div className="flex justify-between items-center text-[9px] border-b border-zinc-100 pb-2">
                            <span>GOV.ZA // CORE_PORTAL</span>
                            <span>v4.09</span>
                        </div>
                        <div className="my-auto flex justify-between items-center">
                            <div>
                                <p className="text-[8px] uppercase tracking-wider text-zinc-400 mb-1">LATENCY REDUCTION</p>
                                <p className="font-display text-4xl font-800 tracking-tighter text-zinc-900">+40%</p>
                            </div>
                            <div className="space-y-1">
                                <div className="w-16 h-1.5 bg-zinc-950"></div>
                                <div className="w-12 h-1.5 bg-zinc-400"></div>
                                <div className="w-14 h-1.5 bg-zinc-200"></div>
                            </div>
                        </div>
                        <div className="text-[8px] text-zinc-400">STATUS: OPTIMIZED_CORE_NODE</div>
                    </div>
                );
            case '04':
                return (
                    <div className="bg-zinc-950 text-[#E2E8F0] h-full w-full p-6 flex flex-col justify-between relative overflow-hidden border border-zinc-900">
                        <div className="text-center opacity-10">
                            <span className="font-display text-[3rem] leading-none font-800 tracking-widest text-zinc-800 block select-none">MAROC</span>
                        </div>
                        <div className="my-auto text-center z-10">
                            <p className="text-[8px] font-mono uppercase tracking-[0.35em] text-zinc-500 mb-2">PRODUCT POSITIONING</p>
                            <h4 className="font-display text-lg font-700 tracking-tight text-white leading-snug">Sophisticated Presentation</h4>
                        </div>
                        <div className="flex justify-between text-[8px] font-mono text-zinc-500">
                            <span>© 2026</span>
                            <span>MOROCCO // CASABLANCA</span>
                        </div>
                    </div>
                );
            case '05':
                return (
                    <div className="bg-zinc-900 text-[#00E5FF] h-full w-full p-6 flex flex-col justify-between font-mono relative overflow-hidden border border-zinc-800">
                        <div className="flex justify-between items-center text-[9px] opacity-75">
                            <span>TALENTMESH.IO</span>
                            <span className="text-white">LAUNCH_READY</span>
                        </div>
                        <div className="my-auto space-y-4">
                            <div className="flex justify-around items-center">
                                <div className="w-9 h-9 rounded-full border border-[#00E5FF] flex items-center justify-center text-[9px] text-[#00E5FF]">UI</div>
                                <div className="h-px bg-[#00E5FF]/30 flex-grow mx-2 border-t border-dashed"></div>
                                <div className="w-9 h-9 rounded-full border border-white text-white flex items-center justify-center text-[9px]">SYS</div>
                                <div className="h-px bg-[#00E5FF]/30 flex-grow mx-2 border-t border-dashed"></div>
                                <div className="w-9 h-9 rounded-full border border-[#00E5FF] flex items-center justify-center text-[9px] text-[#00E5FF]">DB</div>
                            </div>
                        </div>
                        <div className="text-[7px] text-zinc-500 text-center tracking-wider">SCALABLE NODE ENVIRONMENT</div>
                    </div>
                );
            case '06':
                return (
                    <div className="bg-zinc-950 text-white h-full w-full p-6 flex flex-col justify-between relative overflow-hidden border border-zinc-900">
                        <div className="flex justify-between items-center text-[9px] font-mono opacity-50">
                            <span>SHIPDAY // BRAND_SYNC</span>
                            <span>CH // SWISS</span>
                        </div>
                        <div className="my-auto text-center">
                            <h4 className="font-display text-[1.8rem] font-800 tracking-tighter leading-none text-stroke text-zinc-800 mb-2">UNIFIED</h4>
                            <p className="text-xs font-semibold tracking-wide font-mono text-zinc-300">Product + Web Experience</p>
                        </div>
                        <div className="h-1 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 w-full rounded-full"></div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section id="work" ref={ref} className="py-24 md:py-32 px-6 bg-background">
            <div className="max-w-7xl mx-auto w-full">
                
                {/* Section Header */}
                <div className={`max-w-2xl mb-16 md:mb-24 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <p className="text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase text-muted mb-4">Featured Work</p>
                    <h2 className="font-display text-4xl md:text-6xl font-800 tracking-tighter mb-6">Work That Speaks for Itself</h2>
                    <p className="text-muted text-lg leading-relaxed">Every project starts with a business problem. We solve it through strategic design, clear messaging, and a site built to convert — not just impress.</p>
                </div>

                {/* Staggered Bento-Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-16 md:mt-24">
                    {projects.map((project, i) => (
                        <div
                            key={project.num}
                            className={`bg-zinc-50 border border-zinc-200/80 rounded-[2rem] p-8 lg:p-10 flex flex-col justify-between overflow-hidden hover:border-zinc-400 transition-colors duration-500 ${project.class} ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                            style={{ 
                                animationDelay: `${(i + 1) * 100}ms`,
                                willChange: 'transform, opacity'
                            }}
                        >
                            {/* Card Header & Content */}
                            <div className="mb-8">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-[9px] font-mono uppercase text-muted tracking-widest bg-zinc-200/50 px-2.5 py-1 rounded-full">
                                        [{project.num}]
                                    </span>
                                    <span className="text-[9px] font-mono uppercase text-muted tracking-wider">
                                        {project.category}
                                    </span>
                                </div>

                                <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-zinc-500 mb-3 block">
                                    {project.tag}
                                </span>

                                <h3 className="font-display text-2xl lg:text-3xl font-800 tracking-tighter leading-tight mb-4">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-muted leading-relaxed mb-6">
                                    {project.desc}
                                </p>

                                {/* Structured Metrics Grid */}
                                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-200/80">
                                    {project.stats.map((stat, j) => (
                                        <div key={j}>
                                            <p className="font-display text-base md:text-lg font-800 tracking-tight text-foreground">{stat.metric}</p>
                                            <p className="text-[9px] font-medium text-muted mt-1 uppercase tracking-wider leading-tight">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Custom Typographic Mockup Canvas */}
                            <div className="h-60 md:h-64 lg:h-72 w-full rounded-2xl overflow-hidden mt-4 select-none">
                                {renderMockup(project.num)}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
