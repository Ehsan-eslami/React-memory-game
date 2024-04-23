import React from 'react'

export default function Button(props) {
  return (
    <button 
      onClick={props.func} 
      className="shadow-[2px_2px_1px_2px_rgba(0,150,255,1)]  hover:shadow-[1px_1px_1px_2px_rgba(0,150,255,1)] active:shadow-none active:border active:border-blue-500  rounded text-xl py-2 px-4  duration-300 " > 
      {props.title}
    </button>
  )
}
