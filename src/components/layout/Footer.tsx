import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
                {/* Massive Brand - Top Section */}
                <div className="mb-16">
                    <h2 className="text-[12vw] font-bold tracking-tighter text-slate-200 leading-none select-none">
                        NEXTPHASE
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12">
                    {/* Brand Column */}
                    <div className="md:col-span-4 lg:col-span-5">
                        <Link href="/" className="flex items-center space-x-2 mb-6">
                            <div className="h-6 w-6 bg-slate-900 rounded flex items-center justify-center">
                                <span className="text-white font-bold text-xs">N</span>
                            </div>
                            <span className="font-bold text-lg text-slate-900">NextPhase Media</span>
                        </Link>
                        <p className="text-slate-500 max-w-sm leading-relaxed">
                            We build the operating layer for the next generation of regulated industries. Continuous, private, and audit-ready intelligence.
                        </p>
                    </div>

                    {/* Links Columns */}
                    <div className="md:col-span-2 lg:col-span-2">
                        <h3 className="font-semibold text-slate-900 mb-6">Solutions</h3>
                        <ul className="space-y-4">
                            <li><Link href="/solutions/recruitment" className="text-slate-500 hover:text-indigo-600 transition-colors">Recruitment OS</Link></li>
                            <li><Link href="/solutions/smart-home" className="text-slate-500 hover:text-indigo-600 transition-colors">Smart Home</Link></li>
                            <li><Link href="/solutions/pharmacy" className="text-slate-500 hover:text-indigo-600 transition-colors">Pharmacy</Link></li>
                            <li><Link href="/solutions/automation-core" className="text-slate-500 hover:text-indigo-600 transition-colors">AI Core</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2 lg:col-span-2">
                        <h3 className="font-semibold text-slate-900 mb-6">Company</h3>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-slate-500 hover:text-indigo-600 transition-colors">About</Link></li>
                            <li><Link href="/careers" className="text-slate-500 hover:text-indigo-600 transition-colors">Careers</Link></li>
                            <li><Link href="/blog" className="text-slate-500 hover:text-indigo-600 transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="text-slate-500 hover:text-indigo-600 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2 lg:col-span-2">
                        <h3 className="font-semibold text-slate-900 mb-6">Socials</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">Twitter</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">GitHub</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} NextPhase Media Inc.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-slate-900">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-slate-900">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
