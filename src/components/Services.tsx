"use client";

import { Construction, Paintbrush, Hammer, Monitor, Zap, Droplets, Laptop, Drill } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

export default function Services() {
    const { t } = useLanguage();

    const services = [
        { icon: Construction, name: t('services.items.masonry') },
        { icon: Paintbrush, name: t('services.items.painting') },
        { icon: Hammer, name: t('services.items.welding') },
        { icon: Monitor, name: t('services.items.it') },
        { icon: Zap, name: t('services.items.electrical') },
        { icon: Droplets, name: t('services.items.plumbing') },
        { icon: Laptop, name: t('services.items.carpentry') },
        { icon: Drill, name: t('services.items.mechanical') },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="services" className="py-24 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold text-white mb-4 font-display">{t('services.title')}</h2>
                    <p className="text-text-secondary max-w-xl mx-auto">
                        {t('services.subtitle')}
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(0, 255, 0, 0.05)",
                                borderColor: "#00ff00"
                            }}
                            className="glow-card p-10 rounded-2xl flex flex-col items-center justify-center gap-6 group cursor-default"
                        >
                            <service.icon className="size-12 text-text-secondary group-hover:text-primary transition-colors duration-300" />
                            <h3 className="text-lg font-bold text-white font-display text-center">{service.name}</h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
