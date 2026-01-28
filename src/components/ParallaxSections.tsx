import { ParallaxSection } from "@/components/ui/parallax";
import { Coffee, Quote } from "lucide-react";

export function ParallaxDivider() {
    return (
        <ParallaxSection
            backgroundImage="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000"
            className="py-32"
            speed={0.4}
            overlayOpacity={0.7}
        >
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto" data-aos="fade-up">
                    <Coffee className="h-12 w-12 text-amber-400 mx-auto mb-6" />
                    <blockquote className="text-2xl md:text-4xl font-serif text-white leading-relaxed mb-6">
                        "Setiap cangkir kopi adalah perjalanan rasa yang menceritakan kisah dari petani hingga barista."
                    </blockquote>
                    <div className="flex items-center justify-center gap-2 text-amber-300">
                        <Quote className="h-5 w-5" />
                        <span className="text-lg font-medium">Biji Cerita</span>
                    </div>
                </div>
            </div>
        </ParallaxSection>
    );
}

export function ParallaxCTA() {
    return (
        <ParallaxSection
            backgroundImage="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=2000"
            className="py-24"
            speed={0.3}
            overlayOpacity={0.75}
        >
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-2xl mx-auto" data-aos="fade-up">
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                        Siap Menikmati Kopi Terbaik?
                    </h3>
                    <p className="text-lg text-gray-300 mb-8">
                        Kunjungi kami sekarang dan temukan cita rasa kopi yang tak terlupakan.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#booking"
                            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-medium transition-all hover:scale-105 shadow-lg"
                        >
                            Reservasi Sekarang
                        </a>
                        <a
                            href="#menu"
                            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all border border-white/30 backdrop-blur-sm"
                        >
                            Lihat Menu
                        </a>
                    </div>
                </div>
            </div>
        </ParallaxSection>
    );
}
