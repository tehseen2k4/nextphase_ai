import React from 'react';
import { Metadata } from 'next';
import SolutionHero from '@/components/solutions/sections/SolutionHero';
import ProblemFramingSection from '@/components/solutions/sections/ProblemFramingSection';
import ServiceBoundariesSection from '@/components/solutions/sections/ServiceBoundariesSection';
import ProcessFlow from '@/components/solutions/sections/ProcessFlow';
import PricingSection from '@/components/solutions/sections/PricingSection';
import ComplianceSection from '@/components/solutions/sections/ComplianceSection';
import AIExplanationSection from '@/components/solutions/sections/AIExplanationSection';
import SocialProofSection from '@/components/solutions/sections/SocialProofSection';
import CTASection from '@/components/home/CTASection';
import { Shield, FileCheck, Users, Lock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Virtual Care & Assistive Living | NextPhase AI',
    description: 'Daily check-in and family alert service for seniors living independently. AI-assisted daily check-ins with human escalation.',
};

export default function VirtualCarePage() {
    // X.2 - Problem Framing (Emotional Buy-in)
    const painPoints = [
        "Did mom reply today?",
        "What if something happens and no one notices?",
        "You can't call every day — and that guilt never leaves."
    ];

    // X.3 - What We Do (Service Boundaries)
    const includedServices = [
        "Daily automated check-ins (SMS / voice)",
        "Missed check-in detection",
        "Human follow-up calls",
        "Family notifications",
        "Medication reminders (non-clinical)",
        "Appointment & care coordination",
        "Weekly family summaries"
    ];

    const notIncludedServices = [
        "No diagnosis",
        "No prescribing",
        "No medical decision-making"
    ];

    // X.4 - How It Works (Step-by-Step)
    const steps = [
        {
            title: "Family Books Assessment",
            description: "Schedule a 15-minute call to understand your loved one's needs and daily routine."
        },
        {
            title: "Consent + Intake Completed",
            description: "We obtain proper consent and gather essential information with family permissions."
        },
        {
            title: "Care Plan & Escalation Rules Set",
            description: "Together we define check-in schedules, escalation contacts, and communication preferences."
        },
        {
            title: "Daily Check-Ins Begin",
            description: "Automated daily check-ins start via their preferred method (SMS, voice call, or both)."
        },
        {
            title: "Missed Response → Escalation",
            description: "If a check-in is missed, our human care team follows up and notifies family as needed."
        },
        {
            title: "Family Gets Weekly Summary",
            description: "Receive a comprehensive weekly report on check-in patterns, concerns, and overall well-being."
        }
    ];

    // X.5 - Packages & Pricing
    const pricingTiers = [
        {
            name: "Basic",
            price: "Starting from $99/mo",
            description: "Daily check-in with family alerts for peace of mind.",
            features: [
                "Daily automated check-ins",
                "Missed check-in alerts",
                "Family notifications",
                "Email support"
            ],
            cta: "Request Demo"
        },
        {
            name: "Standard",
            price: "Starting from $199/mo",
            description: "Enhanced monitoring with weekly summaries and coordination.",
            features: [
                "Everything in Basic",
                "Medication reminders",
                "Weekly family summaries",
                "Priority phone support",
                "Pattern detection alerts"
            ],
            cta: "Request Demo",
            popular: true
        },
        {
            name: "Premium",
            price: "Starting from $399/mo",
            description: "Full care coordination concierge for comprehensive support.",
            features: [
                "Everything in Standard",
                "Appointment coordination",
                "Care team liaison",
                "Dedicated care coordinator",
                "24/7 escalation support"
            ],
            cta: "Contact Sales"
        }
    ];

    // X.6 - Compliance & Trust
    const complianceFeatures = [
        {
            title: "Consent-Based Communication",
            description: "All services require explicit consent from your loved one and family permissions are documented.",
            icon: FileCheck
        },
        {
            title: "PIPEDA-Aligned Practices",
            description: "We follow Canadian privacy standards with minimal data storage and clear retention policies.",
            icon: Shield
        },
        {
            title: "Family Permissions",
            description: "Clear escalation policies ensure the right people are notified at the right time.",
            icon: Users
        },
        {
            title: "Secure Data Handling",
            description: "All communications are encrypted and stored securely with access controls.",
            icon: Lock
        }
    ];

    // X.7 - AI Explanation
    const aiPoints = [
        {
            title: "AI Handles Reminders & Patterns",
            description: "Technology manages daily check-ins and detects unusual patterns in responses or timing."
        },
        {
            title: "Humans Make Decisions",
            description: "Every escalation, concern, or important decision is handled by our trained care team."
        },
        {
            title: "AI Never Diagnoses",
            description: "We don't provide medical advice. We coordinate care and keep families informed."
        },
        {
            title: "AI Assists Families",
            description: "Technology helps you stay connected without replacing your relationship or care."
        }
    ];

    // X.8 - Social Proof
    const socialProofStatements = [
        "Designed with caregivers in mind",
        "Built using proven care workflows",
        "Developed in consultation with senior care professionals",
        "Pilot clients report significant peace of mind"
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* X.1 - Hero Section (Positioning & Clarity) */}
            <SolutionHero
                title="Virtual Care & Assistive Living"
                subtitle="Daily Check-In & Family Alert Service for Seniors Living Independently"
                description="AI-assisted daily check-ins with human escalation — so families know someone will notice."
                audience={['Adult Children of Aging Parents', 'Family Caregivers', 'Senior Care Coordinators']}
                trustLine="Non-clinical • Consent-based • Family-first"
            />

            {/* X.2 - Problem Framing */}
            <ProblemFramingSection painPoints={painPoints} />

            {/* X.3 - What We Do (Service Boundaries) */}
            <ServiceBoundariesSection
                included={includedServices}
                notIncluded={notIncludedServices}
            />

            {/* X.4 - How It Works */}
            <div className="bg-white">
                <ProcessFlow steps={steps} />
            </div>

            {/* X.5 - Packages & Pricing */}
            <PricingSection tiers={pricingTiers} />

            {/* X.6 - Compliance & Trust */}
            <div className="bg-white">
                <ComplianceSection features={complianceFeatures} />
            </div>

            {/* X.7 - AI Explanation */}
            <AIExplanationSection points={aiPoints} />

            {/* X.8 - Social Proof */}
            <SocialProofSection statements={socialProofStatements} />

            {/* X.9 - Strong CTA */}
            <div className="bg-white">
                <CTASection />
            </div>
        </div>
    );
}
