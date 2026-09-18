import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ExploreOverlay from "./ExploreOverlay";
import { ExploreContext } from "../../context/ExploreContext";

export default function Layout() {
  const [exploreOpen, setExploreOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      let cancelled = false;
      let timer;
      let attempts = 0;
      // Poll with setTimeout rather than requestAnimationFrame: rAF can be
      // throttled or fully paused while the tab isn't visible, which would
      // silently break this on first load of a deep link.
      const tryScroll = () => {
        if (cancelled) return;
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (attempts < 40) {
          attempts++;
          timer = setTimeout(tryScroll, 50);
        }
      };
      tryScroll();
      return () => {
        cancelled = true;
        clearTimeout(timer);
      };
    }
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement?.tagName;
      // Leave "/" alone while a dialog (e.g. the PDF viewer) is open.
      const dialogOpen = document.querySelector('[aria-modal="true"]');
      if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA" && !dialogOpen) {
        e.preventDefault();
        setExploreOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <ExploreContext.Provider value={() => setExploreOpen(true)}>
      <div className="flex min-h-screen flex-col">
        <Header onOpenExplore={() => setExploreOpen(true)} />
        <ExploreOverlay open={exploreOpen} onClose={() => setExploreOpen(false)} />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ExploreContext.Provider>
  );
}
