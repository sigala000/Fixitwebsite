"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Wrench } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav h-16' : 'bg-transparent h-20'}`}>
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Wrench className="text-primary size-6" />
                    <h1 className="text-2xl font-bold tracking-tighter text-white">
                        FIXIT
                    </h1>
                </Link>
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        href="#how-it-works"
                        className="text-sm font-medium text-text-secondary hover:text-white transition-colors"
                    >
                        How it Works
                    </Link>
                    <Link
                        href="#services"
                        className="text-sm font-medium text-text-secondary hover:text-white transition-colors"
                    >
                        Services
                    </Link>
                    <Link
                        href="#join"
                        className="text-sm font-medium text-text-secondary hover:text-white transition-colors"
                    >
                        Join as Artisan
                    </Link>
                    <Link
                        href="#trust"
                        className="text-sm font-medium text-text-secondary hover:text-white transition-colors"
                    >
                        Trust & Safety
                    </Link>
                </div>
                <button className="border border-primary text-primary hover:bg-primary hover:text-background px-6 py-2 rounded-lg font-bold text-sm transition-all neon-btn-glow">
                    Download App
                </button>
            </div>
        </nav>
    );
}
