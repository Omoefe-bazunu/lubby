import React from 'react'
import faces from './assets/faces.png';

const Footer = () => {
  return (
    <div className='Footer flex justify-start align-center px-20 gap-5 py-0'>
        <h1 className='text-3xl font-bold flex jusify-center align-center text-center py-5'>4,567</h1>
        <img src={faces} alt='people-images' className='w-40 flex jusify-center align-center'/>
    </div>
  )
}

export default Footer