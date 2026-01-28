import { useState, useEffect } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X, Coffee, Phone, Instagram, MapPin } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Booking", href: "#booking" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Bar - Hidden on mobile, shown on scroll */}
      <div className={cn(
        "hidden lg:block fixed top-0 w-full z-50 transition-all duration-500 bg-primary text-primary-foreground",
        isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-10 opacity-100"
      )}>
        <div className="container mx-auto px-4 h-full flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+622112345678" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-3.5 w-3.5" />
              <span>+62 21 1234 5678</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" />
              <span>Jl. Sudirman No. 123, Jakarta</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary-foreground/80">Open Daily: 7AM - 11PM</span>
            <div className="w-px h-4 bg-primary-foreground/30"></div>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "top-0 bg-background/95 backdrop-blur-md border-border/50 shadow-lg py-2"
            : "lg:top-10 top-0 bg-background/50 backdrop-blur-sm py-4"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative bg-gradient-to-br from-primary to-amber-600 text-primary-foreground p-2.5 rounded-xl group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-105">
              <Coffee className="h-6 w-6" />
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                Biji Cerita
              </span>
              <span className="hidden sm:block text-[10px] text-muted-foreground tracking-widest uppercase">Coffee & Stories</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.name}>
                    <a
                      href={link.href}
                      className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-primary/5"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-1/2"></span>
                    </a>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+622112345678" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-full hover:bg-primary/5">
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">Call Us</span>
            </a>
            <ModeToggle />
            <Button className="rounded-full bg-gradient-to-r from-primary to-amber-600 hover:from-primary/90 hover:to-amber-600/90 text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300" asChild>
              <a href="#booking">Book a Table</a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg border-b border-border shadow-xl animate-in slide-in-from-top-5">
            <div className="p-4 space-y-2 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block p-3 text-lg font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-xl transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-border space-y-3">
                <a href="tel:+622112345678" className="flex items-center gap-3 p-3 text-muted-foreground hover:text-primary rounded-xl hover:bg-primary/10 transition-all">
                  <Phone className="h-5 w-5" />
                  <span>+62 21 1234 5678</span>
                </a>
                <Button className="w-full justify-center rounded-full bg-gradient-to-r from-primary to-amber-600 text-primary-foreground" asChild>
                  <a href="#booking" onClick={() => setIsOpen(false)}>Book a Table</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
