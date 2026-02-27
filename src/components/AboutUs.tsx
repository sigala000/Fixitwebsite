"use client";

import { useLanguage } from "../context/LanguageContext";
import { Info, Target, Eye, ShieldCheck, TrendingUp, Users, Zap, Briefcase, Heart, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutUs() {
    const { t } = useLanguage();

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section id="about" className="py-32 bg-background relative overflow-hidden">
            {/* Background Decorations */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2"
            ></motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] translate-y-1/2"
            ></motion.div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Section */}
                <motion.div
                    className="max-w-4xl mb-24"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                        <Users size={14} />
                        {t('nav.about')}
                    </div>
                    <h2 className="text-5xl lg:text-7xl font-bold text-white mb-10 font-display leading-[1.1] tracking-tight">
                        {t('about.intro.title')}
                    </h2>
                    <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
                        {t('about.intro.p1')}
                    </p>
                </motion.div>

                {/* Problem & Solution Cards */}
                <motion.div
                    className="grid lg:grid-cols-2 gap-8 mb-32"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.div
                        variants={fadeIn}
                        className="bg-white/5 border border-white/10 p-12 rounded-[2.5rem] relative group hover:border-red-500/30 transition-all duration-500"
                    >
                        <div className="size-14 rounded-2xl bg-red-500/10 flex items-center justify-center mb-8 border border-red-500/20">
                            <AlertTriangle className="text-red-500 size-7" />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-6 font-display">{t('about.intro.p2')}</h4>
                        <p className="text-text-secondary leading-relaxed mb-8">
                            {t('about.intro.p3')}
                        </p>
                        <div className="h-1 w-20 bg-red-500/20 rounded-full" />
                    </motion.div>

                    <motion.div
                        variants={fadeIn}
                        className="bg-primary/5 border border-primary/20 p-12 rounded-[2.5rem] relative group hover:border-primary/40 transition-all duration-500"
                    >
                        <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
                            <Zap className="text-primary size-7" />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-6 font-display">{t('about.intro.p5')}</h4>
                        <p className="text-text-secondary leading-relaxed mb-8">
                            {t('about.intro.p4')}
                        </p>
                        <div className="h-1 w-20 bg-primary/40 rounded-full" />
                    </motion.div>
                </motion.div>

                {/* Why & What Section - Horizontal Layout */}
                <div className="grid lg:grid-cols-3 gap-12 mb-32">
                    <motion.div
                        className="lg:col-span-1"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <h3 className="text-4xl font-bold text-white mb-6 font-display">{t('about.why.title')}</h3>
                        <p className="text-text-secondary leading-relaxed mb-8">
                            {t('about.why.p1')}
                        </p>
                        <div className="space-y-4">
                            <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 italic">
                                <Heart className="text-primary size-5 flex-shrink-0" />
                                <p className="text-white text-sm font-medium">
                                    {t('about.why.p3')}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="lg:col-span-2 grid md:grid-cols-2 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeIn} className="glow-card p-8 rounded-3xl border-white/5">
                            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                <Users className="text-primary size-6" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">{t('about.what.l1')}</h4>
                            <p className="text-sm text-text-secondary leading-relaxed">
                                {t('about.what.p2')}
                            </p>
                        </motion.div>
                        <motion.div variants={fadeIn} className="glow-card p-8 rounded-3xl border-white/5">
                            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                <Briefcase className="text-primary size-6" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">{t('about.what.l3')}</h4>
                            <p className="text-sm text-text-secondary leading-relaxed">
                                {t('about.what.p3')}
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Mission & Vision - Redesigned Impactful Layout */}
                <div className="grid lg:grid-cols-5 gap-8 mb-32 items-stretch">
                    {/* Mission Card - More space for longer content */}
                    <motion.div
                        className="lg:col-span-3 bg-white/5 border border-white/10 p-10 lg:p-14 rounded-[3rem] relative overflow-hidden group hover:border-primary/30 transition-all duration-500"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="absolute top-0 right-0 size-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">
                                <Target size={16} />
                                {t('about.mission.title')}
                            </div>
                            <p className="text-2xl lg:text-3xl text-white font-display leading-[1.5]">
                                {t('about.mission.p1')}
                            </p>
                        </div>
                    </motion.div>

                    {/* Vision Card - High contrast for focused statement */}
                    <motion.div
                        className="lg:col-span-2 bg-primary p-10 lg:p-14 rounded-[3rem] relative overflow-hidden shadow-2xl shadow-primary/20 group hover:scale-[1.01] transition-all duration-500 flex flex-col justify-between"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="absolute bottom-0 right-0 size-48 bg-white/10 rounded-full blur-2xl translate-y-1/4 translate-x-1/4"></div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/20 text-background text-xs font-bold uppercase tracking-widest mb-8">
                                <Eye size={16} />
                                {t('about.vision.title')}
                            </div>
                            <p className="text-2xl lg:text-3xl text-background font-display font-bold leading-tight">
                                {t('about.vision.p1')}
                            </p>
                        </div>
                        <div className="relative z-10 mt-12 flex justify-end">
                            <Eye className="size-16 text-background/10" />
                        </div>
                    </motion.div>
                </div>

                {/* Split Commitment & Closing */}
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <h3 className="text-4xl font-bold text-white mb-10 font-display">{t('about.commitment.title')}</h3>
                        <div className="space-y-6">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <motion.div key={i} variants={fadeIn} className="flex gap-4 items-center group">
                                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-background transition-all duration-300">
                                        <CheckCircle2 size={18} />
                                    </div>
                                    <span className="text-lg text-white font-medium">{t(`about.commitment.l${i}`)}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-gradient-to-br from-primary to-primary-dark p-12 lg:p-16 rounded-[3rem] text-background relative overflow-hidden shadow-2xl shadow-primary/20"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="absolute top-0 right-0 size-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-6 font-display leading-tight">{t('about.closing.title')}</h3>
                            <p className="text-background/80 mb-10 leading-relaxed font-medium">
                                {t('about.closing.p1')}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="h-px w-12 bg-background/20"></div>
                                <p className="text-xl font-black uppercase tracking-widest">{t('about.closing.p3')}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
