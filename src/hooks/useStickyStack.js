import { useState, useEffect } from 'react';

export function useStickyStack(containerRef) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const scrollableHeight = containerRef.current.offsetHeight - window.innerHeight;

            if (scrollableHeight <= 0) return;

            // Calculate how far we've scrolled through the container (0 to 1)
            const scrolled = -rect.top;
            const currentProgress = scrolled / scrollableHeight;

            setProgress(Math.max(0, Math.min(1, currentProgress)));
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [containerRef]);

    return progress;
}