// GalleryAnimated.jsx
import React, { useEffect, useState } from "react";

function GalleryAnimated({ images, currentIndex, setCurrentIndex, totalImagesAtOnce }) {
  const [show, setShow] = useState(false);
  const [hasAppeared, setHasAppeared] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => setHasAppeared(true), 700);
    return () => clearTimeout(timer);
  }, []);

  const center = Math.floor(totalImagesAtOnce / 2);

  const prev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrentIndex((i) => (i + 1) % images.length);

  // Responsive slot styles using relative units
  const slotStyles = {
    0: "z-4 scale-100 opacity-100 h-90 md:h-[360px]", // center image
    1: "z-3 scale-90 opacity-80 h-60 md:h-[300px] translate-x-1/4 md:translate-x-[175px]",
    "-1": "z-3 scale-90 opacity-80 h-60 md:h-[300px] -translate-x-1/4 md:-translate-x-[475px]",
    2: "z-2 scale-75 opacity-60 h-48 md:h-[240px] translate-x-1/2 md:translate-x-[460px]",
    "-2": "z-2 scale-75 opacity-60 h-48 md:h-[240px] -translate-x-1/2 md:-translate-x-[760px]",
  };
  const hiddenStyle = "scale-0 opacity-0";
  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => next(), 3000);
    return () => clearInterval(interval);
  }, [])
  return (
    <div className="relative h-80 md:h-[360px] w-full flex flex-1 overflow-hidden items-end">
      {Array.from({ length: totalImagesAtOnce }).map((_, i) => {
        const index = (currentIndex + i - center + images.length) % images.length;
        const position = i - center;
        const style = slotStyles[position] ?? hiddenStyle;

        return (
          <div
            key={index}
            className={`
    absolute bottom-0 left-1/2
    -translate-x-1/2
    transition-all duration-700 ease-out origin-bottom w-full md:w-[300px]
    ${show ? style : "scale-0 opacity-0"}
  `}
          >

            <img
              src={images[index].src}
              alt={images[index].alt}
              className="w-full h-full object-center rounded-t-full"
            />
          </div>
        );
      })}
    </div>
  );
}

export default GalleryAnimated;
