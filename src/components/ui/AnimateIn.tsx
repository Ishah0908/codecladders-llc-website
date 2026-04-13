"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Direction = "up" | "left" | "right" | "scale";

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}

const directionClass: Record<Direction, string> = {
  up: "will-animate-up",
  left: "will-animate-left",
  right: "will-animate-right",
  scale: "will-animate-scale",
};

export function AnimateIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const trigger = () => {
      if (delay) {
        setTimeout(() => el.classList.add("is-visible"), delay);
      } else {
        el.classList.add("is-visible");
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trigger();
          observer.unobserve(el);
        }
      },
      { threshold: 0.07, rootMargin: "0px 0px -48px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`${directionClass[direction]} ${className}`}>
      {children}
    </div>
  );
}
