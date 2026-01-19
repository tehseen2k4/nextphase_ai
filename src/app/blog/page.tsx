import React from 'react';
import { Metadata } from 'next';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Blog | NextPhase AI',
    description: 'Insights on AI automation, compliance, and regulated industries.',
};

export default function BlogPage() {
    const posts = [
        {
            title: "Building Compliant AI Systems: Lessons from Healthcare",
            excerpt: "How we approach HIPAA compliance in our automation platform.",
            category: "Compliance",
            date: "Jan 15, 2026",
            readTime: "5 min read"
        },
        {
            title: "The Future of Recruitment: AI-Powered Hiring at Scale",
            excerpt: "Why traditional ATS systems are failing modern recruitment teams.",
            category: "Industry Insights",
            date: "Jan 10, 2026",
            readTime: "7 min read"
        },
        {
            title: "Pharmacy Automation: Reducing Errors, Improving Patient Safety",
            excerpt: "Case study on implementing AI workflow automation in retail pharmacies.",
            category: "Case Studies",
            date: "Jan 5, 2026",
            readTime: "6 min read"
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
                            Insights & Updates
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Thoughts on AI automation, compliance, and the future of regulated industries.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-24 bg-slate-50">
                <div className="container px-4 md:px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post, idx) => (
                                <article key={idx} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-indigo-100 transition-all">
                                    <div className="p-6">
                                        <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold mb-4">
                                            {post.category}
                                        </div>

                                        <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                                            {post.title}
                                        </h2>

                                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {post.date}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {post.readTime}
                                            </div>
                                        </div>

                                        <div className="flex items-center text-sm font-semibold text-indigo-600 group-hover:gap-2 transition-all">
                                            Read More
                                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Coming Soon Message */}
                        <div className="mt-16 text-center p-12 rounded-2xl bg-white border border-slate-200">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">More Content Coming Soon</h3>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                We're working on in-depth articles about AI automation, compliance best practices, and industry case studies. Subscribe to our newsletter to get notified when new posts go live.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
