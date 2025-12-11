import React from 'react'

function Button({ text, type, iconPosition = "right", icon = null, classNameAdd = "", classNameOverWrite = "" }) {
  const buttonClassFun = () => {
    if (type === 'primary') {
      return 'bg-white text-dark hover:bg-gray-200'
    } else {
      return 'bg-gray-300 text-black'
    }
  }
  const buttonClass = buttonClassFun()
  return (
    <button className={classNameOverWrite || `  py-2 px-5 rounded-full hover:cursor-pointer flex justify-center items-center gap-2 w-full ${buttonClass} ${classNameAdd} `}>
      {iconPosition === "left" && icon}
      {text}
      {iconPosition === "right" && icon}
    </button>

  )
}

export default Button
