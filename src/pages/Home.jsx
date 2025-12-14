// Home.jsx
import React from 'react'
import Navbar from '../components/Navbar'
import Description from '../components/Description'
import GalleryAnimated from '../components/GalleryAnimated'
import Button from '../components/Button'

function Home({ images, currentIndex, setCurrentIndex, totalImagesAtOnce }) {
  return (
    <div className='flex-1 flex flex-col gap-5'>
      <Navbar />
      <Description />
      <div className="w-fit mx-auto my-2">
        <Button type={"primary"} text={"New Collection"} iconPosition={"right"} classNameAdd='!pr-1 !pl-3 !py-1' icon={<div className="w-10 h-10 bg-black rounded-full text-white flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24" fill="none">
            <path d="M10 7L15 12L10 17" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>} />
      </div>
      <GalleryAnimated
        images={images}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        totalImagesAtOnce={totalImagesAtOnce}
      />
    </div>
  )
}

export default Home
