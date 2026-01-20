"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface SolutionHeroProps {
    title: string;
    subtitle: string;
    description: string;
    audience: string[];
    trustLine?: string;
}

const SolutionHero = ({ title, subtitle, description, audience, trustLine }: SolutionHeroProps) => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
            {/* Background Mesh */}
            <div className="absolute inset-0 z-0 mesh-gradient opacity-60"></div>
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 mb-6"
                    >
                        <div className="flex -space-x-2">
                            {audience.map((_, i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">
                                    {String.fromCharCode(65 + i)}
                                </div>
                            ))}
                        </div>
                        <span className="text-sm font-medium text-slate-500">Built for {audience.join(', ')}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]"
                    >
                        {title}
                        <span className="block text-indigo-600 mt-2 text-2xl md:text-3xl lg:text-4xl font-semibold tracking-normal">
                            {subtitle}
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl"
                    >
                        {description}
                    </motion.p>

                    {trustLine && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
                        >
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            <span className="text-sm font-medium text-slate-700">{trustLine}</span>
                        </motion.div>
                    )}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            href="/demo"
                            className="h-14 px-8 rounded-full bg-slate-900 text-white font-semibold flex items-center justify-center hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
                        >
                            Request Demo
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                        <div className="flex items-center gap-2 px-6 h-14 text-slate-500 text-sm font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            Production Ready
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SolutionHero;
