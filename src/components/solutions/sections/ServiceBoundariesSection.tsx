import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

interface ServiceBoundariesSectionProps {
    included: string[];
    notIncluded: string[];
}

export default function ServiceBoundariesSection({ included, notIncluded }: ServiceBoundariesSectionProps) {
    return (
        <section className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            What We Do (and Don't Do)
                        </h2>
                        <p className="text-lg text-slate-600">
                            Clear boundaries build trust. Here's exactly what you can expect.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* What We Do */}
                        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">What We Do</h3>
                            </div>
                            <ul className="space-y-3">
                                {included.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* What We Do NOT Do */}
                        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                                    <XCircle className="w-5 h-5 text-slate-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">What We Do NOT Do</h3>
                            </div>
                            <ul className="space-y-3">
                                {notIncluded.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 bg-purple-50 border border-purple-100 rounded-xl p-6">
                        <p className="text-center text-slate-700">
                            <span className="font-semibold text-purple-700">Non-clinical service:</span> We coordinate care and communication, but all medical decisions remain with licensed healthcare providers and family members.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
