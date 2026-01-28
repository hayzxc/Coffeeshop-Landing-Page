import { useState, useEffect, useCallback } from 'react';

export function useParallax(speed: number = 0.5) {
    const [offset, setOffset] = useState(0);

    const handleScroll = useCallback(() => {
        setOffset(window.scrollY * speed);
    }, [speed]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return offset;
}

interface ParallaxSectionProps {
    children: React.ReactNode;
    backgroundImage?: string;
    backgroundColor?: string;
    speed?: number;
    className?: string;
    overlay?: boolean;
    overlayOpacity?: number;
}

export function ParallaxSection({
    children,
    backgroundImage,
    backgroundColor = 'transparent',
    speed = 0.3,
    className = '',
    overlay = true,
    overlayOpacity = 0.5,
}: ParallaxSectionProps) {
    const offset = useParallax(speed);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Parallax Background */}
            <div
                className="absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
                    backgroundColor: backgroundColor,
                    transform: `translateY(${offset}px)`,
                    willChange: 'transform',
                }}
            />

            {/* Overlay */}
            {overlay && backgroundImage && (
                <div
                    className="absolute inset-0 bg-black"
                    style={{ opacity: overlayOpacity }}
                />
            )}

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
