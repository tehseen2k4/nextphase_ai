import React from 'react';
import { Shield, LucideIcon } from 'lucide-react';

interface SecurityFeature {
    title: string;
    description: string;
    icon: LucideIcon;
}

interface ComplianceSectionProps {
    title?: string;
    subtitle?: string;
    badge?: string;
    features: SecurityFeature[];
}

const ComplianceSection = ({
    title = "Built for Compliance-First Operations",
    subtitle = "We understand that in regulated industries, \"move fast and break things\" is not an option.",
    badge = "Enterprise Grade Security",
    features
}: ComplianceSectionProps) => {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            ></div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white mb-6 backdrop-blur-sm">
                        <Shield className="w-4 h-4 text-emerald-400" />
                        <span>{badge}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        {title}
                    </h2>
                    <p className="text-lg text-slate-300">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <feature.icon className="w-8 h-8 text-indigo-400 mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ComplianceSection;
