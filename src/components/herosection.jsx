import { Badge } from "../components/ui/badge";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useState, useEffect } from "react";

import dippic from "../assets/dipsita.png"
import dippic1 from "../assets/img1.jpeg"
import dippic2 from "../assets/img2.jpeg"
import dippic3 from "../assets/img3.jpeg"
import dippic4 from "../assets/img4.jpeg"
import dippic5 from "../assets/img5.jpeg"
import dippic6 from "../assets/img6.jpeg"
import dippic7 from "../assets/img7.jpeg"
import dippic8 from "../assets/img8.jpeg"
import dippic9 from "../assets/img9.jpeg"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger load animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Enhanced Gradient Orbs */}
        <div className="absolute top-20 -left-32 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10 rounded-full blur-3xl animate-spin-slow"></div>
        
        {/* More Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-bounce delay-1200"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className={`flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 transform transition-all duration-1000 ${
            isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}>
            
            {/* Name Section */}
            <div className="mb-3">
              <div className="font-bold text-xl md:text-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent flex items-center justify-center lg:justify-start gap-2">
                <span className="text-2xl animate-bounce">🇮🇳</span>
                <span className="drop-shadow-lg">Dipsita Rout</span>
              </div>
            </div>

            {/* Main Title - Single Line */}
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-black text-white leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x animate-fadeInUp">
                  Dipsita Rout
                </span>
              </h1>

              {/* Enhanced Developer Badge */}
              <div className="relative inline-block">
                <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black border border-gray-600 text-white text-base md:text-lg px-6 py-3 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col items-center lg:items-start space-y-1">
                    <span className="font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      Full Stack Web Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Description */}
            <p className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed">
              A passionate and dedicated <strong className="text-cyan-400">Software Developer</strong> with expertise in crafting{" "}
              <span className="font-bold text-purple-400 drop-shadow-sm">modern web applications</span> and{" "}
              <span className="font-bold text-pink-400 drop-shadow-sm">native mobile solutions</span>.{" "}
              Proficient in <strong>JavaScript</strong>, <strong>React.js</strong>, <strong>Node.js</strong>, and{" "}
              <strong className="text-orange-400">Kotlin</strong> for Android development, with a focus on{" "}
              <span className="font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text">
                innovative and scalable solutions.
              </span>
            </p>

            {/* Social Icons Only */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 pt-4">
              {[
                { icon: FaGithub, color: "text-gray-200", name: "GitHub", delay: "delay-100", link: "https://github.com/dipsitarout" },
                { icon: FaLinkedin, color: "text-blue-400", name: "LinkedIn", delay: "delay-200", link: "https://www.linkedin.com/in/dipsita-rout/" },
              ].map(({ icon: Icon, color, name, delay, link }, index) => (
                <a 
                  key={index} 
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative animate-bounceIn ${delay}`}
                >
                  <Icon className={`${color} text-4xl group-hover:scale-125 transition-all duration-300 drop-shadow-lg cursor-pointer`} />
                  <span className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs ${color} opacity-0 group-hover:opacity-100 transition-all duration-300 font-semibold whitespace-nowrap`}>
                    {name}
                  </span>
                  <div className={`absolute inset-0 ${color.replace('text-', 'bg-').replace('-400', '-400/20').replace('-200', '-200/20').replace('-500', '-500/20')} rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150`}></div>
                </a>
              ))}
            </div>

            {/* Single CTA Button */}
            <div className="flex items-center justify-center lg:justify-start pt-8">
              <a 
                href="https://drive.google.com/file/d/1YgDitt2vCBaXWw7aVgeDIlrueh1fPfXk/view?usp=drive_link" 
                download
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-3 min-w-[200px] justify-center"
              >
                <FaCode className="text-lg group-hover:animate-bounce" />
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>

          {/* Right - Enhanced Image Section with Layered Photos */}
          <div className={`flex-1 flex items-center justify-center relative transform transition-all duration-1200 delay-300 ${
            isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            <div className="relative group">
              {/* Enhanced Background Gradient Ring */}
              <div className="absolute -inset-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-25 group-hover:opacity-40 transition-all duration-700 animate-pulse"></div>
              
              {/* Main Image */}
              <div className="relative z-10">
                <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] rounded-3xl overflow-hidden border-4 border-gray-700 shadow-2xl transform group-hover:scale-105 transition-all duration-700">
                  <img
                    src={dippic4}
                    alt="Dipsita Rout"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-50"></div>
                </div>
              </div>

              {/* Secondary Image (Top Right Overlay - Above Main Image) */}
              <div className="absolute top-68 -right-8 z-20">
                <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-2xl overflow-hidden border-4 border-gray-700 shadow-2xl transform rotate-12 hover:rotate-6 transition-all duration-500 hover:scale-105">
                  <img
                    src={dippic8}
                    alt="Dipsita Rout Coding"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20"></div>
                </div>
              </div>

              {/* Only Computer Icon */}
              <div className="absolute -bottom-12 -left-12 z-30">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl animate-bounce hover:animate-pulse cursor-pointer">
                  <span className="text-3xl">💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-1000 delay-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex flex-col items-center space-y-3 animate-bounce cursor-pointer group">
            <span className="text-gray-400 text-sm font-medium group-hover:text-cyan-400 transition-colors">Explore More</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full group-hover:border-cyan-400 transition-colors flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce group-hover:bg-cyan-400"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(50px);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-bounceIn {
          animation: bounceIn 0.8s ease-out forwards;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1200 { animation-delay: 1.2s; }
      `}</style>
    </section>
  );
}