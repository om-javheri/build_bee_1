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
    { src: image1, alt: "Image 1", color1: "#11171c", color2: "#3c4146" },
    { src: image2, alt: "Image 2", color1: "#191f25", color2: "#7f96a5" },
    { src: image4, alt: "Image 4", color1: "#e1e1e1", color2: "#99acac" },
    { src: image5, alt: "Image 5", color1: "#323d45", color2: "#60666d" },
    { src: image6, alt: "Image 6", color1: "#111e22", color2: "#662434" },
    { src: image7, alt: "Image 7", color1: "#1e293b", color2: "#0f172a" },
  ];

  const totalImagesAtOnce = 5
  const [currentIndex, setCurrentIndex] = useState(0)
  const center = Math.floor(totalImagesAtOnce / 2)
  const centerIndex = (currentIndex + center) % images.length
  const currentColors = images[centerIndex] || { color1: "#1f2937", color2: "#0f172a" }

  return (
    <div
      className="w-full flex flex-col min-h-screen flex-1"
      style={{
        background: `
    linear-gradient(
      20deg,
      ${currentColors.color1} 0%,
      ${currentColors.color1} 45%,
      ${currentColors.color2} 45%,
      ${currentColors.color2} 100%
    ) 0 200px / 100% 500px no-repeat,
    ${currentColors.color2}
  `
      }}


    >
      <BrowserRouter basename="/build_bee_1">
        <Routes>
          <Route
            path="/"
            element={<Home
              images={images}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              totalImagesAtOnce={totalImagesAtOnce}
            />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
