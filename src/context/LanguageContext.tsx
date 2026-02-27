"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "../translations/en.json";
import fr from "../translations/fr.json";

type Translations = typeof en;
type Locale = "en" | "fr";

interface LanguageContextType {
    locale: Locale;
    toggleLanguage: () => void;
    t: (path: string) => string;
}

const translations: Record<Locale, Translations> = { en, fr };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [locale, setLocale] = useState<Locale>("en");

    useEffect(() => {
        const savedLocale = localStorage.getItem("locale") as Locale;
        if (savedLocale && (savedLocale === "en" || savedLocale === "fr")) {
            setLocale(savedLocale);
        }
    }, []);

    const toggleLanguage = () => {
        const newLocale = locale === "en" ? "fr" : "en";
        setLocale(newLocale);
        localStorage.setItem("locale", newLocale);
    };

    const t = (path: string): string => {
        const keys = path.split(".");
        let result: any = translations[locale];

        for (const key of keys) {
            if (result[key] === undefined) {
                console.warn(`Translation path "${path}" not found in locale "${locale}"`);
                return path;
            }
            result = result[key];
        }

        return result;
    };

    return (
        <LanguageContext.Provider value={{ locale, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
