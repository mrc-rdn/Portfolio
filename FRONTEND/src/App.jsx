import React from 'react'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'



export default function App() {
  return (
    <div className="w-full h-screen ">
      <section id='home'>
        <Navigation />
        <HeroSection />
      </section>
      
      <section id="projects" className="min-h-screen text-white">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        
      </section>
      <section id="about" className="min-h-screen text-white">
        <h2 className="text-4xl font-bold mb-6">About</h2>
        
      </section>
      <section id="contact" className="min-h-screen text-white">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
      </section>
      
    </div>
  );
}
