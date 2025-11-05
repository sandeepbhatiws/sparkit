import React, { useState, useEffect, useRef } from "react";

const CustomPageScroller = ({
  children,
  headerOffset = 68,
  animationDuration = 700,
}) => {
  const [activePage, setActivePage] = useState(0);
  const containerRef = useRef(null);
  const isAnimating = useRef(false);
  const touchStartY = useRef(0);
  const sections = useRef([]);

  useEffect(() => {
    sections.current = containerRef.current
      ? Array.from(containerRef.current.children)
      : [];
  }, [children]);

  const goToPage = (index) => {
    if (isAnimating.current) return;
    if (index < 0 || index >= sections.current.length) return;

    isAnimating.current = true;
    setActivePage(index);

    const target = sections.current[index];
    if (target) {
      const offset = target.offsetTop - headerOffset;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      isAnimating.current = false;
    }, animationDuration);
  };

  const handleWheel = (e) => {
    if (isAnimating.current) return;
    if (e.deltaY > 40) goToPage(activePage + 1);
    else if (e.deltaY < -40) goToPage(activePage - 1);
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goToPage(activePage + 1);
      else goToPage(activePage - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activePage]);

  return (
    <div ref={containerRef}>
      {React.Children.map(children, (child, index) => (
        <div
          className="scroll-page"
          style={{
            scrollSnapAlign: "start",
            transition: `transform ${animationDuration}ms ease`,
            marginTop: index === 0 ? `${headerOffset}px` : "0px",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default CustomPageScroller;