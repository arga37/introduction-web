import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Intro: React.FC = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3", "#title-4"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3", "#title-4"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        })
        .from("#aboutme-slider", {
          opacity: 0,
          duration: 0.5,
        })
        .from("#aboutme-title-1", {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-gray-50 absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight"
      >
        <h1 className="text-9xl" id="title-1">
          Front-End Developer
        </h1>
        <h1 className="text-9xl" id="title-2">
          Network Engineer
        </h1>
        <h1 className="text-9xl" id="title-3">
          Freelancer
        </h1>
        <h1 className="text-9xl" id="title-4">
          Beatboxer
        </h1>
      </div>
      <div className="h-screen flex p-10 bg-gray-950 justify-center place-items-center">
        <h1
          id="welcome"
          className="text-9xl font-bold text-gray-100 font-spaceGrotesk "
        >
          Arga Mahesa Putra.
        </h1>
        <div>
          <h2 id="welcome" className="text-5xl text-gray-100 font-spaceGrotesk">
            A passionate Web Developer with a knack for turning ideas into
            seamless digital experiences. Welcome to my Introduction website!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Intro;
