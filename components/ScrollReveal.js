"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let observer;
    let els = [];

    const timer = setTimeout(() => {
      els = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right"
      );
      
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08 }
      );

      els.forEach((el) => {
        // Remove in-view first to trigger entry animations on page load/transition
        el.classList.remove("in-view");
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observer) {
        els.forEach((el) => {
          observer.unobserve(el);
        });
      }
    };
  }, [pathname]);

  return null;
}
