import React from 'react';
import { Shield, Lock, FileCheck, Eye } from 'lucide-react';

const ComplianceSection = () => {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            ></div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white mb-6 backdrop-blur-sm">
                        <Shield className="w-4 h-4 text-emerald-400" />
                        <span>Enterprise Grade Security</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Built for Compliance-First Operations
                    </h2>
                    <p className="text-lg text-slate-300">
                        We understand that in regulated industries, "move fast and break things" is not an option.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <Lock className="w-8 h-8 text-indigo-400 mb-4" />
                        <h3 className="text-lg font-bold text-white mb-2">GDPR & SOC2 Ready</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Data is encrypted at rest and in transit. Granular retention policies ensure you never hold PII longer than needed.
                        </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <FileCheck className="w-8 h-8 text-emerald-400 mb-4" />
                        <h3 className="text-lg font-bold text-white mb-2">Automated Audit Logs</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Every AI decision and human action is logged in an immutable ledger for rapid regulatory reporting.
                        </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <Eye className="w-8 h-8 text-amber-400 mb-4" />
                        <h3 className="text-lg font-bold text-white mb-2">Human-in-the-Loop</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Critical decisions (like hiring or medical alerts) always route to a human expert for final validation.
                        </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <Shield className="w-8 h-8 text-rose-400 mb-4" />
                        <h3 className="text-lg font-bold text-white mb-2">Bias Protection</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Algorithms are rigorously tested against bias benchmarks to ensure fair and equitable outcomes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComplianceSection;
