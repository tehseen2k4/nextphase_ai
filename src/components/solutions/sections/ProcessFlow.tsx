import React from 'react';

interface Step {
    title: string;
    description: string;
}

interface ProcessFlowProps {
    steps: Step[];
}

const ProcessFlow = ({ steps }: ProcessFlowProps) => {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        How the System Works
                    </h2>
                    <p className="text-lg text-slate-500">
                        Transparent, auditable logic from intake to completion.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[2.5rem] left-[10%] right-[10%] h-0.5 bg-slate-200 z-0"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative flex flex-col items-center text-center">
                                {/* Number Node */}
                                <div className="w-20 h-20 rounded-2xl bg-white border-2 border-slate-100 shadow-lg flex items-center justify-center text-xl font-bold text-indigo-600 mb-6 z-10 backdrop-blur-sm">
                                    {idx + 1}
                                </div>

                                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">
                                    {step.description}
                                </p>

                                {/* Connector for Mobile */}
                                {idx !== steps.length - 1 && (
                                    <div className="lg:hidden absolute bottom-[-2rem] left-1/2 w-0.5 h-8 bg-slate-200 -translate-x-1/2"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessFlow;
