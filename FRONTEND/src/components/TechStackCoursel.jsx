import React from 'react'
import { FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdJavascript } from "react-icons/md";
import { SiAmazonwebservices } from "react-icons/si";
import { SiAmazons3 } from "react-icons/si";
import { SiAmazonrds } from "react-icons/si";
import { SiAmazonec2 } from "react-icons/si";
import { SiAmazoniam } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";

import { FaCss3 } from "react-icons/fa6";









export default function TechStackCoursel() {
  return (
    <div className='w-full flex flex-col grid place-items-center'>
        <div className="carousel flex w-10/12 overflow-x-auto bg-gradient-to-r from-white/10 to-transparent ">
            <div className="group flex item-center justify-center ">
                <div className="card "><BiLogoPostgresql /></div>
                <div className="card"><SiExpress /></div>
                <div className="card"><FaReact /></div>
                <div className="card"><FaNode /></div>
                <div className="card"><RiTailwindCssFill /></div>
                <div className="card"><MdJavascript /></div>
                <div className="card"><FaHtml5 /></div>
                <div className="card"><FaCss3 /></div>
                <div className="card"><FaBootstrap /></div>

            </div>
            <div aria-hidden className="group flex item-center justify-center">
                <div className="card "><BiLogoPostgresql /></div>
                <div className="card"><SiExpress /></div>
                <div className="card"><FaReact /></div>
                <div className="card"><FaNode /></div>
                <div className="card"><RiTailwindCssFill /></div>
                <div className="card"><MdJavascript /></div>
                <div className="card"><FaHtml5 /></div>
                <div className="card"><FaCss3 /></div>
                <div className="card"><FaBootstrap /></div>
            </div>
        </div>

        <div className="carousel2 flex w-5/12 overflow-x-auto mt-10 bg-gradient-to-l from-white/10 to-transparent ">
            <div className="group2 flex item-center justify-center">
                <div className="card2"><SiAmazonwebservices /></div>
                <div className="card2"><SiAmazons3 /></div>
                <div className="card2"><SiAmazonrds /></div>
                <div className="card2"><SiAmazonec2 /></div>
                <div className="card2"><SiAmazoniam /></div>
                <div className="card2"><IoLogoVercel /></div>
            </div>
            <div aria-hidden className="group2 flex item-center justify-center">
                <div className="card2"><SiAmazonwebservices /></div>
                <div className="card2"><SiAmazons3 /></div>
                <div className="card2"><SiAmazonrds /></div>
                <div className="card2"><SiAmazonec2 /></div>
                <div className="card2"><SiAmazoniam /></div>
                <div className="card2"><IoLogoVercel /></div>
            </div>
        </div>

      
    </div>
  )
}
