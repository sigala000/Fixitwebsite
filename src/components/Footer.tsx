"use client";

import { Wrench, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-background pt-24 pb-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-20">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <Wrench className="text-primary size-6" />
                            <h2 className="text-2xl font-bold text-white tracking-tighter font-display">FIXIT</h2>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed mb-6">
                            {t('footer.description')}
                        </p>
                    </div>

                    {/* Platform */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-display">{t('footer.platform.title')}</h4>
                        <ul className="space-y-4 text-sm text-text-secondary">
                            <li><a href="#how-it-works" className="hover:text-primary transition-colors">{t('nav.howItWorks')}</a></li>
                            <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">{t('footer.platform.services')}</a></li>
                            <li><a href="#join" className="hover:text-primary transition-colors">{t('nav.join')}</a></li>
                            <li><a href="#trust" className="hover:text-primary transition-colors">{t('nav.trust')}</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-display">{t('footer.legal.title')}</h4>
                        <ul className="space-y-4 text-sm text-text-secondary">
                            <li><a href="#" className="hover:text-primary transition-colors">{t('footer.legal.terms')}</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">{t('footer.legal.privacy')}</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-display">Contact</h4>
                        <ul className="space-y-4 text-sm text-text-secondary">
                            <li className="flex items-center gap-3">
                                <Mail className="size-4 text-primary" />
                                <a href="mailto:fixit3557@gmail.com" className="hover:text-primary transition-colors">fixit3557@gmail.com</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="size-4 text-primary" />
                                <div className="flex flex-wrap gap-x-2">
                                    <a href="tel:+237670650364" className="hover:text-primary transition-colors">+237 670650364</a>
                                    <span>/</span>
                                    <a href="tel:+237681056932" className="hover:text-primary transition-colors">+237 681056932</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin className="size-4 text-primary" />
                                Yaounde, Cameroon
                            </li>
                            <li className="flex items-center gap-6 pt-4">
                                <a href="#" className="text-text-secondary hover:text-white transition-colors"><Facebook size={20} /></a>
                                <a href="#" className="text-text-secondary hover:text-white transition-colors"><Twitter size={20} /></a>
                                <a href="#" className="text-text-secondary hover:text-white transition-colors"><Instagram size={20} /></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-text-secondary">
                        © 2026 FIXIT. {t('footer.rights')} Built for Cameroon.
                    </p>
                    <div className="flex items-center gap-2">
                        <div className="size-2 rounded-full bg-primary animate-pulse"></div>
                        <p className="text-xs text-text-secondary">System Online</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}


