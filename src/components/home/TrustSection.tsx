import React from 'react';

const stats = [
    { label: 'Privacy First', value: '100%', description: 'No biometric data storage' },
    { label: 'Uptime', value: '99.9%', description: 'Continuous monitoring' },
    { label: 'Compliance', value: 'Audit-Ready', description: 'Automated documentation' },
    { label: 'Trust', value: 'Enterprise', description: 'Bank-grade security' },
];

const TrustSection = () => {
    return (
        <section className="border-y border-slate-100 bg-white py-16 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center justify-center text-center group">
                            <dt className="order-2 mt-2 text-sm font-semibold text-slate-500 uppercase tracking-wide group-hover:text-indigo-600 transition-colors">{stat.label}</dt>
                            <dd className="order-1 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-2">
                                {stat.value}
                            </dd>
                            <dd className="order-3 mt-2 text-sm text-slate-400">{stat.description}</dd>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
