import React, { useEffect, useState } from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Background from './background';


export default function Navigation() {


  const [showNav, setShowNav] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const menuItems = ["Home", "Projects", "Contact"];


  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 50); // scroll threshold
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col w-full">
      <Background />
      {/* 1️⃣ Scroll Navbar */}
      <nav
        className={`
          fixed top-0 left-0 w-full z-200 bg-black/80 px-8 py-4
          transition-all duration-500 ease-in-out backdrop-blur flex items-center
          ${showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}
        `}
      >
        <h1 className="text-2xl font-bold text-white">MRC<span className="text-lime-400">.</span></h1>
        <div className="flex items-center px-5 py-3 text-white w-11/12  justify-center">


          {/* Desktop Links */}
          <div className="hidden md:flex flex-1 justify-center gap-30 ">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="text-white font-medium hover:text-lime-500"
              >
                {item}
              </a>
            ))}
          </div>




          {/* Mobile Menu Icon */}
          <div className="ml-auto md:hidden cursor-pointer" onClick={() => setIsOpenModal(true)}>
            <MenuIcon fontSize="large" />
          </div>
        </div>
      </nav>

      <nav className="w-full flex items-center px-8 py-4 text-white z-100">
        <h1 className="text-2xl font-bold">MRC<span className="text-lime-400">.</span></h1>

        <div className="flex items-center px-5 py-3 text-white w-11/12 justify-center">



          {/* Desktop Links */}
          <div className="hidden md:flex flex-1 justify-center gap-30 ">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="text-white font-medium transition duration-500 hover:text-lime-500 hover:scale-105"
              >
                {item}
              </a>
            ))}
          </div>




          {/* Mobile Menu Icon */}
          <div className="ml-auto md:hidden cursor-pointer" onClick={() => setIsOpenModal(true)}>
            <MenuIcon fontSize="large" />
          </div>
        </div>
      </nav>

      {/* 3️⃣ MOBILE MENU */}
      <div
        className={`
          fixed top-0 right-0 h-screen w-[75%] z-[10001] bg-black text-white
          flex flex-col items-center justify-center gap-20
          transform transition-transform duration-300
          ${isOpenModal ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <button onClick={() => setIsOpenModal(false)} className="absolute top-5 right-5">
          <CloseIcon fontSize="large" />
        </button>

        {menuItems.map((item, idx) => (
          <a
            key={idx}
            href={`#${item.toLowerCase().replace(" ", "")}`}
            className="text-xl font-semibold transition duration-500 hover:text-lime-500 hover:scale-105"
            onClick={() => setIsOpenModal(false)}
          >
            {item}
          </a>
        ))}


      </div>

      <section className="w-full min-h-screen flex flex-col md:flex-row text-white z-50">

        <div className="flex-1 flex flex-col px-5 sm:px-10 md:px-20 gap-4 justify-center">

          <p className='text-3xl sm:text-5xl lg:text-7xl font-semibold p-2 sm:p-4 '>
            Turning Creative Ideas Code and Concepts into engaging digital experiences
          </p>

          <p className="text-base sm:text-xl md:text-2xl text-gray-400 p-2 sm:p-4 inline-block rounded-md">
            Hi, i'm <span className='text-white'>John Marco Ardina, </span>
            a <span className='text-lime-500'>Full Stack Developer</span> dedicated to helping teams build reliable and
            effective solutions with passion and excellence.
          </p>

          <div className='flex gap-3 ml-2 sm:ml-3 '>
            <a href="https://web.facebook.com/marco.ardina.1">
              <div className='text-xl sm:text-2xl md:text-3xl p-2 border rounded-xl hover:scale-105 transition'>
                <FaFacebook />
              </div>
            </a>
            <a href="https://github.com/mrc-rdn">
              <div className='text-xl sm:text-2xl md:text-3xl p-2 border rounded-xl hover:scale-105 transition'>
                <FaGithub />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/john-marco-ardina-71b166371/">
              <div className='text-xl sm:text-2xl md:text-3xl p-2 border rounded-xl hover:scale-105 transition'>
                <FaLinkedin />
              </div>
            </a>
          </div>

        </div>

        <div className="flex-1 flex items-center justify-center relative mt-10 md:mt-0 mb-10 md:mb-0">
          <div className='bg-white rounded-full relative'>
            <img
              src="/images/4x4.png"
              className='rounded-full w-40 sm:w-60 md:w-72 lg:w-80'
            />
          </div>
        </div>

      </section>
    </div>
  );
}
