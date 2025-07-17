import React from 'react'

const Button = ({sign, handleClick, className}) => {
  return (
    <button onClick={() => {handleClick(sign)}} className={`p-4 rounded-2xl font-extrabold text-5xl cursor-pointer ${className? className: ""}`}>
        {sign}
    </button>
  )
}

export default Button