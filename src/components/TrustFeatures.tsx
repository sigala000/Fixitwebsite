import { ShieldCheck, ClipboardCheck, MapPin, Lock, Info } from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "ID & Background Checks",
        description: "Every artisan on FIXIT undergoes a rigorous identity verification and background vetting process."
    },
    {
        icon: ClipboardCheck,
        title: "Skill Verification & Testing",
        description: "We test and verify the technical proficiency of our artisans to ensure high-quality service."
    },
    {
        icon: MapPin,
        title: "Real-time GPS Tracking",
        description: "Track your artisan's arrival in real-time for improved security and convenience."
    },
    {
        icon: Lock,
        title: "Secure Escrow Payments",
        description: "Your payments are held securely and only released once you are satisfied with the completed work."
    },
    {
        icon: Info,
        title: "Dispute Resolution Support",
        description: "Our dedicated support team is always available to help resolve any issues or disputes."
    }
];

export default function TrustFeatures() {
    return (
        <section id="trust" className="py-24 bg-card/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display leading-tight">
                            Trust is our currency. <br />
                            <span className="text-primary">Safety is our promise.</span>
                        </h2>
                        <p className="text-text-secondary text-lg mb-12 max-w-xl">
                            We take safety seriously. Every artisan on FIXIT undergoes a rigorous vetting process so you can hire with peace of mind.
                        </p>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                                        <feature.icon className="text-primary size-3.5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">{feature.title}</h4>
                                        <p className="text-text-secondary text-sm">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full"></div>
                        <div className="relative glow-card p-12 rounded-[2rem] aspect-square flex items-center justify-center border-white/5 overflow-hidden">
                            {/* Shield Icon Graphic Placeholder */}
                            <ShieldCheck className="size-48 text-primary opacity-20 absolute" />
                            <div className="relative z-10 text-center">
                                <ShieldCheck className="size-32 text-primary mx-auto mb-6" />
                                <h3 className="text-3xl font-bold text-white font-display">Vetted & Verified</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
