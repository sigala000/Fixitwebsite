"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

export default function MissionContact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-24 px-6 bg-card/10 overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-white mb-8 font-display">{t('mission.title')}</h2>
                    <p className="text-text-secondary text-lg leading-relaxed mb-12">
                        {t('mission.description')}
                    </p>
                    <div className="flex items-center gap-12">
                        <div className="text-left">
                            <motion.p
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                                className="text-4xl font-bold text-primary font-display"
                            >
                                2,000+
                            </motion.p>
                            <p className="text-sm text-text-secondary uppercase tracking-widest mt-1">
                                {t('mission.stats.artisans')}
                            </p>
                        </div>
                        <div className="text-left">
                            <motion.p
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                                className="text-4xl font-bold text-primary font-display"
                            >
                                10+
                            </motion.p>
                            <p className="text-sm text-text-secondary uppercase tracking-widest mt-1">
                                {t('mission.stats.cities')}
                            </p>
                        </div>
                        <div className="text-left">
                            <motion.p
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                                className="text-4xl font-bold text-primary font-display"
                            >
                                98%
                            </motion.p>
                            <p className="text-sm text-text-secondary uppercase tracking-widest mt-1">
                                {t('mission.stats.satisfaction')}
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glow-card rounded-3xl p-10 border-white/5"
                >
                    <h3 className="text-2xl font-bold text-white mb-8 font-display">{t('contact.title')}</h3>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-text-secondary hover:text-white transition-colors group">
                            <div className="size-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <Mail className="size-5 group-hover:text-primary transition-colors" />
                            </div>
                            <a
                                href="mailto:fixit3557@gmail.com"
                                className="font-medium hover:text-primary transition-colors"
                            >
                                fixit3557@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-4 text-text-secondary hover:text-white transition-colors group">
                            <div className="size-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <Phone className="size-5 group-hover:text-primary transition-colors" />
                            </div>
                            <div className="flex flex-wrap gap-x-2 font-medium">
                                <a href="tel:+237670650364" className="hover:text-primary transition-colors">+237 670650364</a>
                                <span>/</span>
                                <a href="tel:+237681056932" className="hover:text-primary transition-colors">+237 681056932</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-text-secondary">
                            <div className="size-10 rounded-full bg-white/5 flex items-center justify-center">
                                <MapPin className="size-5" />
                            </div>
                            <span className="font-medium">Yaounde, Cameroon</span>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-white/5 text-white border border-white/10 font-bold py-4 rounded-xl transition-all mt-12"
                    >
                        {t('contact.cta')}
                    </motion.button>
                </motion.div>
            </div >
        </section >
    );
}
