export default function Footer() {
    return (
        <footer className="bg-background border-t border-border py-16 px-6 md:py-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-16">
                    <div className="col-span-2 md:col-span-1">
                        <a href="#" className="font-display text-2xl font-800 tracking-tighter block mb-4">Signature.</a>
                        <p className="text-sm text-muted leading-relaxed">Strategic web design for businesses that take growth seriously.</p>
                        <div className="flex gap-4 mt-6">
                            {['LinkedIn', 'Instagram', 'Twitter'].map(social => (
                                <a key={social} href="#" className="text-xs text-muted hover:text-foreground transition-colors duration-300">{social}</a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-display font-700 text-sm mb-4">Services</h4>
                        <ul className="space-y-3">
                            {['Landing Pages', 'Business Websites', 'Website Redesigns'].map(link => (
                                <li key={link}><a className="text-sm text-muted hover:text-foreground transition-colors duration-300">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-700 text-sm mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Our Work', 'Why Us', 'Pricing'].map(link => (
                                <li key={link}><a href="#" className="text-sm text-muted hover:text-foreground transition-colors duration-300">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* <div>
                        <h4 className="font-display font-700 text-sm mb-4">Resources</h4>
                        <ul className="space-y-3">
                            {['Blog', 'FAQs', 'Pricing', 'Contact'].map(link => (
                                <li key={link}><a href="#" className="text-sm text-muted hover:text-foreground transition-colors duration-300">{link}</a></li>
                            ))}
                        </ul>
                    </div> */}
                </div>
                {/* should be in center */}
                <div className="border-t border-border pt-8">
                    <p className="text-xs text-muted text-center">© 2025 Signature Sites. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}