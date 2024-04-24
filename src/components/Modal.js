import React from 'react'


export default function Modal(props) {
  return (
    <div>
      <section className='bg-black fixed top-0 left-0 w-full h-full opacity-50' onClick={props.func}>
      </section>
      <section className='fixed sm:w-[500px] sm:max-h-[450px] w-screen h-screen   sm:h-fit sm:rounded-2xl  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-slate-200 p-4'>
        <div className=' absolute right-5 '>
          <img src="/svgs/cross.svg" alt="close svg" onClick={props.func} className=' cursor-pointer hover:bg-slate-300 rounded-full duration-300' />
        </div>
        <div className='flex-col w-full'>
          {props.children}
        </div>
      </section>
    </div>  
  )
}
