"use client";

import React, { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

// Register ScrollTrigger only in the browser context
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    
    // Set default GSAP config
    gsap.config({
        nullTargetWarn: false,
    });
}

interface GSAPProviderProps {
    children: React.ReactNode;
}

export function GSAPProvider({ children }: GSAPProviderProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const lenisRef = useRef<Lenis | null>(null);
    const pathname = usePathname();

    // 1. Initialize Lenis Smooth Scroll once on mount
    useEffect(() => {
        if (typeof window === "undefined") return;

        // Create Lenis instance
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
            infinite: false,
            wheelMultiplier: 1.0,
            touchMultiplier: 1.5,
        });

        lenisRef.current = lenis;

        // Sync ScrollTrigger with Lenis
        lenis.on("scroll", ScrollTrigger.update);

        // Connect Lenis to GSAP ticker
        const updateLenis = (time: number) => {
            lenis.raf(time * 1000);
        };
        gsap.ticker.add(updateLenis);
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove(updateLenis);
            lenisRef.current = null;
        };
    }, []);

    // 2. Handle Scroll Reset and Animations on Route Changes
    useGSAP(
        () => {
            // Check for prefers-reduced-motion
            const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (prefersReducedMotion) return;

            // Scroll to top instantly on route change via Lenis
            if (lenisRef.current) {
                lenisRef.current.scrollTo(0, { immediate: true });
            }

            // Kill any active ScrollTriggers before re-initializing
            ScrollTrigger.getAll().forEach((t) => t.kill());

            // 1. Heading Reveal (e.g. h1, data-gsap="heading")
            const headings = containerRef.current?.querySelectorAll('h1, [data-gsap="heading"]');
            if (headings && headings.length > 0) {
                gsap.fromTo(
                    headings,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        stagger: 0.1,
                        clearProps: "all",
                    }
                );
            }

            // 2. Subheadings (e.g. h2, h3, data-gsap="subheading")
            const subheadings = containerRef.current?.querySelectorAll('h2, h3, [data-gsap="subheading"]');
            const instantSubheadings = Array.from(subheadings || []).filter(
                el => !el.closest('[data-gsap="scroll"]') && !el.closest('section')
            );
            if (instantSubheadings.length > 0) {
                gsap.fromTo(
                    instantSubheadings,
                    { y: 20, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        stagger: 0.08,
                        delay: 0.15,
                        clearProps: "all",
                    }
                );
            }

            // 3. Stagger Lists/Cards (elements with data-gsap="stagger")
            const staggerContainers = containerRef.current?.querySelectorAll('[data-gsap="stagger"]');
            staggerContainers?.forEach((container) => {
                const childrenElements = container.children;
                if (childrenElements.length > 0) {
                    gsap.fromTo(
                        childrenElements,
                        { y: 24, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.7,
                            ease: "power3.out",
                            stagger: 0.06,
                            delay: 0.25,
                            clearProps: "all",
                        }
                    );
                }
            });

            // 4. Fade-in items (data-gsap="fade")
            const fadeElements = containerRef.current?.querySelectorAll('[data-gsap="fade"]');
            if (fadeElements && fadeElements.length > 0) {
                gsap.fromTo(
                    fadeElements,
                    { opacity: 0 },
                    {
                        opacity: 1,
                        duration: 1,
                        ease: "power2.out",
                        delay: 0.2,
                        clearProps: "all",
                    }
                );
            }

            // 5. Scroll Triggered reveals (sections or elements with data-gsap="scroll")
            const scrollSections = containerRef.current?.querySelectorAll('section, article, [data-gsap="scroll"]');
            scrollSections?.forEach((sec) => {
                if (sec.classList.contains("hero") || sec.closest(".hero")) return;

                gsap.fromTo(
                    sec,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sec,
                            start: "top 88%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });

            // Refresh ScrollTrigger
            ScrollTrigger.refresh();
        },
        { scope: containerRef, dependencies: [pathname] }
    );

    return (
        <div ref={containerRef} className="w-full flex-1 flex flex-col">
            {children}
        </div>
    );
}
