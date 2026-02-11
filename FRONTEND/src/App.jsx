import React from 'react'
import Navigation from './components/Navigation'
import ProjectPage from './components/project/ProjectPage';
import TechStackCoursel from './components/TechStackCoursel';
import Contact from './components/contact/Contact.jsx'
import Connect from './components/contact/Connect.jsx';



export default function App() {
  return (
    <div className="w-full h-screen ">
      <section id='home' className='w-full'>
        <Navigation />
        
      </section>
      
      <section className='mb-20'>
        <h2 className="text-4xl font-semibold mb-6 text-center text-white m-20 mb-15">My Expertise</h2>
        <TechStackCoursel />
      </section>
      
      <section id="projects" className="lg:h-370 h-500 text-white p-10 pt-15 flex flex-col">
        <h2 className="text-4xl font-bold mb-6 text-center">Projects And Experience</h2>
        <ProjectPage />
      </section>
      <section id="contact" className="w-full min-h-screen text-white">
        <div className=' lg:flex flex-col lg:flex-row w-full gap-20 items-center justify-center'>
          <Contact />
          <Connect />

        </div>
       
        <p className='text-center text-gray-500 p-20'>©️ 2026 Marco Ardina. All Rights Reserved.</p>
      </section>
      
    </div>
  );
}
