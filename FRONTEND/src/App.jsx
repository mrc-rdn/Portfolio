import React from 'react'
import Header from './components/Header'
import Hero from './components/HeroSection'

export default function App() {
  return (
    <div className='w-full h-screen'>
      <div className='h-1/6 w-full bg-white flex items-center'>
        <Header logo="MRC"/>
      </div>
      <div className='h-5/6 w-full grid place-items-center '>
        <Hero />
      </div>
      
    </div>
  )
}
