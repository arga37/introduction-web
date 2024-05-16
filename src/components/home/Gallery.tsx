import { useEffect, useRef } from "react";
import SoftArga from "../../images/soft-arga.jpg";
import BeatboxArga from "../../images/beatbox-arga.jpg";
import BlurryArga from "../../images/blurry-arga.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Gallery() {
  const galleryRef = useRef(null);
  const imagesRef = useRef(null);

  useEffect(() => {
    const t1 = gsap.timeline({
      paused: false,
    });

    const trigger = ScrollTrigger.create({
      trigger: galleryRef.current,
      animation: t1,
      start: "top 100%",
      end: "bottom 0%",
      onEnterBack: () => {
        t1.from(imagesRef.current, {
          opacity: 0,
          y: "100%",
          duration: 0.8,
          ease: "power1.inOut",
          stagger: 0.1,
        });
      },
      onEnter: () => {
        t1.from(imagesRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power1.inOut",
          stagger: 0.1,
        });
      },
      onLeave: () => {},
    });

    return () => trigger.kill();
  }, []);

  return (
    <div className="h-screen p-10 flex" ref={galleryRef}>
      <div id="gallery" className="text-7xl font-bold">
        Gallery
      </div>
      <div
        className="flex place-content-center rounded-full shadow-xl border"
        ref={imagesRef}
      >
        <img className="rounded-full gallery-image" src={SoftArga} alt="" />
        <img className="rounded-full gallery-image" src={BlurryArga} alt="" />
        <img className="rounded-full gallery-image" src={BeatboxArga} alt="" />
      </div>
    </div>
  );
}

export default Gallery;
