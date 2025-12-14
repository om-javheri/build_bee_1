import React, { useEffect, useState } from "react";
import image1 from "../assets/gallery/1.jpg";
import image2 from "../assets/gallery/2.jpg";
import image3 from "../assets/gallery/3.jpg";
import image4 from "../assets/gallery/4.jpg";
import image5 from "../assets/gallery/5.jpg";
import image6 from "../assets/gallery/6.jpg";
import image7 from "../assets/gallery/7.jpg";

function GalleryAnimated() {
  const totalImagesAtOnce = 5;
  const minHeight = 160;
  const maxHeight = 320;
  const ITEM_GAP = 40; // distance between images

  const images = [
    { src: image1, alt: "Image 1" },
    { src: image2, alt: "Image 2" },
    { src: image3, alt: "Image 3" },
    { src: image4, alt: "Image 4" },
    { src: image5, alt: "Image 5" },
    { src: image6, alt: "Image 6" },
    { src: image7, alt: "Image 7" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // OPTIONAL: auto-play (remove if not needed)
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const center = Math.floor(totalImagesAtOnce / 2);

  const prev = () => {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  };

  const next = () => {
    setCurrentIndex((i) => (i + 1) % images.length);
  };

  return (
    <div className="relative w-full flex flex-col flex-1 items-center justify-center px-8">



      {/* GALLERY */}
      <div className="relative h-[360px] w-full flex flex-1 overflow-hidden">
        {Array.from({ length: totalImagesAtOnce }).map((_, i) => {
          const index =
            (currentIndex + i - center + images.length) % images.length;

          const position = i - center; // -2 -1 0 1 2
          const distance = Math.abs(position);

          const height =
            maxHeight - distance * ((maxHeight - minHeight) / center);

          const scale = 1 - distance * 0.12;
          const opacity = 1 - distance * 0.2;

          // IMPORTANT: gap should be based on card width
          const CARD_WIDTH = 300;
          const GAP = 30;
          const baseOffset = CARD_WIDTH + GAP;
          const compression = 1 - distance * 0.06;
          const translateX = position * baseOffset * compression;

          return (
            <div
              key={index}
              className="absolute bottom-0 left-1/2"
              style={{
                height,
                transform: `
            translateX(-50%)
            translateX(${translateX}px)
            scale(${scale})
          `,
                opacity,
                zIndex: totalImagesAtOnce - distance,
                transition:
                  "transform 0.7s ease, height 0.7s ease, opacity 0.5s ease",
              }}
            >
              <img
                src={images[index].src}
                alt={images[index].alt}
                className="w-[300px] h-full object-cover rounded-t-full"
              />
            </div>
          );
        })}
      </div>



    </div>
  );
}

export default GalleryAnimated;
