import { Users, Home, Activity, BrainCircuit, Heart, LucideIcon } from 'lucide-react';

export interface Solution {
    title: string;
    description: string;
    href: string;
    icon: LucideIcon;
    color: string;
    bg: string;
    border: string;
    benefit: string;
}

export const solutions: Solution[] = [
    {
        title: "Recruitment OS",
        description: "Automate hiring flows with defensible compliance and bias reduction.",
        href: "/solutions/recruitment-os",
        icon: Users,
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-100",
        benefit: "Reduces time-to-hire by 40% while ensuring 100% compliance."
    },
    {
        title: "Smart Home Monitoring",
        description: "Privacy-first pattern detection for aging in place and safety.",
        href: "/solutions/smart-home-monitoring",
        icon: Home,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-100",
        benefit: "Detects falls and routine shifts without cameras or wearables."
    },
    {
        title: "Virtual Care & Assistive Living",
        description: "Daily check-ins and family alerts for seniors living independently.",
        href: "/solutions/virtual-care",
        icon: Heart,
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-100",
        benefit: "AI-assisted daily check-ins with human escalation — so families know someone will notice."
    },
    {
        title: "Pharmacy Automation",
        description: "Zero-error operational flows and automated audit trails.",
        href: "/solutions/pharmacy-automation",
        icon: Activity,
        color: "text-rose-600",
        bg: "bg-rose-50",
        border: "border-rose-100",
        benefit: "Eliminates dispensing errors and automates regulatory reporting."
    },
    {
        title: "AI Automation Core",
        description: "The central intelligence engine scaling across all your systems.",
        href: "/solutions/ai-automation-core",
        icon: BrainCircuit,
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-100",
        benefit: "One unified brain to orchestrate all your operational workflows."
    }
];
