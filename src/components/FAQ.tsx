"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const questions = [
        {
            q: t('faq.questions.q1.question'),
            a: t('faq.questions.q1.answer')
        },
        {
            q: t('faq.questions.q2.question'),
            a: t('faq.questions.q2.answer')
        },
        {
            q: t('faq.questions.q3.question'),
            a: t('faq.questions.q3.answer')
        },
        {
            q: t('faq.questions.q4.question'),
            a: t('faq.questions.q4.answer')
        },
        {
            q: t('faq.questions.q5.question'),
            a: t('faq.questions.q5.answer')
        }
    ];

    return (
        <section id="faq" className="py-24 bg-background overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
                        {t('faq.title')}
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        {t('faq.subtitle')}
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {questions.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glow-card rounded-2xl border border-white/5 overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-bold text-white pr-8">
                                    {item.q}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="size-5 text-primary flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="size-5 text-text-secondary flex-shrink-0" />
                                )}
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-text-secondary leading-relaxed border-t border-white/5 mt-2">
                                            {item.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
