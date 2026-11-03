"use client";

import { useEffect, useState } from "react";

export default function NavigationLoader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    function onClick(event: MouseEvent) {
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;

      const destination = new URL(link.href, window.location.href);
      if (
        destination.origin !== window.location.origin ||
        (destination.pathname === window.location.pathname &&
          destination.search === window.location.search)
      ) {
        return;
      }

      setLoading(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setLoading(false), 10000);
    }

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      clearTimeout(timeout);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[250] flex items-center justify-center bg-black/70"
      role="status"
      aria-label="Loading page"
    >
      <span className="h-10 w-10 animate-spin rounded-full border-[3px] border-white/20 border-t-pink" />
    </div>
  );
}
