import React, { useState, useEffect } from 'react';
import { BookOpen, Award, Calendar, TrendingUp } from 'lucide-react';
import vit from '../assets/vitchennai.png';
import dav from '../assets/dav.png';

const AboutEducation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.7;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const coursework = [
    "Data Structures and Algorithms",
    "Object-Oriented Programming", 
    "Web Technologies",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems"
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-black via-[#0d1117] to-[#161b22] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-4">
            About Me & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* About Me Section */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur opacity-25"></div>
              <div className="relative bg-[#1a1d29] rounded-2xl p-8 border border-[#393953]/50 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">About Me</h3>
                </div>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    Hi! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold">Dipsita Rout</span>, 
                    a passionate Computer Science student specializing in Artificial Intelligence and Machine Learning.
                  </p>
                  
                  <p>
                    Currently pursuing my Bachelor's degree at Vellore Institute of Technology, I'm deeply fascinated by the 
                    intersection of technology and innovation. My journey in tech started with curiosity and has evolved into 
                    a dedicated pursuit of creating impactful solutions.
                  </p>
                  
                  <p>
                    I love exploring new technologies, building projects that solve real-world problems, and continuously 
                    learning in this ever-evolving field. When I'm not coding, you'll find me diving into research papers 
                    or working on creative projects that challenge my technical skills.
                  </p>
                  
                  <div className="flex items-center pt-4">
                    <TrendingUp className="w-5 h-5 text-cyan-400 mr-2" />
                    <span className="text-cyan-400 font-medium">Always learning, always growing!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-6">
              {/* University Education */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-25 transition-all duration-300"></div>
                <div className="relative bg-[#1a1d29] rounded-2xl p-6 border border-[#393953]/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 flex-shrink-0 p-1">
                      <img 
                        src={vit} 
                        alt="VIT Logo" 
                        className="w-10 h-10 object-contain rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">Vellore Institute of Technology</h3>
                      <div className="flex items-center text-cyan-400 text-sm mb-2">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>Jul 2023 – Jun 2027 (Expected)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="ml-16 space-y-3">
                    <p className="text-gray-300 font-medium">Bachelor of Technology in Computer Science</p>
                    <p className="text-purple-400 text-sm font-medium">Specialization: Artificial Intelligence & Machine Learning</p>
                    
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-yellow-400 mr-2" />
                      <span className="text-white font-semibold">CGPA: 8.81</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* School Education */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 rounded-2xl blur opacity-0 group-hover:opacity-25 transition-all duration-300"></div>
                <div className="relative bg-[#1a1d29] rounded-2xl p-6 border border-[#393953]/50 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 flex-shrink-0 p-1">
                      <img 
                        src={dav} 
                        alt="DAV Logo" 
                        className="w-10 h-10 object-contain rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">DAV Public School</h3>
                      <div className="flex items-center text-purple-400 text-sm mb-2">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>Apr 2011 – Mar 2023</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="ml-16 space-y-3">
                    <p className="text-gray-300 font-medium">CBSE Senior Secondary School Certificate</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Award className="w-4 h-4 text-yellow-400 mr-2" />
                        <span className="text-white font-semibold">10th: 97.00%</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 text-yellow-400 mr-2" />
                        <span className="text-white font-semibold">12th: 92.60%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>
    </section>
  );
};

export default AboutEducation;