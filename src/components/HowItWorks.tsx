"use client";

import { useState } from "react";
import { Phone, Zap, Star, CheckCircle2, UserPlus, ShieldCheck, DollarSign, TrendingUp } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function HowItWorks() {
    const { t } = useLanguage();
    const [view, setView] = useState<"clients" | "artisans">("clients");

    const clientSteps = [
        {
            icon: Phone,
            title: t('howItWorks.clientSteps.step1.title'),
            description: t('howItWorks.clientSteps.step1.desc')
        },
        {
            icon: Zap,
            title: t('howItWorks.clientSteps.step2.title'),
            description: t('howItWorks.clientSteps.step2.desc')
        },
        {
            icon: Star,
            title: t('howItWorks.clientSteps.step3.title'),
            description: t('howItWorks.clientSteps.step3.desc')
        },
        {
            icon: CheckCircle2,
            title: t('howItWorks.clientSteps.step4.title'),
            description: t('howItWorks.clientSteps.step4.desc')
        }
    ];

    const artisanSteps = [
        {
            icon: UserPlus,
            title: t('howItWorks.artisanSteps.step1.title'),
            description: t('howItWorks.artisanSteps.step1.desc')
        },
        {
            icon: ShieldCheck,
            title: t('howItWorks.artisanSteps.step2.title'),
            description: t('howItWorks.artisanSteps.step2.desc')
        },
        {
            icon: DollarSign,
            title: t('howItWorks.artisanSteps.step3.title'),
            description: t('howItWorks.artisanSteps.step3.desc')
        },
        {
            icon: TrendingUp,
            title: t('howItWorks.artisanSteps.step4.title'),
            description: t('howItWorks.artisanSteps.step4.desc')
        }
    ];

    const steps = view === "clients" ? clientSteps : artisanSteps;

    return (
        <section id="how-it-works" className="py-24 bg-card/30 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold text-white mb-4 font-display">{t('howItWorks.title')}</h2>
                    <p className="text-text-secondary max-w-xl mx-auto">
                        {t('howItWorks.subtitle')}
                    </p>
                </motion.div>

                <div className="flex justify-center mb-16">
                    <div className="bg-card border border-white/10 p-1 rounded-xl flex relative">
                        <button
                            onClick={() => setView("clients")}
                            className={`px-8 py-3 rounded-lg font-bold transition-all relative z-10 ${view === "clients" ? "text-background" : "text-white hover:bg-white/5"}`}
                        >
                            {t('howItWorks.forClients')}
                        </button>
                        <button
                            onClick={() => setView("artisans")}
                            className={`px-8 py-3 rounded-lg font-bold transition-all relative z-10 ${view === "artisans" ? "text-background" : "text-white hover:bg-white/5"}`}
                        >
                            {t('howItWorks.forArtisans')}
                        </button>
                        <motion.div
                            className="absolute inset-y-1 bg-primary rounded-lg"
                            initial={false}
                            animate={{
                                x: view === "clients" ? 4 : "calc(50% + 1px)",
                                width: "calc(50% - 4px)"
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid md:grid-cols-4 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {steps.map((step, index) => (
                            <motion.div
                                key={`${view}-${index}`}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="glow-card p-8 rounded-2xl flex flex-col items-center text-center"
                            >
                                <div className="size-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                                    <step.icon className="text-white size-8" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 font-display">{step.title}</h3>
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
