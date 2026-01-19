

import Link from 'next/link';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Solution } from '@/lib/solutions-data';

interface SolutionCardProps {
    solution: Solution;
}

const SolutionCard = ({ solution }: SolutionCardProps) => {
    return (
        <Link
            href={solution.href}
            className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:shadow-xl hover:border-indigo-100 hover:-translate-y-1"
        >
            <div>
                <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${solution.bg} ${solution.border} border`}>
                    <solution.icon className={`h-6 w-6 ${solution.color}`} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {solution.title}
                </h3>

                <p className="text-slate-500 mb-6 leading-relaxed">
                    {solution.description}
                </p>

                <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Key Outcome</span>
                    <span className="text-sm font-medium text-slate-700">{solution.benefit}</span>
                </div>
            </div>

            <div className="flex items-center text-sm font-semibold text-indigo-600 mt-auto">
                Explore System
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
        </Link>
    );
};

export default SolutionCard;
