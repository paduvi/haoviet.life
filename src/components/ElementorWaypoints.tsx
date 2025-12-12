"use client";

import { useEffect } from "react";

export default function ElementorWaypoints() {
    useEffect(() => {
        // Select all elements that are hidden and waiting for animation
        // We include both the standard Elementor class and our custom helper class
        const elements = document.querySelectorAll(".elementor-invisible, .initial-hidden");

        if (elements.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target as HTMLElement;

                        // Get animation settings
                        const settingsStr = el.getAttribute("data-settings");
                        let animationName = "";
                        let animationDelay = 0;

                        if (settingsStr) {
                            try {
                                const settings = JSON.parse(settingsStr);
                                // Elementor stores animation in 'animation' or '_animation'
                                animationName = settings.animation || settings._animation || "";
                                animationDelay = settings.animation_delay || settings._animation_delay || 0;
                            } catch (e) {
                                // Ignore parse errors
                                console.warn("Failed to parse data-settings", e);
                            }
                        }

                        if (animationName) {
                            // Apply delay if needed
                            if (animationDelay > 0) {
                                el.style.animationDelay = `${animationDelay}ms`;
                            }

                            // Remove invisible class and add animation classes
                            // We use requestAnimationFrame to ensure the class change triggers a reflow/repaint
                            requestAnimationFrame(() => {
                                el.classList.remove("elementor-invisible", "initial-hidden");
                                // Only remove visibility immediately so browser attempts to render (but opacity is still 0)
                                el.style.visibility = "";

                                // Wait for animation to actually start before removing opacity
                                const handleAnimationStart = () => {
                                    el.style.opacity = "";
                                    el.removeEventListener('animationstart', handleAnimationStart);
                                };

                                el.addEventListener('animationstart', handleAnimationStart);

                                // Fallback: if animation doesn't start within expected time (delay + 100ms safety)
                                setTimeout(() => {
                                    el.style.opacity = "";
                                    el.removeEventListener('animationstart', handleAnimationStart);
                                }, animationDelay + 100);

                                el.classList.add("animated", animationName);
                            });

                            // Stop observing this element
                            observer.unobserve(el);
                        } else {
                            // Fallback if no animation found: just show it
                            el.classList.remove("elementor-invisible", "initial-hidden");
                            el.style.opacity = "";
                            el.style.visibility = "";
                            observer.unobserve(el);
                        }
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% visible
                rootMargin: "0px 0px -50px 0px", // Offset a bit so it triggers when slightly inside
            }
        );

        elements.forEach((el) => observer.observe(el));

        // Cleanup
        return () => observer.disconnect();
    }, []); // Run once on mount (which happens on every navigation)

    return null;
}
