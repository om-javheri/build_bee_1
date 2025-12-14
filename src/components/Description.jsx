import React, { useEffect, useState } from 'react'

function Description() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])

  return (
    <div
      className={`flex flex-col items-center space-y-3
        transition-all duration-700 ease-in
        ${show ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'}`}
    >
      <p className="text-white text-4xl font-light">
        LOOK GOOD, FEEL UNSTOPPABLE
      </p>
      <p className="max-w-2xl text-center text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.


      </p>
    </div>
  )
}

export default Description
