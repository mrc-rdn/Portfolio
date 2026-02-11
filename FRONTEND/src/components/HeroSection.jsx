import React from 'react'
import JavascriptIcon from '@mui/icons-material/Javascript';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdHtml } from "react-icons/md";
import { MdCss } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";









export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row text-white ">
      
      <div className="flex-1 flex flex-col px-10 md:px-20 gap-1 mt-20 ">
        
          <p className='text-7xl font-semibold p-4'>
            Turning Creative Ideas Code Concepts into engaging digital experiences.
          </p>
          
          <p className=" text-2xl text-gray-400 p-4 inline-block rounded-md">
            Hi, i'm  <span className='text-white'>John Marco Ardina </span> an Full Stack developer dedicated to helping teams build reliable, effective solutions with passion and excellence.
            
          </p>
           
          <div className='flex gap-3 ml-3'>
            <a href="https://web.facebook.com/marco.ardina.1">
              <div className='text-3xl p-2 border rounded-xl'>
                <FaFacebook />
              </div>
            </a>
            <a href="https://github.com/mrc-rdn">
              <div className='text-3xl p-2 border rounded-xl'>
                <FaGithub />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/john-marco-ardina-71b166371/">
              <div className='text-3xl p-2 border rounded-xl'>
                <FaLinkedin />
              </div>
            </a>
            
          </div>

        
        
      </div>
      
     
      <div className=" flex-1 flex items-center justify-center relative py-10">
      
        <div className='bg-white rounded-full'>
          <img src="/images/4x4pic.png" className='rounded-full ' />
        </div>
        
        
      </div>
    </section>
  );
}
