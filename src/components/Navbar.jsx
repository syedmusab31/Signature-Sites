import { useState } from 'react';

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-2xl font-800 tracking-tighter">
          Signature.
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm text-muted hover:text-foreground transition-colors duration-300">
              {link.name}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 text-sm font-medium rounded-full hover:bg-muted transition-colors duration-300">
          Book a Call
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </a>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2">
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-foreground transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileOpen(false)} className="block text-lg font-display font-600">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="block w-full text-center bg-foreground text-background px-5 py-3 text-sm font-medium rounded-full">
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}