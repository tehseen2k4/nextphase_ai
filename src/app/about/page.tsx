import React from 'react';
import { Metadata } from 'next';
import { Target, Users, Zap, Shield } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About Us | NextPhase AI',
    description: 'Building the operating layer for the next generation of regulated industries.',
};

export default function AboutPage() {
    const values = [
        {
            icon: Target,
            title: "Mission-Critical Focus",
            description: "We build systems for industries where failure is not an option."
        },
        {
            icon: Shield,
            title: "Compliance First",
            description: "Every decision is made with regulatory requirements in mind."
        },
        {
            icon: Zap,
            title: "Operational Excellence",
            description: "Automation that enhances human expertise, not replaces it."
        },
        {
            icon: Users,
            title: "Long-Term Partnerships",
            description: "We grow with our clients, adapting as their needs evolve."
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-white">
                <div className="absolute inset-0 z-0 mesh-gradient opacity-60"></div>
                <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                <div className="container relative z-10 px-4 md:px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                            Building the Operating Layer for Regulated Industries
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            We create AI-powered automation systems for industries where precision, compliance, and reliability are non-negotiable.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 bg-slate-50">
                <div className="container px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Our Mission</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            Traditional automation tools are built for speed and scale. We build for <strong>safety, compliance, and trust</strong>.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Our platform powers critical workflows in recruitment, healthcare, pharmacy operations, and smart infrastructure—industries where every decision must be auditable, every process must be secure, and every outcome must be reliable.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-white">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                            The principles that guide every decision we make.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {values.map((value, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                                <value.icon className="w-10 h-10 text-indigo-600 mb-6" />
                                <h3 className="text-lg font-bold text-slate-900 mb-3">{value.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-slate-50">
                <div className="container px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Built by Experts</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            Our team combines deep expertise in AI, enterprise software, and regulated industries. We've built systems that process millions of transactions, manage sensitive data, and operate under strict compliance requirements.
                        </p>
                        <p className="text-slate-500">
                            We're always looking for talented individuals who share our mission. <a href="/careers" className="text-indigo-600 font-semibold hover:underline">View open positions →</a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
