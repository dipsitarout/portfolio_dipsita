import { useState, useEffect } from "react";
import { 
  Code, 
  Database, 
  Smartphone, 
  Server, 
  ChevronRight,
  Globe,
  Layers,
  Cpu,
  Zap,
  Monitor,
  Cloud,
  Terminal,
  Palette,
  GitBranch,
  Coffee
} from "lucide-react";

export default function SkillsSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState(new Set());
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'skills') {
              setIsLoaded(true);
            } else {
              const index = entry.target.getAttribute('data-index');
              if (index) {
                setVisibleCategories(prev => new Set([...prev, parseInt(index)]));
              }
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    setTimeout(() => {
      document.querySelectorAll('[data-index]').forEach(el => {
        observer.observe(el);
      });
      // Fallback to show all items
      setTimeout(() => {
        setVisibleCategories(new Set([0, 1, 2, 3]));
      }, 500);
    }, 100);

    return () => observer.disconnect();
  }, []);

  // Auto-rotate active category
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const skillCategories = [
    {
      title: "Web Technologies",
      icon: <Code className="text-2xl" />,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      skills: ["Next.js", "React.js", "HTML5", "CSS3", "Express.js", "REST APIs"],
      description: "Modern web development tools and frameworks for building responsive applications"
    },
    {
      title: "Backend & Databases",
      icon: <Database className="text-2xl" />,
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      skills: ["Node.js", "MySQL", "MongoDB"],
      description: "Server-side technologies and database management systems"
    },
    {
      title: "App Technologies",
      icon: <Smartphone className="text-2xl" />,
      gradient: "from-emerald-500 via-green-500 to-lime-500",
      bgGradient: "from-emerald-500/20 to-green-500/20",
      borderColor: "border-emerald-500/30",
      skills: ["Kotlin", "Firebase", "Supabase"],
      description: "Cross-platform mobile development and cloud services"
    },
    {
      title: "Programming Languages",
      icon: <Server className="text-2xl" />,
      gradient: "from-orange-500 via-red-500 to-pink-500",
      bgGradient: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30",
      skills: ["JavaScript (ES6+)", "C++", "Java","Kotlin"],
      description: "Core programming languages for diverse development needs"
    }
  ];

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
        
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-40 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Enhanced Header Section */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-6 mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
                <Code className="text-white text-3xl" />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-3xl blur-xl animate-pulse"></div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Technical</span>{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                Skills
              </span>
            </h1>
          </div>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning <strong className="text-cyan-400">frontend development</strong>, 
            <strong className="text-purple-400"> backend systems</strong>, <strong className="text-emerald-400">mobile applications</strong>, 
            and <strong className="text-orange-400">core programming</strong>.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              data-index={index}
              className={`group relative transform transition-all duration-1000 ${
                visibleCategories.has(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              } ${activeCategory === index ? 'scale-105 z-10' : 'hover:scale-102'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Enhanced Category Card */}
              <div className={`relative bg-gray-800/70 backdrop-blur-xl border-2 rounded-3xl overflow-hidden transition-all duration-500 h-full ${
                activeCategory === index 
                  ? `${category.borderColor} shadow-2xl shadow-current/30` 
                  : 'border-gray-700/50 hover:border-gray-600/70 hover:shadow-xl'
              }`}>
                
                {/* Enhanced Header */}
                <div className={`relative p-8 bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm`}>
                  <div className="flex items-center gap-6">
                    <div className={`relative w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center shadow-xl`}>
                      {category.icon}
                      <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-2xl blur opacity-50"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className={`group/skill relative bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-lg p-3 transition-all duration-300 hover:scale-105 ${
                          activeCategory === index 
                            ? `hover:${category.borderColor} hover:shadow-lg` 
                            : 'hover:border-gray-500/50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className={`font-medium transition-colors ${
                            activeCategory === index 
                              ? skillIndex % 4 === 0 ? 'text-blue-300' :
                                skillIndex % 4 === 1 ? 'text-purple-300' :
                                skillIndex % 4 === 2 ? 'text-emerald-300' :
                                'text-orange-300'
                              : 'text-gray-300 group-hover/skill:text-white'
                          }`}>
                            {skill}
                          </span>
                          <ChevronRight className={`text-xs transition-all duration-300 ${
                            activeCategory === index 
                              ? skillIndex % 4 === 0 ? 'text-blue-400' :
                                skillIndex % 4 === 1 ? 'text-purple-400' :
                                skillIndex % 4 === 2 ? 'text-emerald-400' :
                                'text-orange-400'
                              : 'text-gray-500 group-hover/skill:text-cyan-400 group-hover/skill:translate-x-1'
                          }`} />
                        </div>
                        
                        {/* Skill level indicator with percentage */}
                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-gray-400">Proficiency</span>
                            <span className={`font-semibold ${
                              activeCategory === index ? 'text-white' : 'text-gray-300'
                            }`}>
                              {75 + (skillIndex * 5)}%
                            </span>
                          </div>
                          <div className="h-1 bg-gray-600/50 rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ${
                                activeCategory === index ? 'animate-pulse' : ''
                              }`}
                              style={{ 
                                width: `${75 + (skillIndex * 5)}%`,
                                animationDelay: `${skillIndex * 100}ms`
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Active Category Glow */}
                {activeCategory === index && (
                  <div className={`absolute -inset-2 bg-gradient-to-r ${category.gradient} opacity-20 blur-2xl rounded-3xl transition-opacity duration-500 pointer-events-none animate-pulse`}></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Category Indicators */}
        <div className={`flex justify-center mb-16 transform transition-all duration-1000 delay-800 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex gap-4 bg-gray-800/70 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-3 shadow-2xl">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`relative w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group ${
                  activeCategory === index 
                    ? `bg-gradient-to-r ${category.gradient} shadow-lg scale-110 text-white` 
                    : 'bg-gray-700/50 hover:bg-gray-600/70 hover:scale-105 text-gray-300 hover:text-white'
                }`}
              >
                {category.icon}
                {activeCategory === index && (
                  <div className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} opacity-50 blur-lg rounded-xl`}></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
       
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
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
        
        .delay-800 { 
          animation-delay: 800ms; 
        }

        .delay-1000 { 
          animation-delay: 1000ms; 
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
}