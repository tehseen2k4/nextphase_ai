import React from 'react';

interface ProblemFramingSectionProps {
    painPoints: string[];
}

export default function ProblemFramingSection({ painPoints }: ProblemFramingSectionProps) {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            You're Not Alone in This
                        </h2>
                        <p className="text-lg text-slate-600">
                            These worries keep thousands of families awake at night.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {painPoints.map((point, index) => (
                            <div
                                key={index}
                                className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
                            >
                                <p className="text-lg font-medium text-slate-700 italic">
                                    "{point}"
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-xl font-semibold text-purple-600">
                            You shouldn't have to choose between your life and their safety.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
