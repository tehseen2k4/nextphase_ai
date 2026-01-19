"use client";

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Home, Activity, BrainCircuit } from 'lucide-react';

import { solutions } from '@/lib/solutions-data';

const SolutionsGrid = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="container px-4 md:px-6">
                <div className="mb-16 md:max-w-3xl">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        Domain-Specific Intelligence.
                    </h2>
                    <p className="text-xl text-slate-500 leading-relaxed">
                        We don&apos;t sell generic chat bots. We deploy purpose-built operating systems for critical environments.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {solutions.map((solution, index) => (
                        <Link
                            key={solution.title}
                            href={solution.href}
                            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-10 transition-all hover:shadow-2xl hover:border-transparent hover:-translate-y-1"
                        >
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div>
                                    <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${solution.bg} ${solution.border} border`}>
                                        <solution.icon className={`h-7 w-7 ${solution.color}`} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{solution.title}</h3>
                                    <p className="text-slate-500 text-lg leading-relaxed">{solution.description}</p>
                                </div>

                                <div className="mt-8 flex items-center text-sm font-semibold text-slate-900 transition-all group-hover:translate-x-2">
                                    Learn more
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionsGrid;
