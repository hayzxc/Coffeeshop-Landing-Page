import { Coffee, MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "About Us", href: "#about" },
        { name: "Menu", href: "#menu" },
        { name: "Book a Table", href: "#booking" },
        { name: "Contact", href: "#contact" },
    ];

    const menuHighlights = [
        "Signature Espresso",
        "Gayo Arabica",
        "Cold Brew",
        "Pastries & Snacks",
        "Seasonal Specials",
    ];

    return (
        <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            {/* Newsletter Section */}
            <div className="border-b border-white/10">
                <div className="container mx-auto px-4 py-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-primary/20 via-amber-600/10 to-primary/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-serif font-bold mb-2">Join Our Coffee Club</h3>
                            <p className="text-gray-400">Get exclusive offers, new menu updates, and coffee tips delivered to your inbox.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all min-w-[280px]"
                            />
                            <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-primary text-primary-foreground p-3 rounded-xl">
                                <Coffee className="h-7 w-7" />
                            </div>
                            <span className="text-2xl font-serif font-bold tracking-tight">Biji Cerita</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Crafting exceptional coffee experiences since 2020. Every cup tells a story, every visit creates a memory.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            <a href="#" className="group p-3 rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/30 transition-all duration-300">
                                <Instagram className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                            </a>
                            <a href="#" className="group p-3 rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/30 transition-all duration-300">
                                <Facebook className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                            </a>
                            <a href="#" className="group p-3 rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/30 transition-all duration-300">
                                <Twitter className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-primary hover:translate-x-2 transition-all duration-300 inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-[2px] bg-primary transition-all duration-300"></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Menu Highlights */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold relative inline-block">
                            Our Menu
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
                        </h4>
                        <ul className="space-y-3">
                            {menuHighlights.map((item) => (
                                <li key={item}>
                                    <a
                                        href="#menu"
                                        className="text-gray-400 hover:text-primary hover:translate-x-2 transition-all duration-300 inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-[2px] bg-primary transition-all duration-300"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold relative inline-block">
                            Visit Us
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-gray-300">Jl. Sudirman No. 123</p>
                                    <p className="text-gray-400 text-sm">Jakarta Selatan, 12190</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <a href="tel:+622112345678" className="text-gray-300 hover:text-primary transition-colors">
                                    +62 21 1234 5678
                                </a>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <a href="mailto:info@bijicerita.com" className="text-gray-300 hover:text-primary transition-colors">
                                    info@bijicerita.com
                                </a>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <Clock className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-gray-300">Mon - Fri: 7AM - 10PM</p>
                                    <p className="text-gray-400 text-sm">Sat - Sun: 8AM - 11PM</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-400 text-sm flex items-center gap-1">
                            © 2026 Biji Cerita. Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> in Jakarta
                        </p>
                        <div className="flex items-center gap-6 text-sm text-gray-400">
                            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-primary transition-colors">Careers</a>
                        </div>
                        {/* Back to Top Button */}
                        <Button
                            onClick={scrollToTop}
                            size="icon"
                            className="rounded-full bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/30 transition-all duration-300"
                        >
                            <ArrowUp className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
