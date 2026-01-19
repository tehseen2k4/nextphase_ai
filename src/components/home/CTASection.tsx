import Link from 'next/link';
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-slate-50">
            <div className="container relative z-10 px-4 md:px-6">
                <div className="rounded-[2.5rem] bg-slate-900 text-white p-12 md:p-24 text-center overflow-hidden relative">
                    {/* Background Pattern */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10"
                        style={{
                            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                            backgroundSize: '30px 30px'
                        }}
                    ></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-8 leading-tight">
                            Ready to replace periodic checks with continuous intelligence?
                        </h2>
                        <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                            Join the forward-thinking organizations using NextPhase AI to predict risk and automate compliance.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/demo"
                                className="h-14 px-8 rounded-full bg-white text-slate-900 font-bold text-lg flex items-center justify-center hover:bg-indigo-50 transition-all shadow-lg hover:shadow-white/20 w-full sm:w-auto"
                            >
                                Book a Demo
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link
                                href="/contact"
                                className="h-14 px-8 rounded-full border border-slate-700 bg-transparent text-white font-medium text-lg flex items-center justify-center hover:bg-slate-800 transition-all w-full sm:w-auto"
                            >
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
