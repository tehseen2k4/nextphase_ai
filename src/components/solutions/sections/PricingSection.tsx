import React from 'react';
import { Check } from 'lucide-react';
import Link from 'next/link';

interface PricingTier {
    name: string;
    price: string;
    description: string;
    features: string[];
    cta: string;
    popular?: boolean;
}

interface PricingSectionProps {
    tiers: PricingTier[];
}

const PricingSection = ({ tiers }: PricingSectionProps) => {
    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Transparent Licensing
                    </h2>
                    <p className="text-lg text-slate-500">
                        Predictable pricing based on your team size and volume.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {tiers.map((tier, idx) => (
                        <div
                            key={idx}
                            className={`relative flex flex-col p-8 rounded-3xl border ${tier.popular ? 'border-indigo-600 shadow-xl' : 'border-slate-200 bg-slate-50'}`}
                        >
                            {tier.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                                <div className="text-3xl font-bold text-slate-900 mb-4">{tier.price}</div>
                                <p className="text-slate-500 text-sm">{tier.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {tier.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-700">
                                        <Check className="w-5 h-5 text-indigo-600 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/demo"
                                className={`w-full h-12 rounded-xl font-semibold flex items-center justify-center transition-all ${tier.popular
                                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md'
                                    : 'bg-white border border-slate-200 text-slate-900 hover:bg-slate-50'
                                    }`}
                            >
                                {tier.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
