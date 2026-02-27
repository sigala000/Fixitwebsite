"use client";

import { ShieldCheck, ClipboardCheck, MapPin, Lock, Info } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

export default function TrustFeatures() {
    const { t } = useLanguage();

    const features = [
        {
            icon: ShieldCheck,
            title: t('trust.features.checks.title'),
            description: t('trust.features.checks.desc')
        },
        {
            icon: ClipboardCheck,
            title: t('trust.features.skills.title'),
            description: t('trust.features.skills.desc')
        },
        {
            icon: MapPin,
            title: t('trust.features.gps.title'),
            description: t('trust.features.gps.desc')
        },
        {
            icon: Info,
            title: t('trust.features.dispute.title'),
            description: t('trust.features.dispute.desc')
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="trust" className="py-24 bg-card/20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            variants={itemVariants}
                            className="text-4xl md:text-5xl font-bold text-white mb-6 font-display leading-tight"
                        >
                            {t('trust.title1')} <br />
                            <span className="text-primary">{t('trust.title2')}</span>
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="text-text-secondary text-lg mb-12 max-w-xl"
                        >
                            {t('trust.subtitle')}
                        </motion.p>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <motion.div key={index} variants={itemVariants} className="flex gap-4">
                                    <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                                        <feature.icon className="text-primary size-3.5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">{feature.title}</h4>
                                        <p className="text-text-secondary text-sm">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full"></div>
                        <div className="relative glow-card p-12 rounded-[2rem] aspect-square flex items-center justify-center border-white/5 overflow-hidden">
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.2, 0.3, 0.2]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute"
                            >
                                <ShieldCheck className="size-48 text-primary" />
                            </motion.div>
                            <div className="relative z-10 text-center">
                                <motion.div
                                    animate={{
                                        y: [0, -10, 0]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <ShieldCheck className="size-32 text-primary mx-auto mb-6" />
                                </motion.div>
                                <h3 className="text-3xl font-bold text-white font-display">{t('trust.vetted')}</h3>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
