import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Outcome {
    title: string;
    description: string;
    icon: LucideIcon;
    stats?: string;
}

interface OutcomesSectionProps {
    title: string;
    subtitle: string;
    outcomes: Outcome[];
}

const OutcomesSection = ({ title, subtitle, outcomes }: OutcomesSectionProps) => {
    return (
        <section className="py-24 bg-white">
            <div className="container px-4 md:px-6">
                <div className="mb-16 max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-slate-500">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {outcomes.map((outcome, idx) => (
                        <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 text-indigo-600 shadow-sm">
                                <outcome.icon className="w-6 h-6" />
                            </div>
                            {outcome.stats && (
                                <div className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">
                                    {outcome.stats}
                                </div>
                            )}
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{outcome.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                {outcome.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OutcomesSection;
