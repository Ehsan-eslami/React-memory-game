import React from 'react'

export default function Footer() {
  return (
    <footer className="flex flex-col w-fit mx-auto  text-xs sm:text-lg md:text-xl py-2 px-4">
      <div className="flex justify-center gap-1">
        <p className=" font-medium">
          Source code 
        </p>
        <img src="svgs/code.svg" alt="code svg" className="h-[20px] my-auto" />:
        <a className=" text-blue-700 underline underline-offset-2 font-semibold" href="https://github.com/Ehsan-eslami/Eat-and-Split">GitHub</a>
      </div>
      <div className="flex justify-center gap-1" >
        <p className=" font-medium">
          Written by: 
        </p>
        <a className=" text-blue-700 underline underline-offset-2 font-semibold" href="https://github.com/Ehsan-eslami">@Ehsan-eslami</a>
      </div>
    </footer>
  )
}
