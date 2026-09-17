import { useRef, useLayoutEffect, useState } from "react";
import { gsap, ScrollTrigger } from "../../lib/gsap";

export default function CountUp({ value, suffix = "", duration = 1.6, className = "" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const counter = { n: 0 };
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        once: true,
        onEnter: () => {
          gsap.to(counter, {
            n: value,
            duration,
            ease: "power2.out",
            onUpdate: () => setDisplay(Math.round(counter.n)),
          });
        },
      });
    }, el);
    return () => ctx.revert();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString("id-ID")}
      {suffix}
    </span>
  );
}
