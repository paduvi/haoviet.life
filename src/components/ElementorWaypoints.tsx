"use client";

import { useEffect } from "react";

export default function ElementorWaypoints() {
    useEffect(() => {
        // Select all elements that are hidden and waiting for animation
        const elements = document.querySelectorAll(".elementor-invisible");

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
                                el.classList.remove("elementor-invisible");
                                el.classList.add("animated", animationName);
                            });

                            // Stop observing this element
                            observer.unobserve(el);
                        } else {
                            // Fallback if no animation found: just show it
                            el.classList.remove("elementor-invisible");
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
