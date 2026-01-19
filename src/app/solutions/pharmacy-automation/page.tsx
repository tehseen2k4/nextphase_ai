import React from 'react';
import { Metadata } from 'next';
import SolutionHero from '@/components/solutions/sections/SolutionHero';
import OutcomesSection from '@/components/solutions/sections/OutcomesSection';
import PricingSection from '@/components/solutions/sections/PricingSection';
import ComplianceSection from '@/components/solutions/sections/ComplianceSection';
import IntegrationsSection from '@/components/solutions/sections/IntegrationsSection';
import CTASection from '@/components/home/CTASection';
import {
    Pill, ClipboardList, BellRing, UserCheck,
    Lock, FileKey, ShieldAlert, Activity,
    Database, ShoppingCart, Server
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Pharmacy Automation | NextPhase AI',
    description: 'AI-driven operational efficiency for retail and clinical pharmacies.',
};

export default function PharmacyAutomationPage() {
    const workflows = [
        {
            title: "Prescription Intake",
            description: "Auto-scans and digitizes written or faxed scripts with 99.9% accuracy.",
            icon: Pill,
        },
        {
            title: "Refill Reminders",
            description: "Automated SMS/Voice agents call patients for refills, improving adherence.",
            icon: BellRing,
        },
        {
            title: "Inventory Tracking",
            description: "Real-time stock monitoring that triggers re-orders before critical shortages occur.",
            icon: ClipboardList,
        },
        {
            title: "Task Routing",
            description: "Intelligent queuing assigns verification tasks to pharmacists based on load.",
            icon: UserCheck,
        }
    ];

    const complianceFeatures = [
        {
            title: "Healthcare Data Alignment",
            description: "Designed to meet global healthcare data protection standards (including HIPAA/GDPR principles).",
            icon: Lock
        },
        {
            title: "Role-Based Access",
            description: "Strict permission levels ensure staff only see data relevant to their specific role.",
            icon: FileKey
        },
        {
            title: "Patient Data Isolation",
            description: "Logical separation of patient records prevents unauthorized cross-record viewing.",
            icon: ShieldAlert
        },
        {
            title: "Full Audit Trails",
            description: "Every file access, modification, and view is time-stamped and logged for compliance audits.",
            icon: Activity
        }
    ];

    const integrations = [
        {
            title: "POS Systems",
            description: "Syncs sales data directly with your dispensing workflow to prevent reconciliation errors.",
            icon: ShoppingCart
        },
        {
            title: "Inventory Databases",
            description: "Two-way sync with major wholesaler catalogs for automated restocking.",
            icon: Database
        },
        {
            title: "EHR / EMR",
            description: "Secure, read-only connectors to pull patient allergy and medication history.",
            icon: Server
        }
    ];

    const pricingTiers = [
        {
            name: "Clinic",
            price: "$799/mo",
            description: "For independent clinics and small pharmacies.",
            features: ["Up to 3 Pharmacists", "Auto-Refill Agents", "Basic Inventory", "Email Support"],
            cta: "Start Trial"
        },
        {
            name: "Regional",
            price: "$1,499/mo",
            description: "For mid-sized chains with multiple locations.",
            features: ["Up to 10 Locations", "POS Integration", "Centralized Analytics", "Priority Support"],
            cta: "Request Demo",
            popular: true
        },
        {
            name: "Hospital",
            price: "Custom",
            description: "Enterprise volume for hospital networks.",
            features: ["Unlimited Seats", "EHR Integration", "Custom SLA", "On-Premise Option"],
            cta: "Contact Sales"
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            <SolutionHero
                title="Pharmacy Automation"
                subtitle="AI-Driven Operational Efficiency"
                description="Automate workflows, reduce manual errors, and improve patient service while staying compliant."
                audience={['Retail Pharmacies', 'Hospital Networks', 'Clinical Ops']}
            />

            <OutcomesSection
                title="Workflow Automation"
                subtitle="Tangible efficiency gains for every shift."
                outcomes={workflows}
            />

            <IntegrationsSection
                integrations={integrations}
            />

            <ComplianceSection
                title="Data Protection & Safety"
                subtitle="Built with the strictest healthcare privacy standards in mind."
                badge="Healthcare Ready"
                features={complianceFeatures}
            />

            <PricingSection tiers={pricingTiers} />

            <div className="bg-white">
                <CTASection />
            </div>
        </div>
    );
}
