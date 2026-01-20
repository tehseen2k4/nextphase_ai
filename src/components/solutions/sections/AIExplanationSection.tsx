import React from 'react';
import { Brain, Users, Shield, Sparkles } from 'lucide-react';

interface AIPoint {
    title: string;
    description: string;
}

interface AIExplanationSectionProps {
    points: AIPoint[];
}

export default function AIExplanationSection({ points }: AIExplanationSectionProps) {
    const iconMap = [Brain, Users, Shield, Sparkles];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            AI That Assists, Not Replaces
                        </h2>
                        <p className="text-lg text-slate-600">
                            Technology should support human care, not replace it.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {points.map((point, index) => {
                            const Icon = iconMap[index % iconMap.length];
                            return (
                                <div
                                    key={index}
                                    className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-6 h-6 text-purple-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                                {point.title}
                                            </h3>
                                            <p className="text-slate-600">
                                                {point.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
