import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface Integration {
    title: string;
    description: string;
    icon: LucideIcon;
}

interface IntegrationsSectionProps {
    title?: string;
    subtitle?: string;
    integrations: Integration[];
}

const IntegrationsSection = ({
    title = "Seamless Compatibility",
    subtitle = "Works with your existing ecosystem via API-first modularity.",
    integrations
}: IntegrationsSectionProps) => {
    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-slate-500">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {integrations.map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                    {item.title}
                                </h3>
                            </div>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                {item.description}
                            </p>
                            <div className="flex items-center text-xs font-bold text-indigo-600 uppercase tracking-wider">
                                View Docs <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IntegrationsSection;
