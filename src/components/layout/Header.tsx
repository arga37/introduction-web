import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Header() {
  const header = useRef(null);
  const target = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        gsap.to(header.current, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power1.inOut",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
        });
      } else {
        gsap.to(header.current, {
          opacity: 0,
          y: "-100",
          duration: 0.5,
          ease: "power1.inOut",
        });
      }
    });

    observer.current.observe(target.current);
    return () => observer.current.disconnect();
  }, []);

  return (
    <>
      <div ref={target} style={{ height: "100px" }} />
      <div
        ref={header}
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999 }}
        className="flex p-10 px-32 place-content-between bg-gray-950 text-gray-100 font-spaceGrotesk"
      >
        <div className="text-3xl font-bold">AMP.</div>
        <div className="flex space-x-10 font-bold">
          <ul>Home</ul>
          <ul>About Me</ul>
          <ul>Gallery</ul>
        </div>
      </div>
    </>
  );
}

export default Header;
