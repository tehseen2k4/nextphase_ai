import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t bg-muted/40">
            <div className="container py-10 md:py-16">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="font-bold text-lg">NextPhase Media</span>
                        </Link>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Empowering the next generation of digital experiences.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Connect</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} NextPhase Media. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
