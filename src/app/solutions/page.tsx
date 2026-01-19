import React from 'react';
import { Metadata } from 'next';
import { solutions } from '@/lib/solutions-data';
import SolutionCard from '@/components/solutions/SolutionCard';
import Link from 'next/link';
import { BrainCircuit } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Solutions Hub',
    description: 'Explore our AI-powered operating systems for recruitment, healthcare, and monitoring.',
};

export default function SolutionsPage() {
    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-24">
            {/* Page Intro */}
            <div className="container mx-auto px-4 md:px-6 mb-16 md:mb-24">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center rounded-full bg-white border border-slate-200 shadow-sm px-3 py-1 mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                        <span className="text-sm font-medium text-slate-600">Production-Ready Systems</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                        Our AI-Powered Systems
                    </h1>
                    <p className="text-xl text-slate-500 leading-relaxed">
                        We don't offer vague consulting. These are complete, compliance-ready operating layers designed to solve specific problems in regulated industries.
                    </p>
                </div>
            </div>

            {/* Solutions Grid */}
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {solutions.map((solution) => (
                        <SolutionCard key={solution.title} solution={solution} />
                    ))}
                </div>
            </div>

            {/* Supporting / Cross-link Section */}
            <div className="container mx-auto px-4 md:px-6 mt-24">
                <div className="rounded-3xl bg-white border border-slate-200 p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-3 mb-4">
                            <BrainCircuit className="w-6 h-6 text-amber-500" />
                            <h2 className="text-2xl font-bold text-slate-900">Powered by One Core</h2>
                        </div>
                        <p className="text-slate-500 text-lg">
                            Every system listed above is orchestrated by our unified AI Automation Core, ensuring your intelligence scales across your entire organization.
                        </p>
                    </div>

                    <Link
                        href="/solutions/ai-automation-core"
                        className="whitespace-nowrap h-12 px-6 rounded-xl bg-slate-100 text-slate-900 font-semibold flex items-center justify-center hover:bg-slate-200 transition-all"
                    >
                        View Automation Core
                    </Link>
                </div>
            </div>
        </div>
    );
}
