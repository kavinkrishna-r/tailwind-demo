import React, { useState } from 'react'
import Button from '../components/Button'
import {arrowRight} from '../assets/icons/index'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <section 
    id="home"
    className='w-full flex flex-col xl:flex-row min-h-screen justify-center gap-10 max-container'>
    <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
      <p className='text-xl font-montserrat text-coral-red'>Our Summer Collections</p> 
      <h1 className='text-8xl mt-10 font-palanquin font-bold max-sm:text-[72px] max-sm:leading-[82]'>
        <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'
        >The New Arrivals</span>
        <br></br>
        <span className='text-coral-red inline-block mt-3'>Nike
        </span>
        Shoes
      </h1>
      <p className='mt-6 mb-14 font-montserrat text-lg leading-8  text-slate-gray sm:max-w-sm'>
        Discover stylish Nike arrivals, quality comfort,and innovation for your active life.
      </p>
      <Button label="Shop now" iconURL={arrowRight}></Button>
      <div className='flex  justify-start items-start flex-wrap gap-16 w-full mt-20'>
            {statistics.map(item => {
               return(
                  <div key={item.label}>
                   <p className='text-4xl font-palanquin font-bold'>{item.value}</p>
                   <p className='leading-8 font-montserrat text-slate-gray'>{item.label}</p>
                  </div>
               )
            })}  
      </div>
    </div>
    <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-4 bg-primary bg-hero bg-cover bg-center'>
      <img src={bigShoeImg} alt="shoe-image" width={610} height={500}className='object-contain relativez-10'>
      </img>
      <div className='flex gap-4 sm:gap-6 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
        {shoes.map(shoe => {
          return(<div key={shoe}>
            <ShoeCard 
               imgURL={shoe}
               changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
               bigShoeImg={bigShoeImg}
            >   
            </ShoeCard>
          </div>)
        })}
      </div>
    </div>
    </section>
  )
}

export default Hero
