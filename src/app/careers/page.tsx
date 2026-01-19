import React from 'react';
import { Metadata } from 'next';
import { Briefcase, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Careers | NextPhase AI',
    description: 'Join our team building AI automation for regulated industries.',
};

export default function CareersPage() {
    const openings = [
        {
            title: "Senior Full-Stack Engineer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time"
        },
        {
            title: "AI/ML Engineer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time"
        },
        {
            title: "Product Designer",
            department: "Design",
            location: "Remote",
            type: "Full-time"
        }
    ];

    const benefits = [
        "Competitive salary and equity",
        "Comprehensive health coverage",
        "Flexible remote work",
        "Learning and development budget",
        "Latest tools and equipment",
        "Collaborative team culture"
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
                            Build the Future of Regulated AI
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Join a team that's redefining automation for industries where precision and compliance matter most.
                        </p>
                    </div>
                </div>
            </section>

            {/* Culture Section */}
            <section className="py-24 bg-slate-50">
                <div className="container px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Why NextPhase?</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            We're building critical infrastructure for industries that can't afford to fail. Our work directly impacts hiring decisions, patient safety, and operational efficiency across multiple sectors.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 mt-0.5">
                                        <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                                    </div>
                                    <span className="text-slate-700">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-24 bg-white">
                <div className="container px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">Open Positions</h2>

                        <div className="space-y-4">
                            {openings.map((job, idx) => (
                                <div key={idx} className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-indigo-200 hover:shadow-md transition-all group">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                                                {job.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                                                <div className="flex items-center gap-2">
                                                    <Briefcase className="w-4 h-4" />
                                                    {job.department}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-4 h-4" />
                                                    {job.location}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Clock className="w-4 h-4" />
                                                    {job.type}
                                                </div>
                                            </div>
                                        </div>
                                        <button className="px-6 py-2 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors whitespace-nowrap">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                            <p className="text-slate-600 mb-4">
                                Don't see a perfect fit? We're always interested in hearing from talented people.
                            </p>
                            <a href="/contact" className="text-indigo-600 font-semibold hover:underline">
                                Get in touch →
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
