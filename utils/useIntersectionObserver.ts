/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";


// TypeScript interfaces
interface IntersectionObserverEntry {
    isIntersecting: boolean;
    // Add other properties of the IntersectionObserverEntry you want to use
    // e.g., intersectionRatio, time, etc.
}

interface IntersectionObserverOptions {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
}

interface IntersectionObserver {
    observe: (target: Element) => void;
    unobserve: (target: Element) => void;
    disconnect: () => void;
}

export default function useIntersect({
    root = null,
    rootMargin,
    threshold = 0,
}: IntersectionObserverOptions) {
    const [entry, setEntry] = useState<IntersectionObserverEntry>({
        isIntersecting: false,
    });
    const [node, setNode] = useState<Element | null>(null);

    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observer.current = new window.IntersectionObserver(([e]) => setEntry(e), {
            root,
            rootMargin,
            threshold,
        });

        const { current: currentObserver } = observer;
        currentObserver.disconnect();

        if (node) currentObserver.observe(node);

        return () => currentObserver.disconnect();
    }, [node]);

    return { setNode, entry };
}