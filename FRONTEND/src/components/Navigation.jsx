import React from 'react'

export default function Navigation() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-6 bg-black text-white fixed z-100">
      <h1 className="text-2xl font-bold">MRC<span className="text-lime-400">.</span></h1>

      <ul className="hidden md:flex gap-8 text-lg ml-auto mr-auto">
        <li><a href="#home" className="hover:text-lime-400">Home</a></li>
        <li><a href="#projects" className="hover:text-lime-400">Projects</a></li>
        <li><a href="#about" className="hover:text-lime-400">About</a></li>
        <li><a href="#contact" className="hover:text-lime-400">Contact</a></li>
      </ul>

    </nav>
  );
}
