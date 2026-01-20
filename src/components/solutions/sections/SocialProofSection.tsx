import React from 'react';
import { Quote } from 'lucide-react';

interface SocialProofSectionProps {
    statements: string[];
    partnerLogos?: string[];
}

export default function SocialProofSection({ statements, partnerLogos }: SocialProofSectionProps) {
    return (
        <section className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Built with Care in Mind
                        </h2>
                        <p className="text-lg text-slate-600">
                            Designed by people who understand the weight of this responsibility.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {statements.map((statement, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
                            >
                                <Quote className="w-8 h-8 text-purple-300 mb-4" />
                                <p className="text-slate-700 font-medium">
                                    {statement}
                                </p>
                            </div>
                        ))}
                    </div>

                    {partnerLogos && partnerLogos.length > 0 && (
                        <div className="bg-white rounded-2xl p-8 border border-slate-200">
                            <p className="text-center text-sm font-semibold text-slate-500 mb-6">
                                TRUSTED BY
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-8">
                                {partnerLogos.map((logo, index) => (
                                    <div key={index} className="text-slate-400">
                                        {/* Partner logos will go here */}
                                        <div className="w-32 h-12 bg-slate-100 rounded flex items-center justify-center">
                                            Partner {index + 1}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
