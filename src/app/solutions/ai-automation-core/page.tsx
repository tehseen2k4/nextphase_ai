import React from 'react';
import { Metadata } from 'next';
import SolutionHero from '@/components/solutions/sections/SolutionHero';
import OutcomesSection from '@/components/solutions/sections/OutcomesSection';
import ProcessFlow from '@/components/solutions/sections/ProcessFlow';
import ComplianceSection from '@/components/solutions/sections/ComplianceSection';
import CTASection from '@/components/home/CTASection';
import {
    Layers, Cpu, GitBranch, Terminal, Shield,
    Briefcase, Stethoscope, Pill, AlertOctagon, Lock, Server
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'AI Automation Core | NextPhase AI',
    description: 'The modular automation engine that protects workflows, data, and AI across industries.',
};

export default function AIAutomationCorePage() {
    const engineLayers = [
        {
            title: "Input Layer",
            description: "Standardizes disparate data from Forms, webhooks, IoT sensors, and external APIs into a unified event stream."
        },
        {
            title: "Automation Logic",
            description: "Orchestrates complex multi-step workflows using conditional rules, loops, and state management."
        },
        {
            title: "Intelligence Layer",
            description: "Applies NLP, pattern recognition, and predictive models to enrich data and make real-time decisions."
        },
        {
            title: "Execution Layer",
            description: "Triggers downstream actions: updates CRMs, sends notifications, or dispatches commands to physical devices."
        },
        {
            title: "Control Layer",
            description: "Provides full observability with comprehensive logging, version control, and granular access management."
        }
    ];

    const useCases = [
        {
            title: "Recruitment",
            description: "Candidate routing, automated screening, and compliance tracking.",
            icon: Briefcase,
        },
        {
            title: "Healthcare",
            description: "Alert triage, patient care coordination, and data-driven follow-ups.",
            icon: Stethoscope,
        },
        {
            title: "Pharmacy",
            description: "Inventory triggers, prescription workflow automation, and audit logging.",
            icon: Pill,
        },
        {
            title: "Smart Infrastructure",
            description: "Event detection, automated dispatch, and incident reporting.",
            icon: AlertOctagon,
        }
    ];

    const securityFeatures = [
        {
            title: "Role-Based Access",
            description: "Granular permission sets ensure users and API keys only access what they explicitly need.",
            icon: Shield
        },
        {
            title: "Secure Authentication",
            description: "OAuth2 and mTLS support for all API endpoints, ensuring zero unauthorized access.",
            icon: Lock
        },
        {
            title: "Redundancy & Uptime",
            description: "Distributed architecture with automatic failover ensures 99.99% workflow reliability.",
            icon: Server
        },
        {
            title: "Workflow Versioning",
            description: "Rollback to any previous state instantly. Audit logs track every configuration change.",
            icon: GitBranch
        }
    ];



    return (
        <div className="bg-slate-50 min-h-screen">
            <SolutionHero
                title="AI Automation Core"
                subtitle="The Engine Behind Our Solutions"
                description="A modular automation engine that connects workflows, data, and AI across industries. Powers scaling operations with reliability."
                audience={['CTOs', 'Technical Founders', 'Enterprise Ops']}
            />

            <ProcessFlow steps={engineLayers} />

            <OutcomesSection
                title="One Engine. Multiple Industries."
                subtitle="Flexible enough to power diverse sector-specific workflows."
                outcomes={useCases}
            />

            <ComplianceSection
                title="Security, Reliability & Control"
                subtitle="Enterprise-grade architecture designed for mission-critical loads."
                badge="System Core"
                features={securityFeatures}
            />

            <div className="bg-white">
                <CTASection />
            </div>
        </div>
    );
}
