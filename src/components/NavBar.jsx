import React from 'react'
import { useState } from 'react'
import { TfiAlignLeft } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <div className='Navbar flex px-20 pt-10 pb-2 justify-between align-center w-full fixed mt-0 mb-20'>
        <div className='flex justifer-center align-center'>
            <h1 className='text-3xl font-bold cursor-pointer'>Lubby</h1>
        </div>
        <div className='normal-menu flex  jusify-center align-center gap-x-10 cursor-pointer'>
          <ul className='text-md NavLink flex justify-center align-center gap-x-10 font-light py-2'>
            <li>About Us</li>
            <li>Jobs</li>
            <li>Clients</li>
            <li>Blog</li>
          </ul>
          <div className='text-md login-btn font-light flex align-center justify-center bg-rose-700 w-fit h-fit px-8 py-2 rounded-3xl '>Login</div>
        </div>
        <div className='NavBar-mbile-menu hidden py-2 flex justify-start align-end flex-col cursor-pointer'>
              {toggleMenu ? <TfiAlignLeft size = {30} onClick = {() => setToggleMenu(false)} /> : 
              <TfiClose size = {30} onClick = {() => setToggleMenu(true)}/>
              }
              {!toggleMenu && (
                  <div className='flex flex-col scale-up-ver-center justify-end align-end py-10 bg-white px-6 flex-col text-end absolute right-10 mt-10 ' >
                    <div className='flex  '>
                      <ul className='menu-link text-md text-black text-end flex justify-center flex-col align-center gap-y-4 font-light py-2'>
                        <li>About Us</li>
                        <li>Jobs</li>
                        <li>Clients</li>
                        <li>Blog</li>
                       </ul>
                    </div>
                    <div className='text-md login-btn font-light flex justify-end align-end mt-5 bg-rose-700 w-fit h-fit self-end rounded-md '>
                      <p className='text-right py-2 px-8'>Login</p>
                      </div>
                  </div>
                  
              )
              }
         </div>
        
    </div>
  )
}

export default NavBar