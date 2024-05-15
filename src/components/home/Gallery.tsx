import React from "react";
import SoftArga from "../../images/soft-arga.jpg";
import BeatboxArga from "../../images/beatbox-arga.jpg";
import BlurryArga from "../../images/blurry-arga.jpg";

function Gallery() {
  return (
    <div className="h-screen p-10 flex">
      <div className="text-7xl font-bold">Gallery</div>
      <div className="flex place-content-center rounded-full shadow-xl border">
        <img className="rounded-full" src={SoftArga} alt="" />
        <img className="rounded-full" src={BlurryArga} alt="" />
        <img className="rounded-full" src={BeatboxArga} alt="" />
      </div>
    </div>
  );
}

export default Gallery;
