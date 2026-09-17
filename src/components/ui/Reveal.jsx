import { useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "../../lib/gsap";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Scroll-triggered reveal wrapper. Animates its children up + fade-in once they
 * enter the viewport. `stagger` fans the animation out across direct children.
 */
export default function Reveal({
  as: Tag = "div",
  children,
  className = "",
  y = 28,
  stagger = 0,
  delay = 0,
  duration = 0.8,
  once = true,
  ...rest
}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;

    const targets = stagger ? Array.from(el.children) : [el];
    gsap.set(targets, { opacity: 0, y });

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once,
        onEnter: () => {
          gsap.to(targets, {
            opacity: 1,
            y: 0,
            duration,
            delay,
            stagger: stagger || 0,
            ease: "power3.out",
          });
        },
      });
    }, el);

    return () => ctx.revert();
  }, [y, stagger, delay, duration, once]);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
