import React, { useEffect, useRef } from "react";
import unasFestProject from "../../images/unasfest-project.png";
import kssConsultingProject from "../../images/kssconsulting-project.png";
import { FaElementor, FaFigma, FaReact, FaWordpress } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostgresql, SiTypescript } from "react-icons/si";

function Projects() {
  let boxOne = useRef(null);
  let boxTwo = useRef(null);

  useEffect(() => {});

  return (
    <>
      <div className="h-auto">
        <div className=" p-10 flex justify-end">
          <div className=" text-7xl flex font-bold">Projects</div>
        </div>
        <div ref={boxOne} className="p-10 flex space-x-5  ">
          <div className="flex border-2 shadow-lg  p-10 rounded-lg place-content-between">
            <div className="flex ">
              <div className="place-content-center p-10">
                <div className="flex p-3 text-3xl space-x-5 justify-end font-bold">
                  UNASFEST 2023
                </div>
                <div className="flex p-3 text-3xl space-x-5 justify-end font-bold">
                  <ul>
                    <FaReact />
                  </ul>
                  <ul>
                    <FaGolang />
                  </ul>
                  <ul>
                    <RiTailwindCssFill />
                  </ul>
                  <ul>
                    <SiPostgresql />
                  </ul>
                  <ul>
                    <SiTypescript />
                  </ul>
                </div>
                <div className="text-end font-spaceGrotesk">
                  Unasfest is a website for information about competition
                  festivals on my university. Collaborate with the development
                  team to ensure design and functionality consistency and also
                  Optimize the website's appearance for responsiveness and
                  accessibility across various devices
                </div>
              </div>
            </div>
            <div className="rounded-lg border">
              <img className="rounded-lg" src={unasFestProject} alt="" />
            </div>
          </div>
        </div>
        <div ref={boxTwo} className="p-10 flex space-x-5  ">
          <div className="flex border-2 shadow-lg  p-10 rounded-lg place-content-between">
            <div className="rounded-lg border">
              <img className="rounded-lg" src={kssConsultingProject} alt="" />
            </div>
            <div className="flex ">
              <div className="place-content-center p-10">
                <div className="flex p-3 text-3xl space-x-5 justify-start font-bold">
                  KSS CONSULTING
                </div>
                <div className="flex p-3 text-3xl space-x-5 justify-start font-bold">
                  <ul>
                    <FaWordpress />
                  </ul>
                  <ul>
                    <FaElementor />
                  </ul>
                  <ul>
                    <FaFigma />
                  </ul>
                </div>
                <div className="text-start font-spaceGrotesk">
                  This project was my Lecture Company, He ask me to make some
                  Company Profile for his Company, This was my first Web
                  Project, I use Wordpress and Elementor, in this project my
                  role was UI/UX and Also Web Developer, I use Figma for the
                  Design of the Company Profile Website.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
