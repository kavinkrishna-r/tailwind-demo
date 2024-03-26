import React from 'react'
import {headerLogo} from "../assets/images/index"
import {hamburger} from "../assets/icons/index"
import { navLinks } from '../constants'


const Nav = () => {

  return (
    <div>
        <header className='padding-x py-1 absolute w-full z-10'>
            <nav className='flex justify-between items-center gap-[16rem] max-container'>
               <a href='/'>
               <img src={headerLogo} alt='logo' width={130} height={29}/>
               </a>
               <ul className='flex-1 flex justify-between  items-center max-lg:hidden'>
                  {navLinks.map(item => {
                    return (
                    <li key={item.label}
                     className='font-monserrat leading-normal text-black'
                    >
                        {item.label}
                    </li>
                    )
                  })}
               </ul>
               <div className='hidden max-lg:block'>
                <img src={hamburger} alt="icon" className='h-10 w-7'></img>
               </div>
               {/* <div>
                 <h3>Sign Up</h3>
               </div> */}
            </nav>
        </header>
      
    </div>
  )
}

export default Nav
