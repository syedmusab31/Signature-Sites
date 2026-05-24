import { useEffect, useRef } from 'react';

export function useParallax(speed = -0.1) {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        let rafId;

        const handleScroll = () => {
            if (rafId) cancelAnimationFrame(rafId);

            rafId = requestAnimationFrame(() => {
                const rect = element.parentElement.getBoundingClientRect(); // Get container position
                const windowHeight = window.innerHeight;

                // Calculate how far the center of the image is from the center of the viewport
                const elementCenter = rect.top + rect.height / 2;
                const viewportCenter = windowHeight / 2;
                const distanceFromCenter = elementCenter - viewportCenter;

                // Apply transform based on speed multiplier
                element.style.transform = `translateY(${distanceFromCenter * speed}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [speed]);

    return elementRef;
}