import { Wrench, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
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
                            Connecting verified artisans with clients in Cameroon. Fast, transparent, and secure services at your fingertips.
                        </p>
                    </div>

                    {/* Platform */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-display">Platform</h4>
                        <ul className="space-y-4 text-sm text-text-secondary">
                            <li><a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">Browse Services</a></li>
                            <li><a href="#join" className="hover:text-primary transition-colors">Become an Artisan</a></li>
                            <li><a href="#trust" className="hover:text-primary transition-colors">Trust & Safety</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-display">Legal</h4>
                        <ul className="space-y-4 text-sm text-text-secondary">
                            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Dispute Resolution</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-display">Contact</h4>
                        <ul className="space-y-4 text-sm text-text-secondary">
                            <li className="flex items-center gap-3">
                                <Mail className="size-4 text-primary" />
                                support@fixit.cm
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin className="size-4 text-primary" />
                                Yaounde,Cameroon
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
                        © 2026 FIXIT. All rights reserved. Built for Cameroon.
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
