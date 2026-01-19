import React from 'react';
import { Metadata } from 'next';
import SolutionHero from '@/components/solutions/sections/SolutionHero';
import OutcomesSection from '@/components/solutions/sections/OutcomesSection';
import ProcessFlow from '@/components/solutions/sections/ProcessFlow';
import PricingSection from '@/components/solutions/sections/PricingSection';
import ComplianceSection from '@/components/solutions/sections/ComplianceSection';
import CTASection from '@/components/home/CTASection'; // Reusing global CTA
import { Clock, CheckSquare, MessageCircle, BarChart3, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Recruitment OS | NextPhase AI',
    description: 'AI-powered hiring automation system that screens, schedules, and follows up without manual overhead.',
};

export default function RecruitmentOSPage() {
    const outcomes = [
        {
            title: "Reduce Time-to-Hire",
            description: "Automated screening and scheduling moves candidates from application to interview in minutes, not days.",
            icon: Clock,
            stats: "40%"
        },
        {
            title: "Eliminate Manual Screening",
            description: "AI parses resumes and ranks candidates based on your specific criteria, handling 100% of the initial funnel.",
            icon: CheckSquare,
            stats: "100%"
        },
        {
            title: "Instant Response Rates",
            description: "Engage every applicant immediately via WhatsApp/Email, preventing top talent from slipping away.",
            icon: MessageCircle,
            stats: "24/7"
        },
        {
            title: "Centralized Pipeline",
            description: "Full visibility into every candidate's status with automated stage tracking in your CRM.",
            icon: BarChart3
        }
    ];

    const steps = [
        {
            title: "Candidate Intake",
            description: "Aggregates applications from job portals, career pages, and referrals into a single stream."
        },
        {
            title: "AI Screening",
            description: "Parses resumes, scores qualifications, and shortlists best-fit candidates automatically."
        },
        {
            title: "Auto-Communication",
            description: "Instantly engages shortlisted candidates to schedule interviews via email or WhatsApp."
        },
        {
            title: "Pipeline Management",
            description: "Updates CRM stages, notifies hiring managers, and tracks all interactions in real-time."
        },
        {
            title: "Reporting & Optimization",
            description: "Generates insights on funnel performance to continuously improve your hiring quality."
        }
    ];

    const pricingTiers = [
        {
            name: "Starter",
            price: "$499/mo",
            description: "Perfect for small teams hiring for 1-2 roles at a time.",
            features: ["Up to 2 Active Roles", "AI Screening & Ranking", "Automated Email Scheduling", "Basic CRM Integration"],
            cta: "Start Trial"
        },
        {
            name: "Growth",
            price: "$999/mo",
            description: "For scaling companies with continuous hiring needs.",
            features: ["Up to 10 Active Roles", "WhatsApp & SMS Automation", "Advanced Analytics", "Custom Interview Workflows"],
            cta: "Request Demo",
            popular: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "Full recruitment automation for large organizations.",
            features: ["Unlimited Roles", "Custom ATS Integration", "Dedicated Success Manager", "SLA-Backed Support"],
            cta: "Contact Sales"
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            <SolutionHero
                title="Recruitment OS"
                subtitle="AI-Powered Hiring Automation System"
                description="Automate candidate screening, interview scheduling, follow-ups, and pipeline tracking—without manual coordination."
                audience={['HR Teams', 'Agencies', 'Fast-Scaling Companies']}
            />

            <OutcomesSection outcomes={outcomes} />

            <ProcessFlow steps={steps} />

            <ComplianceSection />

            <PricingSection tiers={pricingTiers} />

            <div className="bg-white">
                <CTASection />
            </div>
        </div>
    );
}
