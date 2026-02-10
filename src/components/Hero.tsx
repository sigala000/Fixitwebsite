import { Apple, Play } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="pt-40 pb-20 px-6 bg-electric-glow">
            <div className="max-w-7xl mx-auto text-center">
                

                <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-8">
                    Reliable Artisans. <br />
                    <span className="text-primary">Fast & Secure.</span>
                </h1>

                <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-12">
                    Find verified artisans you can trust, from masonry to IT services, with quick, secure, and transparent connections.
                </p>

                <div className="flex flex-wrap gap-4 justify-center mb-16">
                    <button className="bg-primary hover:bg-transparent text-background border border-primary hover:text-primary px-8 py-4 rounded-xl font-bold transition-all neon-btn-glow">
                        Find an Artisan
                    </button>
                    <button className="bg-transparent hover:bg-white/5 text-white border border-white/20 px-8 py-4 rounded-xl font-bold transition-all">
                        Become an Artisan
                    </button>
                </div>

                <div className="flex flex-col items-center gap-6 pt-12 border-t border-white/5">
                    <p className="text-sm text-text-secondary font-medium">Download the FIXIT app today</p>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg border border-white/10 hover:border-white/30 transition-all">
                            <Apple size={20} />
                            <div className="text-left">
                                <p className="text-[9px] uppercase leading-none opacity-60">Download on the</p>
                                <p className="text-sm font-bold leading-tight">App Store</p>
                            </div>
                        </button>
                        <button className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg border border-white/10 hover:border-white/30 transition-all">
                            <Play size={20} fill="currentColor" />
                            <div className="text-left">
                                <p className="text-[9px] uppercase leading-none opacity-60">Get it on</p>
                                <p className="text-sm font-bold leading-tight">Google Play</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
