import React, { Children } from 'react'

function Button({
    Children,
    type = 'button',
    bgColor = 'bg-blue-500',
    textColor = 'text-white',   
    className = '',
    ...props
}) {

  return (
    <button className={`px-4 py-4 rounded-b-lg ${bgColor} ${className} `} {...props}>
        {Children}
    </button>
  )
}

export default Button
