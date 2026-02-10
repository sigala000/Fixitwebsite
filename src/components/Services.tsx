import { Construction, Paintbrush, Hammer, Monitor, Zap, Droplets, Laptop, Drill } from "lucide-react";

const services = [
    { icon: Construction, name: "Masonry" },
    { icon: Paintbrush, name: "Painting" },
    { icon: Hammer, name: "Welding" },
    { icon: Monitor, name: "IT Services" },
    { icon: Zap, name: "Electrical" },
    { icon: Droplets, name: "Plumbing" },
    { icon: Laptop, name: "Carpentry" }, // Using Laptop as a placeholder for Carpentry if Hammer used for Welding
    { icon: Drill, name: "Mechanical" },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4 font-display">Professional Services</h2>
                    <p className="text-text-secondary max-w-xl mx-auto">
                        Wide range of expert solutions for all your construction and maintenance needs.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="glow-card p-10 rounded-2xl flex flex-col items-center justify-center gap-6 group">
                            <service.icon className="size-12 text-text-secondary group-hover:text-primary transition-colors duration-300" />
                            <h3 className="text-lg font-bold text-white font-display text-center">{service.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
