import React from 'react'

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row text-white ">
    
      <div className="flex-1 flex flex-col justify-center px-10 md:px-20 gap-6">
        <h1 className="text-5xl font-bold">I'm John Marco Ardina</h1>
        <p className="h-25 text-2xl bg-lime-400 text-gray-900 p-4 inline-block font-semibold rounded-md">
          I am a <span className='text-black'>Web Developer dedicated</span> to helping teams build reliable, effective solutions with passion and excellence.
          
        </p>
        <p> </p>
        <a href="#contact">
          <button className=" border border-white px-6 py-2 w-fit rounded-md hover:bg-white hover:text-black transition">
            Get in touch →
          </button>
        </a>
        
        
      </div>

     
      <div className="flex-1 bg-white flex items-center justify-center relative py-16">
        <img src="/your-image.png" alt="Developer" className="w-3/4 max-w-md" />

        <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-black font-semibold tracking-widest text-sm">
          MY EXPERTISE
        </div>
      </div>
    </section>
  );
}
