import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 md:px-12 py-5 flex items-center justify-between shadow-md">
      <h1 className="text-2xl font-bold">Nidhi's Portfolio</h1>
      <ul className="hidden md:flex space-x-8 text-lg font-medium">
        <li className="hover:text-cyan-400 cursor-pointer">Home</li>
        <li className="hover:text-cyan-400 cursor-pointer">About</li>
        <li className="hover:text-cyan-400 cursor-pointer">Skills</li>
        <li className="hover:text-cyan-400 cursor-pointer">Projects</li>
        <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
      </ul>
      <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:scale-105 transition duration-300">
        Connect Me
      </button>
    </nav>
  );
};

export default Navbar;
