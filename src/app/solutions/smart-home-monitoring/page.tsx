import React from 'react';
import { Metadata } from 'next';
import SolutionHero from '@/components/solutions/sections/SolutionHero';
import OutcomesSection from '@/components/solutions/sections/OutcomesSection';
import ProcessFlow from '@/components/solutions/sections/ProcessFlow';
import ComplianceSection from '@/components/solutions/sections/ComplianceSection';
import CTASection from '@/components/home/CTASection';
import { EyeOff, Clock, AlertTriangle, Fingerprint, Lock, ShieldCheck, Wifi, Server } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Smart Home Monitoring | NextPhase AI',
    description: 'AI-driven monitoring and alert systems for modern smart infrastructure.',
};

export default function SmartHomeMonitoringPage() {
    const painPoints = [
        {
            title: "No Centralized Visibility",
            description: "Managing fragmented data from hundreds of disconnected sensors and cameras across properties.",
            icon: EyeOff,
        },
        {
            title: "Delayed Response",
            description: "Manual monitoring means critical incidents are often missed or addressed too late.",
            icon: Clock,
        },
        {
            title: "Alert Fatigue",
            description: "Thousands of false alarms desensitize staff, leading to missed genuine threats.",
            icon: AlertTriangle,
        },
        {
            title: "Security Blind Spots",
            description: "Legacy systems fail to detect sophisticated digital or physical intrusion patterns.",
            icon: Fingerprint,
        }
    ];

    const architectureLayers = [
        {
            title: "Device Layer",
            description: "Ingests raw streams from IoT sensors, cameras, and access control points."
        },
        {
            title: "Data Ingestion",
            description: "Secure, real-time message brokering ensuring zero data loss during transit."
        },
        {
            title: "AI Monitoring Core",
            description: "Detects patterns, anomalies, and potential threats using predictive models."
        },
        {
            title: "Control & Alerting",
            description: "Orchestrates automated responses and instantly notifies relevant personnel."
        },
        {
            title: "Management Dashboard",
            description: "Unified view for property managers to audit logs, manage access, and view reports."
        }
    ];

    const securityFeatures = [
        {
            title: "Device Authentication",
            description: "Strict mTLS handshake protocols ensure only authorized hardware connects to the grid.",
            icon: Lock
        },
        {
            title: "End-to-End Encryption",
            description: "AES-256 encryption protects all data streams from the edge sensor to the cloud core.",
            icon: ShieldCheck
        },
        {
            title: "Local Integrity",
            description: "Edge-computing capabilities allow critical alerts to fire even during internet outages.",
            icon: Wifi
        },
        {
            title: "Isolated Infrastructure",
            description: "Tenant data is logically separated to prevent cross-contamination or unauthorized access.",
            icon: Server
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            <SolutionHero
                title="Smart Home Monitoring"
                subtitle="AI-Driven Monitoring & Alert Systems"
                description="Real-time monitoring, intelligent alerts, and automated responses for modern smart infrastructure."
                audience={['Property Managers', 'Real Estate Operators', 'Smart Buildings']}
            />

            <OutcomesSection
                title="Industry Pain Points"
                subtitle="Real-world operational challenges that legacy systems fail to address."
                outcomes={painPoints}
            />

            <ProcessFlow steps={architectureLayers} />

            <ComplianceSection
                title="Infrastructure Security"
                subtitle="Built to protect physical assets and digital privacy equally."
                badge="IoT Defense Support"
                features={securityFeatures}
            />

            <div className="bg-white">
                <CTASection />
            </div>
        </div>
    );
}
