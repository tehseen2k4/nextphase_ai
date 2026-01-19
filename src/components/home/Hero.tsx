"use client";

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Activity, Brain } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-[90vh] overflow-hidden bg-slate-50 pt-32 pb-16">

            {/* Mesh Gradient Background */}
            <div className="absolute inset-0 z-0 mesh-gradient opacity-60"></div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="container relative z-10 px-4 text-center md:px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-full bg-white/80 border border-indigo-100 shadow-sm px-3 py-1 mb-8 backdrop-blur-sm"
                >
                    <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
                    <span className="text-sm font-medium text-slate-600">The New Standard in AI Oversight</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl mx-auto leading-[1.1] mb-6"
                >
                    Continuous, Private <br />
                    <span className="text-indigo-600">Intelligence.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 md:text-xl leading-relaxed mb-10 text-balance"
                >
                    Replace fragmented human oversight with an AI operating layer that detects risk patterns before they become incidents.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/solutions"
                        className="group h-12 px-8 rounded-full bg-slate-900 text-white font-semibold flex items-center justify-center hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
                    >
                        Explore Solutions
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="/demo"
                        className="h-12 px-8 rounded-full bg-white text-slate-900 border border-slate-200 font-semibold flex items-center justify-center hover:bg-slate-50 transition-all shadow-sm hover:shadow-md w-full sm:w-auto"
                    >
                        Book a Demo
                    </Link>
                </motion.div>

                {/* Floaters */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="hidden md:block absolute top-1/3 left-[10%] p-4 bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-slate-100 rotate-[-6deg]"
                >
                    <ShieldCheck className="w-8 h-8 text-emerald-500 mb-2" />
                    <div className="text-xs font-bold text-slate-900">Compliance Ready</div>
                    <div className="text-[10px] text-slate-500">Audit trails auto-generated</div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="hidden md:block absolute bottom-1/4 right-[10%] p-4 bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-slate-100 rotate-[3deg]"
                >
                    <Activity className="w-8 h-8 text-indigo-500 mb-2" />
                    <div className="text-xs font-bold text-slate-900">Pattern Detection</div>
                    <div className="text-[10px] text-slate-500">Real-time anomaly alerts</div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
