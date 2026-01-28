import * as React from "react"
import { Button } from "@/components/ui/button";
import { Coffee, Wifi, Clock, Star, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  const images = [
    "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=1000"
  ]

  return (
    <section id="home" className="min-h-screen flex items-center pt-28 pb-12 bg-background relative overflow-hidden transition-colors duration-300">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-black dark:text-white text-sm font-medium border border-accent/20 backdrop-blur-sm">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span>Est. 2025 • Kediri Finest</span>
            </span>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-[1.1]">
              Savor the <span className="text-primary italic">Perfect</span> <br />
              Coffee Moment
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Nikmati kopi terbaik dengan suasana cozy. Tempat sempurna untuk bekerja, bersantai, atau berkumpul dengan teman.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full h-12 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all" asChild>
              <a href="#menu">
                Explore Menu <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base border-primary/20 text-foreground hover:bg-secondary/50" asChild>
              <a href="#booking">Book a Table</a>
            </Button>
          </div>

          <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border/50">
            {/* Colorful blur backgrounds */}
            <div className="absolute -top-4 left-[5%] w-24 h-24 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -top-4 left-[30%] w-20 h-20 bg-emerald-500/30 rounded-full blur-3xl animate-pulse delay-100"></div>
            <div className="absolute -top-4 left-[55%] w-24 h-24 bg-amber-500/30 rounded-full blur-3xl animate-pulse delay-200"></div>
            <div className="absolute -top-4 left-[80%] w-20 h-20 bg-yellow-500/30 rounded-full blur-3xl animate-pulse delay-300"></div>

            <div className="group relative flex flex-col items-center text-center space-y-3 cursor-pointer z-10">
              <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-blue-600/20 border border-blue-400/30 shadow-lg shadow-blue-500/10 group-hover:shadow-blue-500/30 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                <Wifi className="h-7 w-7 text-blue-500 group-hover:text-blue-400 transition-colors" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/0 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <p className="font-semibold text-sm text-foreground group-hover:text-blue-500 transition-colors">Free WiFi</p>
            </div>
            <div className="group relative flex flex-col items-center text-center space-y-3 cursor-pointer z-10">
              <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 via-green-400/10 to-emerald-600/20 border border-emerald-400/30 shadow-lg shadow-emerald-500/10 group-hover:shadow-emerald-500/30 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                <Clock className="h-7 w-7 text-emerald-500 group-hover:text-emerald-400 transition-colors" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/0 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <p className="font-semibold text-sm text-foreground group-hover:text-emerald-500 transition-colors">Open Daily</p>
            </div>
            <div className="group relative flex flex-col items-center text-center space-y-3 cursor-pointer z-10">
              <div className="absolute -inset-4 bg-amber-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-4 rounded-2xl bg-gradient-to-br from-amber-500/20 via-orange-400/10 to-amber-600/20 border border-amber-400/30 shadow-lg shadow-amber-500/10 group-hover:shadow-amber-500/30 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                <Coffee className="h-7 w-7 text-amber-500 group-hover:text-amber-400 transition-colors" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400/0 to-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <p className="font-semibold text-sm text-foreground group-hover:text-amber-500 transition-colors">Premium</p>
            </div>
            <div className="group relative flex flex-col items-center text-center space-y-3 cursor-pointer z-10">
              <div className="absolute -inset-4 bg-yellow-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-4 rounded-2xl bg-gradient-to-br from-yellow-400/20 via-amber-300/10 to-yellow-500/20 border border-yellow-400/30 shadow-lg shadow-yellow-500/10 group-hover:shadow-yellow-500/30 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                <Star className="h-7 w-7 text-yellow-500 fill-yellow-500 group-hover:text-yellow-400 group-hover:fill-yellow-400 transition-colors" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/0 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <p className="font-semibold text-sm text-foreground group-hover:text-yellow-500 transition-colors">4.9/5 Rating</p>
            </div>
          </div>
        </div>

        <div className="relative lg:h-[700px] flex items-center justify-center p-6">
          <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-background/50 outline outline-1 outline-border/20">
            <Carousel
              plugins={[plugin.current]}
              className="w-full h-full"
            >
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index} className="group cursor-pointer">
                    <div className="h-full w-full aspect-[4/5] overflow-hidden">
                      <img
                        src={src}
                        alt={`Coffee Ambiance ${index + 1}`}
                        className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-background/50 hover:bg-background/80 border-none text-foreground backdrop-blur-sm" />
              <CarouselNext className="right-4 bg-background/50 hover:bg-background/80 border-none text-foreground backdrop-blur-sm" />
            </Carousel>
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-0 -left-0 md:bottom-20 md:left-0 bg-card p-6 rounded-xl shadow-xl border border-border/50 max-w-xs hidden md:block animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-500">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Coffee className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="font-serif font-bold text-lg text-foreground">Signature Brew</p>
                <p className="text-sm text-muted-foreground">Try our award-winning Gayo Arabica blend.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}