import { useState, useEffect } from "react";
import {  FaEnvelope } from 'react-icons/fa';

import { TypeAnimation } from 'react-type-animation';

import { FaReact,FaSun,FaMoon, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGit, FaGithub,
   FaDatabase } from 'react-icons/fa'; 
  import {  FaLinkedin ,FaTimes,FaBars} from 'react-icons/fa';

  const App = () => {
    const [isDark, setIsDark] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleTheme = () => {
      setIsDark(!isDark);
      document.documentElement.classList.toggle("dark");
    };
  
    useEffect(() => {
      const theme = localStorage.getItem("theme");
      if (theme === "light") {
        setIsDark(false);
        document.documentElement.classList.remove("dark");
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);
  
    return (
      <div className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} font-sans min-h-screen pt-20`}>
        {/* Navbar */}
        <nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-5 backdrop-blur-lg bg-black text-white flex items-center justify-between shadow-md border-b border-white/10 dark:bg-black">

{/* Hamburger (Mobile Only) */}
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-white text-3xl"
  title="Menu"
>
  {menuOpen ? <FaTimes /> : <FaBars />}
</button>

{/* Nav Links */}
<ul
  className={`${
    menuOpen ? 'flex' : 'hidden'
  } md:flex flex-col md:flex-row absolute md:static top-20 left-0 w-full md:w-auto bg-black md:bg-transparent md:space-x-10 items-center md:items-start text-lg font-medium transition-all duration-300`}
>
  {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
    <li key={link} className="text-center md:text-left my-2 md:my-0">
      <a
        href={`#${link.toLowerCase()}`}
        className="hover:text-cyan-400 transition duration-200"
        onClick={() => setMenuOpen(false)} // close menu on link click
      >
        {link}
      </a>
    </li>
  ))}
</ul>

{/* Theme Toggle (Always Visible) */}
<button
  onClick={toggleTheme}
  className="ml-auto md:ml-0 text-xl p-3 rounded-full hover:bg-white/20 transition duration-200"
  title="Toggle Theme"
>
  {isDark ? (
    <FaSun className="text-yellow-400" />
  ) : (
    <FaMoon className="text-gray-400" />
  )}
</button>
</nav>



      {/* Home Section */}
     

     

    

      

      <section id="home" className="relative py-20 bg-black text-white dark:bg-white dark:text-black">
  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-base md:text-lg text-gray-300 dark:text-gray-800 space-y-4 animate__animated animate__fadeInUp">

    <TypeAnimation
      sequence={[
        "👋 Hello, I'm Nidhi", 1500,
        "A Web Developer", 1500,
        "Engineer & Creative Thinker", 1500,
      ]}
      wrapper="h1"
      cursor={true}
      repeat={Infinity}
      className="text-2xl md:text-4xl font-bold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 drop-shadow-lg"
    />

    <p className="max-w-xl text-sm md:text-base text-gray-400 dark:text-gray-700 leading-relaxed">
      I craft immersive, responsive, and modern web experiences.
    </p>

    <a
      href="#about"
      className="mt-6 inline-block bg-gradient-to-r from-pink-500 via-cyan-500 to-blue-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-base font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
    >
      Learn More About Me
    </a>

    {/* Scroll Indicator */}
    <div className="mt-8 animate-bounce text-xs md:text-sm text-gray-400 hover:text-cyan-400 transition duration-200">
      <a href="#about">↓ Scroll Down</a>
    </div>
  </div>
</section>





<section id="about" className="py-20 bg-black text-white dark:bg-white dark:text-black">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-cyan-400 mb-12 animate__animated animate__fadeInUp dark:text-cyan-600">
      About Me
    </h2>

    <div className="md:flex md:items-center md:justify-center gap-12">
      {/* Profile Image */}
      <div className="md:w-1/3 mb-10 md:mb-0 animate__animated animate__fadeInUp">
        <img 
          src="/images/nidhiphoto4.jpg"
          alt="Nidhi's Profile" 
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover mx-auto shadow-2xl hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Description */}
      <div className="md:w-2/3 text-lg text-gray-300 dark:text-gray-800 text-left space-y-5 animate__animated animate__fadeInUp">
        <p>
          Hi! I’m <span className="text-cyan-400 dark:text-cyan-600 font-semibold">Nidhi</span>, a curious and driven second-year Electrical Engineering student at <span className="font-semibold">BIT Mesra</span>.
        </p>
        <p>
          I’m a passionate web developer who loves building full-stack applications that are fast, clean, and user-friendly. I’m always exploring new technologies and challenging myself with creative projects.
        </p>
        <p>
          Beyond coding, I’m an avid reader and love diving into new ideas, whether it's through books or late-night brainstorming sessions. I'm constantly learning, experimenting, and growing.
        </p>

        {/* Download Resume Button */}
        <div className="mt-4">
          <a 
            href="/pdf/Nidhi_s_Resume.pdf" 
            download
            className="inline-block bg-gradient-to-r from-blue-400 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-400 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  </div>
</section>






      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black text-white dark:bg-white dark:text-black">
  <div className="max-w-7xl mx-auto px-6">
    {/* Heading */}
    <div className="text-center mb-10">
      <h2 className="text-4xl font-semibold text-cyan-400 tracking-wider">Skills</h2>
     
    </div>

    {/* Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">

      <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-cyan-400">
        <FaHtml5 className="text-6xl text-orange-500 mb-3" />
        <h3 className="text-lg font-semibold">HTML5</h3>
      </div>

      <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-cyan-400">
        <FaCss3Alt className="text-6xl text-blue-500 mb-3" />
        <h3 className="text-lg font-semibold">CSS3</h3>
      </div>

      <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-cyan-400">
        <FaJs className="text-6xl text-yellow-400 mb-3" />
        <h3 className="text-lg font-semibold">JavaScript</h3>
      </div>

      <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-cyan-400">
        <FaReact className="text-6xl text-cyan-400 mb-3" />
        <h3 className="text-lg font-semibold">React</h3>
      </div>

      <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-cyan-400">
        <FaNodeJs className="text-6xl text-green-500 mb-3" />
        <h3 className="text-lg font-semibold">Node.js</h3>
      </div>

     

      <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-cyan-400">
        <FaDatabase className="text-6xl text-purple-400 mb-3" />
        <h3 className="text-lg font-semibold">PostgreSQL</h3>
      </div>

      <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-cyan-400">
        <FaDatabase className="text-6xl text-yellow-300 mb-3" />
        <h3 className="text-lg font-semibold">MongoDB</h3>
      </div>

     

      <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-cyan-400">
        <FaGit className="text-6xl text-red-500 mb-3" />
        <h3 className="text-lg font-semibold">Git</h3>
      </div>

      <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-cyan-400">
        <FaGithub className="text-6xl text-white mb-3" />
        <h3 className="text-lg font-semibold">GitHub</h3>
      </div>

      

    </div>
  </div>
</section>



<section id="projects" className="py-20 bg-black text-white dark:bg-white dark:text-black">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-semibold text-cyan-400">My Projects</h2>
     
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      
      {/* Project Card */}
      {[
        {
          name: "Moodify",
          img: "/images/moodify.png",
          skills: "React, Spotify API",
          github: "https://github.com/Nidhi010805/Moodify-Plalist",
          live: "https://moodify-plalist.vercel.app/",
        },
        {
          name: "Portfolio",
          img: "/images/portfolio.png",
          skills: "React,Tailwind CSS,",
          github: "https://github.com/Nidhi010805/Portfolio",
          live: "https://my-portfolio--jet-seven.vercel.app/",
        },
        {
          name: "N.A.P.S",
          img: "/images/naps.png",
          skills: "Next.js, Tailwind CSS, React,PostgreSQL",
          github: "https://github.com/Kirito-Excalibur/Naps2024",
          live: "https://naps2024.vercel.app/",
        },
      ].map((project, idx) => (
        <div key={idx} className="bg-gray-900 rounded-xl shadow-md p-4 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg h-[340px]">
          <img 
            src={project.img} 
            alt={project.name} 
            className="w-full h-[180px] object-cover rounded-lg mb-3"
          />
          <h3 className="text-xl font-semibold text-white">{project.name}</h3>
          <p className="text-sm text-gray-400 mt-1 text-center">{project.skills}</p>
          <div className="mt-auto space-x-4">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-500">
              GitHub
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-500">
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white dark:bg-white dark:text-black">
  <div className="max-w-5xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-semibold text-cyan-400">
        Get in Touch
      </h2>
      <p className="mt-4 text-gray-400 text-lg">
        
      </p>
    </div>

    <form className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 shadow-[0_0_40px_0_rgba(0,255,255,0.05)] max-w-3xl mx-auto space-y-8 text-gray-300 dark:text-gray-800  space-y-5 animate__animated animate__fadeInUp">
      
      {/* Name */}
      <div className="relative">
        <input
          type="text"
          required
          className="peer w-full bg-transparent border border-gray-700 rounded-xl px-5 pt-6 pb-2 
          text-white dark:text-black placeholder-transparent 
          focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
        
          placeholder="Your Name"
        />
        <label className="absolute left-5 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-focus:top-3 peer-focus:text-sm peer-focus:text-cyan-400">
        
          Your Name
        </label>
      </div>

      {/* Email */}
      <div className="relative">
        <input
          type="email"
          required
          className="peer w-full bg-transparent border border-gray-700 rounded-xl px-5 pt-6 pb-2 
          text-white dark:text-black placeholder-transparent 
          focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
          placeholder="you@example.com"
        />
        <label className="absolute left-5 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-focus:top-3 peer-focus:text-sm peer-focus:text-cyan-400">
          Email
        </label>
      </div>

      {/* Message */}
      <div className="relative">
        <textarea
          rows="5"
          required
          className="peer w-full bg-transparent border border-gray-700 rounded-xl px-5 pt-6 pb-2 
          text-white dark:text-black placeholder-transparent 
          focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
          placeholder="Write your message..."
        ></textarea>
        <label className="absolute left-5 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-focus:top-3 peer-focus:text-sm peer-focus:text-cyan-400">
          Message
        </label>
      </div>

      {/* Button */}
      <div className="text-center">
        <button
          type="submit"
          className="inline-block bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:to-fuchsia-500 text-white font-bold py-3 px-10 rounded-full transition-transform hover:scale-105 shadow-lg shadow-cyan-500/20"
        >
           Send Message
        </button>
      </div>
    </form>

  
  </div>
</section>






      {/* Footer */}
<footer className="bg-black border-t border-gray-600 py-6">
  <div className="max-w-7xl mx-auto px-6 text-center">
    
    {/* Social Links */}
    <div className="flex justify-center space-x-6 mb-4">
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-white hover:text-cyan-400 transition-colors duration-300"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-white hover:text-cyan-400 transition-colors duration-300"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="mailto:nidhidevi@example.com"
        aria-label="Email"
        className="text-white hover:text-cyan-400 transition-colors duration-300"
      >
        <FaEnvelope size={24} />
      </a>
    </div>

    {/* Footer Text */}
    <p className="text-sm text-gray-400">
      &copy; {new Date().getFullYear()} <span className="text-white font-medium">Nidhi Devi</span>. All rights reserved.
    </p>
  </div>
</footer>


    </div>
  );
};

export default App;
