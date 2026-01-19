"use client";

import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement form submission logic
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We\'ll get back to you soon.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-white">
                <div className="absolute inset-0 z-0 mesh-gradient opacity-60"></div>
                <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                <div className="container relative z-10 px-4 md:px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Have questions about our solutions? Want to schedule a demo? We're here to help.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-24 bg-slate-50">
                <div className="container px-4 md:px-6">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                                        placeholder="john@company.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                                        placeholder="Acme Inc."
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all resize-none"
                                        placeholder="Tell us about your needs..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                                            <Mail className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                                            <a href="mailto:contact@nextphase.ai" className="text-slate-600 hover:text-indigo-600 transition-colors">
                                                contact@nextphase.ai
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                                            <Phone className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                                            <a href="tel:+1234567890" className="text-slate-600 hover:text-indigo-600 transition-colors">
                                                +1 (234) 567-890
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                                            <MapPin className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-slate-900 mb-1">Office</h3>
                                            <p className="text-slate-600">
                                                123 Innovation Drive<br />
                                                San Francisco, CA 94105
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-indigo-50 border border-indigo-100">
                                <h3 className="font-bold text-slate-900 mb-2">Looking for a demo?</h3>
                                <p className="text-slate-600 text-sm mb-4">
                                    Schedule a personalized walkthrough of our solutions with our team.
                                </p>
                                <a
                                    href="/demo"
                                    className="inline-flex items-center text-indigo-600 font-semibold hover:underline text-sm"
                                >
                                    Request a demo →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
