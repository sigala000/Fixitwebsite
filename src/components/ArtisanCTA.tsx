import { Apple, Play } from "lucide-react";

export default function ArtisanCTA() {
    return (
        <section id="join" className="py-24 px-6">
            <div className="max-w-7xl mx-auto bg-primary rounded-[2.5rem] p-12 lg:p-20 relative overflow-hidden flex flex-col items-center text-center">
                {/* Decorative Circle */}
                <div className="absolute top-0 right-0 size-[400px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>

                <div className="relative z-10">
                    <h2 className="text-3xl lg:text-5xl font-bold text-background mb-8 max-w-2xl font-display">
                        Download the FIXIT app today and experience the future of home services in Cameroon.
                    </h2>

                    <div className="flex flex-wrap justify-center gap-6">
                        <button className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-black/90 transition-all">
                            <Apple size={28} />
                            <div className="text-left">
                                <p className="text-[10px] uppercase leading-none opacity-60">Download on the</p>
                                <p className="text-xl font-bold leading-tight">App Store</p>
                            </div>
                        </button>
                        <button className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-black/90 transition-all">
                            <Play size={28} fill="currentColor" />
                            <div className="text-left">
                                <p className="text-[10px] uppercase leading-none opacity-60">Get it on</p>
                                <p className="text-xl font-bold leading-tight">Google Play</p>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Big 'FIXIT' Text Background */}
                <h1 className="absolute right-12 top-12 text-[120px] font-black text-background/10 pointer-events-none font-display">
                    FIXIT
                </h1>
            </div>
        </section>
    );
}
