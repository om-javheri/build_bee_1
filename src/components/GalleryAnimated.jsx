// GalleryAnimated.jsx
import React, { useEffect, useState } from "react";

function GalleryAnimated({ images, currentIndex, setCurrentIndex, totalImagesAtOnce }) {
  const [show, setShow] = useState(false)
  const [hasAppeared, setHasAppeared] = useState(false)

  useEffect(() => {
    setShow(true)
    const timer = setTimeout(() => setHasAppeared(true), 700)
    return () => clearTimeout(timer)
  }, [])

  const center = Math.floor(totalImagesAtOnce / 2)
  const minHeight = 160
  const maxHeight = 320

  const prev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setCurrentIndex((i) => (i + 1) % images.length)

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => next(), 3000);
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="relative h-[360px] w-full flex flex-1 overflow-hidden">
      {Array.from({ length: totalImagesAtOnce }).map((_, i) => {
        const index = (currentIndex + i - center + images.length) % images.length
        const position = i - center
        const distance = Math.abs(position)
        const height = maxHeight - distance * ((maxHeight - minHeight) / center)
        const scale = 1 - distance * 0.12
        const opacity = 1 - distance * 0.2
        const CARD_WIDTH = 300
        const GAP = 30
        const translateX = position * (CARD_WIDTH + GAP) * (1 - distance * 0.06)

        return (
          <div
            key={index}
            className={`absolute bottom-0 left-1/2 ${show ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
            style={{
              height,
              transform: `translateX(-50%) translateX(${translateX}px) scale(${show ? scale : 0})`,
              opacity: show ? opacity : 0,
              zIndex: totalImagesAtOnce - distance,
              transition: `
                transform 0.7s ease ${hasAppeared ? "0s" : "0.7s"},
                height 0.7s ease,
                opacity 0.5s ease ${hasAppeared ? "0s" : "0.7s"}
              `,
            }}
          >
            <img
              src={images[index].src}
              alt={images[index].alt}
              className="w-[300px] h-full object-center rounded-t-full"
            />
          </div>
        )
      })}
    </div>
  )
}

export default GalleryAnimated
