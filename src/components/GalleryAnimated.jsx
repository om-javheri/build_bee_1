import React, { useEffect, useState } from "react"; import image1 from "../assets/gallery/1.jpg"; import image2 from "../assets/gallery/2.jpg"; import image3 from "../assets/gallery/3.jpg"; import image4 from "../assets/gallery/4.jpg"; import image5 from "../assets/gallery/5.jpg"; import image6 from "../assets/gallery/6.jpg"; import image7 from "../assets/gallery/7.jpg";

// Smooth infinite right-to-left auto-scroll + dynamic scaling

export default function GalleryAnimated() { const totalImagesAtOnce = 5; const maxHeight = 320;

const images = [ { src: image1, alt: "Image 1" }, { src: image2, alt: "Image 2" }, { src: image3, alt: "Image 3" }, { src: image4, alt: "Image 4" }, { src: image5, alt: "Image 5" }, { src: image6, alt: "Image 6" }, { src: image7, alt: "Image 7" }, ];

const [offset, setOffset] = useState(0); const scrollSpeed = 1.2; // lower = slower scroll

useEffect(() => { const ticker = setInterval(() => { setOffset((prev) => prev + scrollSpeed); }, 16); // ~60fps

return () => clearInterval(ticker);

}, []);

const extendedImages = [...images, ...images];

return ( <div className="relative w-full overflow-hidden flex items-end px-10"> <div className="flex gap-8" style={{ transform: translateX(-${offset}px), transition: "transform 0.05s linear", }} > {extendedImages.map((img, index) => { const itemWidth = 300; const totalWidth = itemWidth + 32; // image width + gap const centerScreen = window.innerWidth / 2; const xPosition = index * totalWidth - offset + totalWidth / 2;

const distanceFromCenter = Math.abs(centerScreen - xPosition);
      const normalized = Math.min(distanceFromCenter / 500, 1);

      const scale = 1 - normalized * 0.4;
      const opacity = 1 - normalized * 0.5;
      const height = maxHeight * scale;

      return (
        <div
          key={index}
          className="transition-all duration-300 ease-linear rounded-t-full overflow-hidden"
          style={{ height, opacity, transform: `scale(${scale})` }}
        >
          <img
            className="h-[320px] w-[300px] object-cover rounded-t-full"
            src={img.src}
            alt={img.alt}
          />
        </div>
      );
    })}
  </div>
</div>

); }
