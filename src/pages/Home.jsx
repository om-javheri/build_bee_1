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
        <Button
          type="glass"
          text="New Collection"
          iconPosition="right"
          classNameAdd="!pr-12 !pl-12 !py-3 relative group hover:bg-black/50"
          icon={
            <div className=''>
              <div className="w-10 h-10 bg-black/10     
        backdrop-blur-md  
        
        
        hover:bg-black/20 rounded-full text-white flex justify-center items-center
                      absolute left-1 top-1/2 -translate-y-1/2
                      transition-all duration-700 group-hover:left-[calc(99%-2.5rem)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24" fill="none">
                  <path d="M10 7L15 12L10 17" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </div>
              <div className="w-10 h-10 bg-black/10     
        backdrop-blur-md  

        
        hover:bg-black/20 rounded-full text-white flex justify-center items-center
                      absolute left-1 top-1/2 -translate-y-1/2
                     ">
                <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24" fill="none">
                  <path d="M10 7L15 12L10 17" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </div>
            </div>
          }
        />
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
