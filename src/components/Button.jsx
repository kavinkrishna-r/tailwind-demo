import React from 'react'

const Button = ({label,iconURL}) => {
  return (
    <button className='flex justify-center items-center padding-r gap-2 px-7 py-4 bg-coral-red rounded-full text-lg leading-none text-white font-montserrat'>
        {label}
        <img alt="icon-img" src={iconURL} className='ml-2 rounded-full w-5 h-5'></img>
    </button>
  )
}

export default Button
