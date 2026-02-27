"use client";

import { Apple, Play } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

export default function ArtisanCTA() {
    const { t } = useLanguage();

    return (
        <section id="join" className="py-24 px-6 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto bg-primary rounded-[2.5rem] p-12 lg:p-20 relative overflow-hidden flex flex-col items-center text-center"
            >
                {/* Decorative Circle */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-0 right-0 size-[400px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"
                ></motion.div>

                <div className="relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl lg:text-5xl font-bold text-background mb-8 max-w-2xl font-display"
                    >
                        {t('cta.title')}
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-6"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-black/90 transition-all shadow-xl"
                        >
                            <Apple size={28} />
                            <div className="text-left">
                                <p className="text-[10px] uppercase leading-none opacity-60">{t('cta.appStore')}</p>
                                <p className="text-xl font-bold leading-tight">App Store</p>
                            </div>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-black/90 transition-all shadow-xl"
                        >
                            <Play size={28} fill="currentColor" />
                            <div className="text-left">
                                <p className="text-[10px] uppercase leading-none opacity-60">{t('cta.googlePlay')}</p>
                                <p className="text-xl font-bold leading-tight">Google Play</p>
                            </div>
                        </motion.button>
                    </motion.div>
                </div>

                {/* Big 'FIXIT' Text Background */}
                <motion.h1
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 0.1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute right-12 top-12 text-[120px] font-black text-background pointer-events-none font-display hidden lg:block"
                >
                    FIXIT
                </motion.h1>
            </motion.div>
        </section>
    );
}
