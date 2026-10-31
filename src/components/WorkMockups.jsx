// Detailed UI mockups for the Featured Work cards.
// Each mockup sits inside a browser frame and uses shimmering skeleton
// placeholders to suggest real interface content without real screenshots.

// Shimmering placeholder bar. `className` sets size and color.
function Bone({ className = '' }) {
    return <div className={`skeleton rounded-full ${className}`} />;
}

// Browser window chrome shared by every mockup.
function BrowserFrame({ url, dark = false, className = '', children }) {
    return (
        <div className={`h-full w-full flex flex-col overflow-hidden rounded-2xl border ${className}`}>
            <div className={`flex items-center gap-3 px-3 py-2 border-b shrink-0 ${dark ? 'border-white/10 bg-white/[0.03]' : 'border-black/5 bg-black/[0.02]'}`}>
                <div className="flex gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${dark ? 'bg-white/20' : 'bg-black/15'}`} />
                    <span className={`w-2 h-2 rounded-full ${dark ? 'bg-white/20' : 'bg-black/15'}`} />
                    <span className={`w-2 h-2 rounded-full ${dark ? 'bg-white/20' : 'bg-black/15'}`} />
                </div>
                <div className={`flex-1 max-w-[60%] mx-auto rounded-md px-2 py-0.5 text-[8px] font-mono truncate text-center ${dark ? 'bg-white/5 text-white/40' : 'bg-black/5 text-black/40'}`}>
                    {url}
                </div>
                <div className="w-8" />
            </div>
            <div className="relative flex-1 min-h-0">{children}</div>
        </div>
    );
}

// Vertical bar that grows in when the section scrolls into view.
function Bar({ height, active, delay, className }) {
    return (
        <div
            className={`flex-1 rounded-t-sm ${active ? 'bar-grow' : 'scale-y-0'} ${className}`}
            style={{ height: `${height}%`, animationDelay: `${delay}ms` }}
        />
    );
}

// 01 — Operations dashboard
function OpsDashboard({ active }) {
    const bars = [72, 64, 58, 47, 40, 33, 29, 26];
    return (
        <BrowserFrame url="ops.audatime.com/dashboard" dark className="bg-zinc-950 border-zinc-800 text-zinc-100">
            <div className="absolute inset-0 flex">
                {/* Sidebar */}
                <div className="hidden sm:flex w-24 shrink-0 flex-col gap-2.5 border-r border-white/5 p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                        <span className="w-3 h-3 rounded bg-emerald-400/80" />
                        <span className="text-[8px] font-mono tracking-wider text-zinc-400">AUDATIME</span>
                    </div>
                    <div className="rounded bg-white/10 px-1.5 py-1"><Bone className="h-1.5 w-12 bg-white/30" /></div>
                    {['w-10', 'w-14', 'w-9', 'w-12'].map((w) => (
                        <div key={w} className="px-1.5"><Bone className={`h-1.5 bg-white/10 ${w}`} /></div>
                    ))}
                </div>

                {/* Main */}
                <div className="flex-1 min-w-0 p-3 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between">
                        <Bone className="h-2 w-20 bg-white/20" />
                        <span className="flex items-center gap-1 text-[8px] font-mono text-emerald-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE
                        </span>
                    </div>

                    {/* KPI cards */}
                    <div className="grid grid-cols-3 gap-2">
                        <div className="rounded-lg border border-emerald-400/30 bg-emerald-400/5 p-2">
                            <p className="text-[7px] font-mono uppercase text-zinc-500">Manual work</p>
                            <p className="font-display text-base font-800 tracking-tight text-emerald-400">↓ 60%</p>
                        </div>
                        <div className="rounded-lg border border-white/5 bg-white/[0.03] p-2">
                            <p className="text-[7px] font-mono uppercase text-zinc-500">Records</p>
                            <p className="font-display text-base font-800 tracking-tight">12.4k</p>
                        </div>
                        <div className="rounded-lg border border-white/5 bg-white/[0.03] p-2">
                            <p className="text-[7px] font-mono uppercase text-zinc-500">Errors</p>
                            <p className="font-display text-base font-800 tracking-tight">0</p>
                        </div>
                    </div>

                    {/* Chart */}
                    <div className="flex-1 min-h-0 rounded-lg border border-white/5 bg-white/[0.02] p-2 flex flex-col">
                        <div className="flex justify-between mb-1.5">
                            <span className="text-[7px] font-mono uppercase text-zinc-500">Hours spent on manual entry</span>
                            <span className="text-[7px] font-mono text-zinc-600">8 WK</span>
                        </div>
                        <div className="flex-1 min-h-0 flex items-end gap-1.5">
                            {bars.map((h, i) => (
                                <Bar
                                    key={i}
                                    height={h}
                                    active={active}
                                    delay={300 + i * 70}
                                    className={i === bars.length - 1 ? 'bg-emerald-400' : 'bg-zinc-700'}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </BrowserFrame>
    );
}

// 02 — Agriculture landing page
function AgriLanding() {
    return (
        <BrowserFrame url="happyagri.com" className="bg-[#F7F4EF] border-[#E9E4DB] text-[#2C3E2B] [--shimmer:rgba(255,255,255,0.7)]">
            <div className="absolute inset-0 flex flex-col p-4">
                {/* Nav */}
                <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-xs font-800 tracking-tight">H.AGRI</span>
                    <div className="hidden sm:flex gap-2">
                        <Bone className="h-1.5 w-6 bg-[#2C3E2B]/15" />
                        <Bone className="h-1.5 w-6 bg-[#2C3E2B]/15" />
                        <Bone className="h-1.5 w-6 bg-[#2C3E2B]/15" />
                    </div>
                    <span className="rounded-full bg-[#2C3E2B] px-2 py-0.5 text-[7px] font-semibold text-[#F7F4EF]">Contact</span>
                </div>

                {/* Hero */}
                <div className="flex-1 min-h-0 grid grid-cols-5 gap-3 items-center">
                    <div className="col-span-3 space-y-2">
                        <p className="text-[7px] font-mono uppercase tracking-[0.2em] text-[#2C3E2B]/60">Liberia · Since 2019</p>
                        <p className="font-display text-sm md:text-base italic font-semibold leading-tight">"Cultivating digital credibility."</p>
                        <div className="space-y-1">
                            <Bone className="h-1.5 w-full bg-[#2C3E2B]/10" />
                            <Bone className="h-1.5 w-4/5 bg-[#2C3E2B]/10" />
                        </div>
                        <div className="flex gap-1.5 pt-1">
                            <span className="rounded-full bg-[#2C3E2B] px-2 py-1 text-[7px] font-semibold text-[#F7F4EF]">Our Mission</span>
                            <span className="rounded-full border border-[#2C3E2B]/30 px-2 py-1 text-[7px] font-semibold">Services</span>
                        </div>
                    </div>
                    <div className="col-span-2 h-full max-h-28 rounded-xl bg-gradient-to-br from-[#C9D8B6] to-[#8FA977] relative overflow-hidden">
                        <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-[#2C3E2B]/20" />
                        <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[#F7F4EF]/50" />
                    </div>
                </div>

                {/* Trust row */}
                <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-dashed border-[#2C3E2B]/20">
                    {['Crop Security', 'Local Farmers', 'Certified'].map((t) => (
                        <div key={t} className="flex items-center gap-1.5">
                            <span className="w-3 h-3 rounded-full border border-[#2C3E2B]/40 flex items-center justify-center text-[6px]">✓</span>
                            <span className="text-[7px] font-semibold uppercase tracking-wider truncate">{t}</span>
                        </div>
                    ))}
                </div>
            </div>
        </BrowserFrame>
    );
}

// 03 — Performance portal
function PerformancePortal({ active }) {
    return (
        <BrowserFrame url="portal.gov.za/workflows" className="bg-white border-zinc-200 text-zinc-900 [--shimmer:rgba(255,255,255,0.8)]">
            <div className="absolute inset-0 p-4 flex flex-col gap-3 font-mono">
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <p className="text-[7px] uppercase tracking-wider text-zinc-400">Avg. task completion</p>
                        <p className="font-display text-2xl font-800 tracking-tighter">↑ 40%</p>
                    </div>
                    <span className="rounded-full bg-zinc-950 px-2 py-0.5 text-[7px] text-white">v4.09 · STABLE</span>
                </div>

                {/* Line chart */}
                <div className="flex-1 min-h-0 rounded-lg border border-zinc-100 bg-zinc-50/60 p-2 relative">
                    <svg viewBox="0 0 200 60" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                        {[15, 30, 45].map((y) => (
                            <line key={y} x1="0" x2="200" y1={y} y2={y} stroke="#E4E4E7" strokeWidth="0.5" strokeDasharray="2 2" />
                        ))}
                        <polyline
                            points="0,12 25,16 50,14 75,22 100,28 125,36 150,42 175,46 200,49"
                            fill="none"
                            stroke="#0A0A0A"
                            strokeWidth="1.5"
                            pathLength="1"
                            className={active ? 'line-draw' : 'opacity-0'}
                        />
                        <polyline
                            points="0,10 25,11 50,13 75,12 100,14 125,13 150,15 175,14 200,15"
                            fill="none"
                            stroke="#A1A1AA"
                            strokeWidth="1"
                            strokeDasharray="3 3"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>
                    <div className="absolute bottom-2 right-2 flex gap-2 text-[6px] uppercase text-zinc-400">
                        <span className="flex items-center gap-1"><span className="w-2 h-px bg-zinc-950" /> Latency now</span>
                        <span className="flex items-center gap-1"><span className="w-2 h-px bg-zinc-400" /> Before</span>
                    </div>
                </div>

                {/* Queue */}
                <div className="space-y-1.5">
                    {[['Approvals', 'w-11/12'], ['Requests', 'w-3/4'], ['Reports', 'w-1/2']].map(([label, w]) => (
                        <div key={label} className="flex items-center gap-2">
                            <span className="w-14 text-[7px] uppercase text-zinc-400">{label}</span>
                            <div className="flex-1 h-1.5 rounded-full bg-zinc-100 overflow-hidden">
                                <div className={`h-full rounded-full bg-zinc-900 ${w}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </BrowserFrame>
    );
}

// 04 — Product business website
function ProductSite() {
    return (
        <BrowserFrame url="product.ma" dark className="bg-zinc-950 border-zinc-900 text-zinc-100">
            <div className="absolute inset-0 flex flex-col p-4">
                <div className="flex items-center justify-between mb-3">
                    <span className="font-display text-[10px] font-800 tracking-[0.3em]">MAROC</span>
                    <div className="hidden sm:flex gap-2">
                        <Bone className="h-1.5 w-6 bg-white/15" />
                        <Bone className="h-1.5 w-6 bg-white/15" />
                        <Bone className="h-1.5 w-6 bg-white/15" />
                    </div>
                    <span className="rounded-full bg-white px-2 py-0.5 text-[7px] font-semibold text-zinc-950">Get started</span>
                </div>

                <div className="text-center mb-3">
                    <p className="text-[7px] font-mono uppercase tracking-[0.35em] text-zinc-500 mb-1">Product positioning</p>
                    <h4 className="font-display text-sm md:text-base font-700 tracking-tight leading-snug">Sophisticated Presentation</h4>
                </div>

                {/* Product window */}
                <div className="flex-1 min-h-0 mx-auto w-4/5 rounded-t-xl border border-white/10 border-b-0 bg-gradient-to-b from-zinc-800/80 to-zinc-900 p-2.5 flex gap-2">
                    <div className="w-1/3 space-y-1.5">
                        <Bone className="h-1.5 w-full bg-white/15" />
                        <Bone className="h-1.5 w-3/4 bg-white/10" />
                        <Bone className="h-1.5 w-5/6 bg-white/10" />
                        <Bone className="h-1.5 w-2/3 bg-white/10" />
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-1.5">
                        <div className="skeleton rounded-md bg-white/10" />
                        <div className="skeleton rounded-md bg-white/5" />
                        <div className="skeleton col-span-2 rounded-md bg-gradient-to-r from-amber-200/20 to-white/5" />
                    </div>
                </div>
            </div>
        </BrowserFrame>
    );
}

// 05 — Startup talent platform
function TalentPlatform() {
    const rows = [
        { initials: 'AK', match: 96 },
        { initials: 'JL', match: 91 },
        { initials: 'RS', match: 87 },
    ];
    return (
        <BrowserFrame url="app.talentmesh.io/matches" dark className="bg-zinc-900 border-zinc-800 text-zinc-100">
            <div className="absolute inset-0 p-3 flex flex-col gap-2 font-mono">
                <div className="flex items-center justify-between">
                    <span className="text-[8px] tracking-wider text-[#00E5FF]">TALENTMESH</span>
                    <span className="rounded-full border border-[#00E5FF]/40 px-2 py-0.5 text-[7px] text-[#00E5FF]">LAUNCH_READY</span>
                </div>

                {/* Search */}
                <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-2 py-1.5">
                    <span className="w-2 h-2 rounded-full border border-zinc-500" />
                    <Bone className="h-1.5 w-24 bg-white/10" />
                </div>

                {/* Candidate list */}
                <div className="flex-1 min-h-0 space-y-1.5">
                    {rows.map((r, i) => (
                        <div key={r.initials} className={`flex items-center gap-2 rounded-md px-2 py-1.5 ${i === 0 ? 'bg-[#00E5FF]/10 border border-[#00E5FF]/30' : 'bg-white/[0.03] border border-white/5'}`}>
                            <span className="w-5 h-5 shrink-0 rounded-full bg-zinc-700 flex items-center justify-center text-[7px] text-white">{r.initials}</span>
                            <div className="flex-1 space-y-1">
                                <Bone className="h-1.5 w-3/5 bg-white/20" />
                                <Bone className="h-1 w-2/5 bg-white/10" />
                            </div>
                            <span className={`text-[8px] ${i === 0 ? 'text-[#00E5FF]' : 'text-zinc-400'}`}>{r.match}%</span>
                        </div>
                    ))}
                </div>

                {/* Architecture strip */}
                <div className="flex items-center justify-between text-[7px] text-zinc-500 pt-1 border-t border-white/5">
                    {['UI', 'API', 'DB'].map((n, i) => (
                        <div key={n} className="flex items-center flex-1 last:flex-none">
                            <span className={`w-6 h-6 rounded-full border flex items-center justify-center ${i === 1 ? 'border-white text-white' : 'border-[#00E5FF]/60 text-[#00E5FF]'}`}>{n}</span>
                            {i < 2 && <span className="flex-1 mx-1 border-t border-dashed border-[#00E5FF]/30" />}
                        </div>
                    ))}
                </div>
            </div>
        </BrowserFrame>
    );
}

// 06 — Unified website + app
function UnifiedExperience() {
    return (
        <BrowserFrame url="shipday.com" dark className="bg-zinc-950 border-zinc-900 text-zinc-100">
            <div className="absolute inset-0 p-4 flex gap-3">
                {/* Website side */}
                <div className="flex-1 min-w-0 flex flex-col justify-center gap-2">
                    <p className="text-[7px] font-mono uppercase tracking-[0.3em] text-zinc-500">Delivery, unified</p>
                    <h4 className="font-display text-xl md:text-2xl font-800 tracking-tighter leading-none">
                        One brand.<br /><span className="text-zinc-500">Every screen.</span>
                    </h4>
                    <div className="space-y-1">
                        <Bone className="h-1.5 w-full bg-white/10" />
                        <Bone className="h-1.5 w-3/4 bg-white/10" />
                    </div>
                    <div className="flex gap-1.5 pt-1">
                        <span className="rounded-full bg-white px-2 py-1 text-[7px] font-semibold text-zinc-950">Start free</span>
                        <span className="rounded-full border border-white/20 px-2 py-1 text-[7px] font-semibold">Book demo</span>
                    </div>
                </div>

                {/* Phone app */}
                <div className="w-24 shrink-0 rounded-2xl border border-white/15 bg-zinc-900 p-1.5 flex flex-col gap-1.5">
                    <div className="mx-auto w-8 h-1 rounded-full bg-white/15" />
                    <div className="rounded-lg bg-gradient-to-br from-zinc-700 to-zinc-800 h-12 relative overflow-hidden">
                        <div className="absolute inset-x-2 top-1/2 border-t border-dashed border-white/30" />
                        <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white" />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    {[0, 1, 2].map((i) => (
                        <div key={i} className="flex items-center gap-1 rounded-md bg-white/[0.04] p-1">
                            <span className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-emerald-400' : 'bg-white/20'}`} />
                            <Bone className="h-1 flex-1 bg-white/15" />
                        </div>
                    ))}
                </div>
            </div>
        </BrowserFrame>
    );
}

export default function WorkMockup({ num, active }) {
    switch (num) {
        case '01': return <OpsDashboard active={active} />;
        case '02': return <AgriLanding />;
        case '03': return <PerformancePortal active={active} />;
        case '04': return <ProductSite />;
        case '05': return <TalentPlatform />;
        case '06': return <UnifiedExperience />;
        default: return null;
    }
}
