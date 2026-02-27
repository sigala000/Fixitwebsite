"use client";

import { useLanguage } from "../context/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
    const { locale, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 hover:border-primary/50 bg-primary/5 hover:bg-primary/10 transition-all group"
            aria-label="Toggle Language"
        >
            <Globe className="size-4 text-primary group-hover:rotate-12 transition-transform" />
            <span className="text-sm font-bold text-primary">
                {locale === "en" ? "FR" : "EN"}
            </span>
        </button>
    );
}
