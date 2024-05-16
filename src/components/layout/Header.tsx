import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function Header() {
  const header = useRef<HTMLDivElement>(null);
  const target = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const [active, setActive] = useState<string>("home");

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
          y: -100,
          duration: 0.5,
          ease: "power1.inOut",
        });
      }
    });

    if (target.current && observer.current) {
      observer.current.observe(target.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const handleClick = (dest: string) => {
    setActive(dest);
    const section = document.querySelector(`#${dest}`);
    if (section instanceof HTMLElement) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

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
          <ul>
            <a
              href="#"
              onClick={() => handleClick("intro")}
              className={active === "home" ? "underline" : ""}
            >
              Home
            </a>
          </ul>
          <ul>
            <a
              href="#"
              onClick={() => handleClick("aboutme")}
              className={active === "aboutme" ? "underline" : ""}
            >
              About Me
            </a>
          </ul>
          <ul>
            <a
              href="#"
              onClick={() => handleClick("gallery")}
              className={active === "gallery" ? "underline" : ""}
            >
              Gallery
            </a>
          </ul>
          <ul>
            <a
              href="#"
              onClick={() => handleClick("projects")}
              className={active === "projects" ? "underline" : ""}
            >
              Projects
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
