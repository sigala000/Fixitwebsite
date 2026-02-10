import { Mail, Phone, MapPin } from "lucide-react";

export default function MissionContact() {
    return (
        <section id="contact" className="py-24 px-6 bg-card/10">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
                <div>
                    <h2 className="text-4xl font-bold text-white mb-8 font-display">Our Mission</h2>
                    <p className="text-text-secondary text-lg leading-relaxed mb-12">
                        FIXIT provides a platform for every skilled artisan to thrive and for every client to find reliable help. We are formalizing the skilled labor market in Cameroon, one verified connection at a time.
                    </p>
                    <div className="flex items-center gap-12">
                        <div className="text-left">
                            <p className="text-4xl font-bold text-primary font-display">2,000+</p>
                            <p className="text-sm text-text-secondary uppercase tracking-widest mt-1">
                                Artisans
                            </p>
                        </div>
                        <div className="text-left">
                            <p className="text-4xl font-bold text-primary font-display">10+</p>
                            <p className="text-sm text-text-secondary uppercase tracking-widest mt-1">
                                Cities
                            </p>
                        </div>
                        <div className="text-left">
                            <p className="text-4xl font-bold text-primary font-display">98%</p>
                            <p className="text-sm text-text-secondary uppercase tracking-widest mt-1">
                                Satisfaction
                            </p>
                        </div>
                    </div>
                </div>

                <div className="glow-card rounded-3xl p-10 border-white/5">
                    <h3 className="text-2xl font-bold text-white mb-8 font-display">Get in Touch</h3>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-text-secondary hover:text-white transition-colors cursor-pointer">
                            <div className="size-10 rounded-full bg-white/5 flex items-center justify-center">
                                <Mail className="size-5" />
                            </div>
                            <span className="font-medium">support@fixit.cm</span>
                        </div>
                        <div className="flex items-center gap-4 text-text-secondary hover:text-white transition-colors cursor-pointer">
                            <div className="size-10 rounded-full bg-white/5 flex items-center justify-center">
                                <Phone className="size-5" />
                            </div>
                            <span className="font-medium">+237 6XX XXX XXX</span>
                        </div>
                        <div className="flex items-center gap-4 text-text-secondary">
                            <div className="size-10 rounded-full bg-white/5 flex items-center justify-center">
                                <MapPin className="size-5" />
                            </div>
                            <span className="font-medium">Douala, Cameroon</span>
                        </div>
                    </div>

                    <button className="w-full bg-white/5 text-white border border-white/10 font-bold py-4 rounded-xl hover:bg-white/10 transition-colors mt-12">
                        Send us a message
                    </button>
                </div>
            </div>
        </section>
    );
}
