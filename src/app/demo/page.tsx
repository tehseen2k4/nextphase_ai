import React from 'react';
import { Metadata } from 'next';
import DemoRequestForm from '@/components/forms/DemoRequestForm';
import { Calendar, Users, Zap, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Request a Demo | NextPhase AI',
    description: 'Schedule a personalized demo of our AI-powered operating systems. See how we can transform your operations.',
};

export default function DemoPage() {
    const benefits = [
        {
            icon: Calendar,
            title: "Personalized Demo",
            description: "We'll tailor the demo to your specific use case and industry needs."
        },
        {
            icon: Users,
            title: "Expert Guidance",
            description: "Our team will walk you through the platform and answer all your questions."
        },
        {
            icon: Zap,
            title: "Quick Setup",
            description: "See how fast you can get started with our production-ready systems."
        },
        {
            icon: CheckCircle2,
            title: "No Commitment",
            description: "Explore the platform with no pressure or obligation to purchase."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 overflow-hidden bg-slate-50">
                {/* Background Mesh */}
                <div className="absolute inset-0 z-0 mesh-gradient opacity-60"></div>
                <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                <div className="container relative z-10 px-4 md:px-6 mx-auto">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center rounded-full bg-white border border-slate-200 shadow-sm px-3 py-1 mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                            <span className="text-sm font-medium text-slate-600">Available Now</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                            See Our AI Systems
                            <span className="block text-indigo-600 mt-2">In Action</span>
                        </h1>

                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            Schedule a personalized demo and discover how our AI-powered operating systems can transform your operations. No sales pressure, just real solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-16 md:py-20 bg-white border-t border-slate-200">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                                Why Request a Demo?
                            </h2>
                            <p className="text-slate-600">
                                See firsthand how our AI systems can transform your operations
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                                            <Icon className="w-7 h-7 text-indigo-600" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                Request Your Demo
                            </h2>
                            <p className="text-lg text-slate-600">
                                Fill out the form below and we'll get back to you within 24 hours.
                            </p>
                        </div>

                        <DemoRequestForm />
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-16 md:py-20 bg-white border-t border-slate-200">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
                            <div className="text-center">
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                                    What Happens Next?
                                </h3>
                                <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
                                    Our streamlined process ensures you get the most value from your demo
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                                    <div>
                                        <div className="w-14 h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-lg">
                                            1
                                        </div>
                                        <h4 className="font-semibold text-slate-900 mb-2 text-lg">We Review Your Request</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            Our team reviews your information to prepare a tailored demo.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="w-14 h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-lg">
                                            2
                                        </div>
                                        <h4 className="font-semibold text-slate-900 mb-2 text-lg">We Reach Out</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            We'll contact you within 24 hours to schedule a convenient time.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="w-14 h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-lg">
                                            3
                                        </div>
                                        <h4 className="font-semibold text-slate-900 mb-2 text-lg">Live Demo</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            Experience our AI systems in action with personalized examples.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
