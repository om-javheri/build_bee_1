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

useEffect(() => {
const interval = setInterval(() => {
setCurrentIndex((i) => (i + 1) % images.length);
}, 2000);
return () => clearInterval(interval);
}, [images.length]);

const visibleImages = Array.from({ length: totalImagesAtOnce }, (_, i) => {
return images[(currentIndex + i) % images.length];
});

const center = Math.floor(totalImagesAtOnce / 2);

return (
<div className="flex-1 flex mt-auto gap-8 overflow-hidden px-10 relative">
{visibleImages.map((image, index) => {
const distance = Math.abs(center - index); // 0 → center, 1 → near, 2 → far
const height = maxHeight - (distance * 40); // smaller away from center
const scale = 1 - distance * 0.15; // scale center = 1, others = smaller
const opacity = 1 - distance * 0.2;

return (  
      <div  
        key={index}  
        className="transition-all duration-700 ease-out"  
        style={{  
          height,  
          transform: `scale(${scale}) translateX(0px)`,  
          opacity,  
        }}  
      >  
        <img  
          className="h-[320px] w-[300px] object-cover rounded-t-full transition-all duration-700"  
          src={image.src}  
          alt={image.alt}  
        />  
      </div>  
    );  
  })}  
</div>

);
}

export default GalleryAnimated;

function ImageContainer({ imageSrc, imageAlt, height }) {
return (
<div style={{
  transform: `translateX(-${offset}px)`,
  transition: "transform 0.03s linear",
}} 
className="rounded-t-full overflow-hidden mt-auto"
>
<img  
className="h-[320px] w-[300px] object-cover transition-all duration-1000"  
src={imageSrc}  
alt={imageAlt}  
/>
</div>
);
}

