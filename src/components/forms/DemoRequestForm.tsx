"use client";

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface DemoRequestFormProps {
    className?: string;
}

interface FormData {
    fullName: string;
    email: string;
    companyName: string;
    phone: string;
    solutionInterest: string;
    message: string;
    contactMethod: 'email' | 'phone';
}

interface FormErrors {
    fullName?: string;
    email?: string;
    phone?: string;
}

export default function DemoRequestForm({ className = '' }: DemoRequestFormProps) {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        companyName: '',
        phone: '',
        solutionInterest: 'all',
        message: '',
        contactMethod: 'email'
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        // Full Name validation
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        } else if (formData.fullName.trim().length < 2) {
            newErrors.fullName = 'Name must be at least 2 characters';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Phone validation (if contact method is phone)
        if (formData.contactMethod === 'phone' && formData.phone.trim()) {
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (!phoneRegex.test(formData.phone)) {
                newErrors.phone = 'Please enter a valid phone number';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/demo-request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                // Reset form
                setFormData({
                    fullName: '',
                    email: '',
                    companyName: '',
                    phone: '',
                    solutionInterest: 'all',
                    message: '',
                    contactMethod: 'email'
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error for this field when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    if (submitStatus === 'success') {
        return (
            <div className={`bg-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-sm ${className}`}>
                <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                        Request Received!
                    </h3>
                    <p className="text-lg text-slate-600 mb-6">
                        Thank you for your interest. Our team will reach out to you within 24 hours to schedule your personalized demo.
                    </p>
                    <button
                        onClick={() => setSubmitStatus('idle')}
                        className="text-indigo-600 hover:text-indigo-700 font-semibold"
                    >
                        Submit Another Request
                    </button>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={`bg-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-sm ${className}`}>
            {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                        <p className="text-red-800 font-semibold">Submission Failed</p>
                        <p className="text-red-600 text-sm">Please try again or contact us directly.</p>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-slate-900 mb-2">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.fullName ? 'border-red-300 bg-red-50' : 'border-slate-200'
                            } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                        placeholder="John Doe"
                    />
                    {errors.fullName && (
                        <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-300 bg-red-50' : 'border-slate-200'
                            } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                        placeholder="john@company.com"
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                </div>

                {/* Company Name */}
                <div>
                    <label htmlFor="companyName" className="block text-sm font-semibold text-slate-900 mb-2">
                        Company Name
                    </label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="Your Company"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-300 bg-red-50' : 'border-slate-200'
                            } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                        placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                </div>
            </div>

            {/* Solution Interest */}
            <div className="mt-6">
                <label htmlFor="solutionInterest" className="block text-sm font-semibold text-slate-900 mb-2">
                    Which solution are you interested in?
                </label>
                <select
                    id="solutionInterest"
                    name="solutionInterest"
                    value={formData.solutionInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                >
                    <option value="all">All Solutions</option>
                    <option value="recruitment-os">Recruitment OS</option>
                    <option value="smart-home-monitoring">Smart Home Monitoring</option>
                    <option value="virtual-care">Virtual Care & Assistive Living</option>
                    <option value="pharmacy-automation">Pharmacy Automation</option>
                    <option value="ai-automation-core">AI Automation Core</option>
                </select>
            </div>

            {/* Contact Method */}
            <div className="mt-6">
                <label className="block text-sm font-semibold text-slate-900 mb-3">
                    Preferred Contact Method
                </label>
                <div className="flex gap-4">
                    <label className="flex items-center cursor-pointer">
                        <input
                            type="radio"
                            name="contactMethod"
                            value="email"
                            checked={formData.contactMethod === 'email'}
                            onChange={handleChange}
                            className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="ml-2 text-slate-700">Email</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                        <input
                            type="radio"
                            name="contactMethod"
                            value="phone"
                            checked={formData.contactMethod === 'phone'}
                            onChange={handleChange}
                            className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="ml-2 text-slate-700">Phone</span>
                    </label>
                </div>
            </div>

            {/* Message */}
            <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                    Tell us about your needs (optional)
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                    placeholder="What challenges are you looking to solve?"
                />
            </div>

            {/* Submit Button */}
            <div className="mt-8">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 px-8 rounded-xl bg-slate-900 text-white font-semibold flex items-center justify-center hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Submitting...
                        </>
                    ) : (
                        <>
                            Request Demo
                            <Send className="ml-2 h-4 w-4" />
                        </>
                    )}
                </button>
            </div>

            <p className="mt-4 text-sm text-slate-500 text-center">
                We'll get back to you within 24 hours to schedule your personalized demo.
            </p>
        </form>
    );
}
