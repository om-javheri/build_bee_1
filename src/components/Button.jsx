import React, { useEffect, useState } from 'react'

function Button({
  text,
  type,
  iconPosition = "right",
  icon = null,
  classNameAdd = "",
  classNameOverWrite = ""
}) {
  const buttonClassFun = () => {
    if (type === 'primary') {
      return 'bg-white text-dark hover:bg-gray-200'
    }
    return 'bg-gray-300 text-black'
  }
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])
  return (
    <button
      className={`
        py-2 px-5 rounded-full w-full
        flex items-center justify-center gap-2 cursor-pointer
        ${buttonClassFun()} ${classNameAdd} 
        transition-all duration-700 ease-out
        origin-center
        ${show ? "scale-100 opacity-100" : "scale-0 opacity-0"}
      `}
    >

      {iconPosition === "left" && icon}
      {text}
      {iconPosition === "right" && icon}
    </button>
  )
}

export default Button
