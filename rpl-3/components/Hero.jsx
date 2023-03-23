import React from 'react'

const Hero = ({heading,message}) => {
  return (
    <div>
      <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center custom-img bg-cover'>
        <div className='absolute top-24 left-0 right-0 bottom-0 bg-black/60 z-[2]'>
            <div className='p-5 text-white z-[2] mt-[-2rem]'>
                <h2 className='text-5xl py-2 font-bold'>{heading}</h2>
                <p className='py-5 text-xl'>{message}</p>
                <button className='px-8 py-2 border hover:opacity-60'></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
