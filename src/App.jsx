// App.jsx
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import image1 from "./assets/gallery/1.jpg"
import image2 from "./assets/gallery/2.jpg"
import image4 from "./assets/gallery/4.jpg"
import image5 from "./assets/gallery/5.jpg"
import image6 from "./assets/gallery/6.jpg"
import image7 from "./assets/gallery/7.jpg"

function App() {
  // Define images with colors here
  const images = [
    { src: image1, alt: "Image 1", color1: "#1e1e1e", color2: "#861026" },
    { src: image2, alt: "Image 2", color1: "#191f25", color2: "#7f96a5" },
    { src: image4, alt: "Image 4", color1: "#99acac", color2: "#e1e1e1" },
    { src: image5, alt: "Image 5", color1: "#323d45", color2: "#60666d" },
    { src: image6, alt: "Image 6", color1: "#662434", color2: "#111e22" },
    { src: image7, alt: "Image 7", color1: "#11171c", color2: "#3c4146" },
  ];

  const totalImagesAtOnce = 5
  const [currentIndex, setCurrentIndex] = useState(0)
  const center = Math.floor(totalImagesAtOnce / 2)
  const centerIndex = (currentIndex + center) % images.length
  const currentColors = images[centerIndex] || { color1: "#1f2937", color2: "#0f172a" }

  return (
    <div
      className="w-full flex flex-col min-h-screen flex-1 relative "
      style={{
        background: `linear-gradient(135deg, ${currentColors.color1}, ${currentColors.color2})`,
      }}
    >
      {/* Decorative gradient strip */}
      <div
        className="absolute top-[100px] -left-[150px] pointer-events-none bg-white"
        style={{
          width: "500px",
          height: "900px",
          transform: "rotate(-60deg)",


          mixBlendMode: "soft-light",

          WebkitMaskImage: `linear-gradient(
      135deg,
      rgba(0,0,0,1) 0%,
      rgba(0,0,0,0) 100%
    )`,
          maskImage: `linear-gradient(
      135deg,
      rgba(0,0,0,1) 0%,
      rgba(0,0,0,0) 100%
    )`,
        }}
      />


      <BrowserRouter basename="/build_bee_1">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                images={images}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                totalImagesAtOnce={totalImagesAtOnce}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
