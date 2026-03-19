import { useEffect, useState } from "react";

export function useActiveSection(ids: string[], headerHeight: number) {
  const [activeId, setActiveId] = useState("top");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveId("top");
        return;
      }

      let closestSection = sections[0];
      let minDistance = Infinity;

      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        const distance = Math.abs(rect.top - headerHeight);
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = sec;
        }
      });

      const scrollBottom = window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollBottom >= docHeight - 1) {
        setActiveId(sections[sections.length - 1].id);
      } else {
        setActiveId(closestSection.id);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [ids, headerHeight]);

  return activeId;
}
