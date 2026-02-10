"use client";

import { useState } from "react";
import { Phone, Zap, Star, CheckCircle2, UserPlus, ShieldCheck, DollarSign, TrendingUp } from "lucide-react";

const clientSteps = [
    {
        icon: Phone,
        title: "1. Request",
        description: "Select a service and describe your problem."
    },
    {
        icon: Zap,
        title: "2. Match",
        description: "Get matched with verified artisans nearby."
    },
    {
        icon: Star,
        title: "3. Choose",
        description: "Compare profiles, prices, and reviews."
    },
    {
        icon: CheckCircle2,
        title: "4. Done",
        description: "Hire securely and get the job done."
    }
];

const artisanSteps = [
    {
        icon: UserPlus,
        title: "1. Create Profile",
        description: "Showcase your skills and previous work."
    },
    {
        icon: ShieldCheck,
        title: "2. Get Verified",
        description: "Complete our rigorous vetting process."
    },
    {
        icon: DollarSign,
        title: "3. Start Earning",
        description: "Receive job requests and earn securely."
    },
    {
        icon: TrendingUp,
        title: "4. Grow Business",
        description: "Build your reputation and grow your client base."
    }
];

export default function HowItWorks() {
    const [view, setView] = useState<"clients" | "artisans">("clients");
    const steps = view === "clients" ? clientSteps : artisanSteps;

    return (
        <section id="how-it-works" className="py-24 bg-card/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4 font-display">How FIXIT Works</h2>
                    <p className="text-text-secondary max-w-xl mx-auto">
                        Whether you need a repair or want to offer your skills, we've made the process seamless.
                    </p>
                </div>

                <div className="flex justify-center mb-16">
                    <div className="bg-card border border-white/10 p-1 rounded-xl flex">
                        <button
                            onClick={() => setView("clients")}
                            className={`px-8 py-3 rounded-lg font-bold transition-all ${view === "clients" ? "bg-primary text-background" : "text-white hover:bg-white/5"}`}
                        >
                            For Clients
                        </button>
                        <button
                            onClick={() => setView("artisans")}
                            className={`px-8 py-3 rounded-lg font-bold transition-all ${view === "artisans" ? "bg-primary text-background" : "text-white hover:bg-white/5"}`}
                        >
                            For Artisans
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <div key={index} className="glow-card p-8 rounded-2xl flex flex-col items-center text-center">
                            <div className="size-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                                <step.icon className="text-white size-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-display">{step.title}</h3>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
