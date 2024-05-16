import { useRef, useEffect } from "react";
import { FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function AboutMe() {
  const aboutMeRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      paused: false,
    });

    const trigger = ScrollTrigger.create({
      trigger: aboutMeRef.current,
      animation: tl,
      start: "top 100%",
      end: "bottom 0%",
      onEnter: () =>
        tl.to(aboutMeRef.current, {
          opacity: 1,
          y: 100,
          duration: 0.8,
          ease: "power1.inOut",
        }),
      onEnterBack: () =>
        tl.from(aboutMeRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power1.inOut",
        }),
      onLeave: () =>
        tl.from(aboutMeRef.current, {
          opacity: 0,
          y: "-100%",
          duration: 0.8,
          ease: "power1.inOut",
        }),
      // OnLeaveBack: () =>
      //   tl.fromto(aboutMeRef.current, {
      //     opacity: 1,
      //     y: 100,
      //     duration: 0.8,
      //     ease: "power1.inOut",
      //   }),
    });

    return () => trigger.kill();
  }, []);

  return (
    <>
      <div ref={aboutMeRef} className=" p-10 h-screen">
        <div id="" className="flex place-items-center justify-center">
          <h1 className="text-7xl p-10 font-bold font-spaceGrotesk shadow-white">
            About Me
          </h1>
        </div>
        <div>
          <h2 className=" text-5xl text-center">
            "Hello my name is Arga Mahesa Putra and you can call me Arga. I am
            21 Years old, im a Taurus btw, im just a student from Universitas
            Nasional who is enthusiastic about trend of Technology. I started
            learning web development in 2023, which is the start of my Adventure
            of Web Development. since then i start watching bunch of tutorial on
            youtube to explore more about tech and development, And also im a
            Beatboxer."
          </h2>
        </div>
        <div className="flex p-10 place-items-center justify-center"></div>
        <h1 className="text-7xl font-bold font-spaceGrotesk shadow-white text-center">
          Skills
        </h1>
        <div className="flex text-6xl space-x-10 p-10 place-content-center justify-center">
          <ul className="flex items-center justify-center border p-10 rounded-lg shadow-2xl">
            <li>
              <SiTypescript />
            </li>
            <li>Typescript</li>
          </ul>
          <ul className="flex items-center justify-center border p-10 rounded-lg shadow-2xl">
            <li>
              <FaReact />
            </li>
            <li>React</li>
          </ul>
          <ul className="flex items-center justify-center border p-10 rounded-lg shadow-2xl">
            <li>
              <FaNodeJs />
            </li>
            <li>Node.js</li>
          </ul>
          <ul className="flex items-center justify-center border p-10 rounded-lg shadow-2xl">
            <li>
              <FaPython />
            </li>
            <li>Python</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
