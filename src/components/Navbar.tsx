"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Wrench } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const { t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 lg:p-6 pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`
                    pointer-events-auto
                    flex items-center justify-between
                    px-6 lg:px-8
                    transition-all duration-500 ease-in-out
                    ${isScrolled
                        ? "h-16 w-full max-w-5xl rounded-full glass-nav shadow-2xl border border-white/10"
                        : "h-20 w-full max-w-7xl rounded-2xl bg-transparent border border-transparent"
                    }
                `}
            >
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Wrench className="text-primary size-5" />
                    </div>
                    <h1 className="text-xl lg:text-2xl font-bold tracking-tighter text-white">
                        FIXIT
                    </h1>
                </Link>

                <div className="hidden md:flex items-center gap-6 lg:gap-8">
                    {[
                        { name: t('nav.about'), href: '#about' },
                        { name: t('nav.howItWorks'), href: '#how-it-works' },
                        { name: t('nav.services'), href: '#services' },
                        { name: t('nav.trust'), href: '#trust' },
                        { name: 'FAQ', href: '#faq' }
                    ].map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-text-secondary hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-3 lg:gap-5">
                    <LanguageToggle />
                    <button className="hidden sm:block bg-primary text-background border border-primary hover:bg-transparent hover:text-primary px-5 lg:px-6 py-2 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-primary/20">
                        {t('nav.download')}
                    </button>
                    {/* Mobile Menu Icon (Placeholder for future) */}
                    <div className="md:hidden size-10 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
                        <div className="space-y-1.5">
                            <div className="w-5 h-0.5 bg-white"></div>
                            <div className="w-5 h-0.5 bg-white"></div>
                        </div>
                    </div>
                </div>
            </motion.nav>
        </div>
    );
}
