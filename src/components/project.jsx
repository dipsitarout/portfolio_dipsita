import { useState, useEffect } from "react";
import { FaCode, FaGithub, FaChevronRight, FaExternalLinkAlt, FaRocket } from "react-icons/fa";

// Since we can't import images in this environment, I'll use placeholder URLs
// Replace these with your actual imported image paths
import intel from "../assets/intellilib.png"
import eventhub from "../assets/eventhub.png"
import first from "../assets/first.png"
import ieee from "../assets/ieeeproject.png"
import crosscodes from "../assets/crosscodes.png"

export default function ProjectsSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'projects') {
              setIsLoaded(true);
            } else {
              const index = entry.target.getAttribute('data-index');
              if (index) {
                setVisibleItems(prev => new Set([...prev, parseInt(index)]));
              }
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    setTimeout(() => {
      document.querySelectorAll('[data-index]').forEach(el => {
        observer.observe(el);
      });
      // Fallback to show all items
      setTimeout(() => {
        setVisibleItems(new Set([0, 1, 2, 3, 4]));
      }, 500);
    }, 100);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Textify Pro",
      subtitle: "OCR Translation App",
      duration: "Jun 2025",
      tech: ["Kotlin", "Firebase", "Postman", "Google ML Kit", "Google API", "TTS"],
      description: "Built an OCR Translation App in Kotlin with Firebase Auth and Firestore, supporting secure login and saving translation history for 100+ users. Implemented image capture/cropping, OCR text extraction, multilingual translation via Google Translate API, TTS, and sharing features.",
      features: [
        "99% uptime during beta testing",
        "Clean UI with dark/light mode",
        "Room Database for offline storage",
        "Supports 100+ users with translation history"
      ],
      github: "https://github.com/dipsitarout/Textify-Pro",
      live: "https://github.com/dipsitarout/Textify-Pro", // Mobile app - no live link
      image: first,
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      bgGradient: "from-blue-500/20 to-purple-500/20",
      icon: "📱",
      category: "Mobile App"
    },
    {
      title: "IntelliLib",
      subtitle: "Library Management System",
      duration: "Feb 2025",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Flutter", "Supabase"],
      description: "Engineered a cross-platform Library Management System (web and mobile), reducing book addition time by 50% and automating email alerts to improve user access by 30%. Crafted a barcode-based book tracking system, cutting checkout time by 40%.",
      features: [
        "50% reduction in book addition time",
        "Barcode-based tracking system",
        "100+ personalized PDFs weekly",
        "Cross-platform compatibility"
      ],
      github: "https://github.com/dipsitarout/LIBRARY_MANAGEMENT",
      live: "https://github.com/dipsitarout/LIBRARY_MANAGEMENT", // Add your live link here
      image: intel,
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      bgGradient: "from-emerald-500/20 to-cyan-500/20",
      icon: "📚",
      category: "Full Stack"
    },
    {
      title: "EventOps Platform",
      subtitle: "Event Management System",
      duration: "Sep 2024",
      tech: ["Express.js", "JWT", "MongoDB", "Node.js", "Razorpay"],
      description: "Built an event management platform with Razorpay integration, lowering transaction failures by 40% and boosting user satisfaction in event registrations and merchandise sales. Incorporated real-time admin monitoring and analytics.",
      features: [
        "40% reduction in transaction failures",
        "Real-time admin monitoring",
        "50% reduction in wait times",
        "Automated ticket validation"
      ],
      github: "https://github.com/dipsitarout/Event_Ops",
      live: "https://v-event-phi.vercel.app/admin/dashboard", // Add your live link here
      image: eventhub,
      gradient: "from-orange-500 via-red-500 to-pink-500",
      bgGradient: "from-orange-500/20 to-pink-500/20",
      icon: "🎫",
      category: "Web Platform"
    },
    {
      title: "IEEE Photonics Society",
      subtitle: "Official Club Website",
      duration: "2025",
      tech: ["React.js", "Tailwind CSS", "MagicUI", "shadcn/ui", "Vercel"],
      description: "Official web presence of the IEEE Photonics Society at VIT Chennai. The platform highlights club activities like workshops, projects, and industry collaboration with beautifully animated components and modern design.",
      features: [
        "Animated Objective section with MagicUI",
        "Built with Tailwind CSS and shadcn/ui",
        "Mobile responsive layout",
        "Deployed via Vercel"
      ],
      github: "https://github.com/dipsitarout/Ieee_website_final",
      live: "https://ieeephotonicssociety.vercel.app",
      image: ieee,
      gradient: "from-purple-500 via-pink-500 to-yellow-500",
      bgGradient: "from-purple-500/20 to-yellow-500/20",
      icon: "💡",
      category: "Club Website"
    },
    {
      title: "CrossCodes",
      subtitle: "Interactive DSA Challenge Platform",
      duration: "2025",
      tech: ["JavaScript", "HTML", "CSS", "Vercel"],
      description: "CrossCodes is an engaging and interactive platform to test and improve DSA skills. It challenges users through a unique puzzle interface involving clues and keywords that unlock access to time-based coding problems.",
      features: [
        "Interactive DSA puzzles with hints",
        "Timed coding questions for scoring",
        "Minimalist UI focused on speed & clarity",
        "Catered for beginners and experts alike"
      ],
      github: "https://github.com/dipsitarout/CROSSCODES",
      live: "https://crosscodes.vercel.app",
      image: crosscodes,
      gradient: "from-indigo-500 via-blue-500 to-cyan-500",
      bgGradient: "from-indigo-500/20 to-cyan-500/20",
      icon: "🧩",
      category: "DSA & Puzzle Platform"
    }
  ];

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-32 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 -right-40 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <FaCode className="text-white text-2xl" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Featured</span>{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                Projects
              </span>
            </h1>
          </div>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore my latest projects showcasing expertise in <strong className="text-cyan-400">mobile development</strong>, 
            <strong className="text-purple-400"> full-stack applications</strong>, and <strong className="text-pink-400">scalable platforms</strong>.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              data-index={index}
              className={`group relative transform transition-all duration-1000 ${
                visibleItems.has(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Project Card */}
              <div className="relative bg-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.bgGradient} opacity-80`}></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/20">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Project Icon */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                      {project.icon}
                    </div>
                  </div>

                  {/* Live Badge (if available) */}
                  {project.live && (
                    <div className="absolute bottom-4 right-4">
                      <div className="flex items-center gap-1 px-2 py-1 bg-green-500/20 backdrop-blur-sm text-green-400 text-xs font-semibold rounded-full border border-green-500/40">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>Live</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      <span className="text-sm text-gray-400 font-medium">
                        {project.duration}
                      </span>
                    </div>
                    <p className="text-gray-300 font-medium">{project.subtitle}</p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors ${
                            techIndex % 6 === 0 ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                            techIndex % 6 === 1 ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' :
                            techIndex % 6 === 2 ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' :
                            techIndex % 6 === 3 ? 'bg-pink-500/20 text-pink-400 border-pink-500/30' :
                            techIndex % 6 === 4 ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' :
                            'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2 flex-1">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Key Achievements</h4>
                    <div className="space-y-1">
                      {project.features.map((feature, fIndex) => (
                        <div
                          key={fIndex}
                          className={`flex items-start gap-2 ${
                            fIndex % 4 === 0 ? 'text-cyan-300' :
                            fIndex % 4 === 1 ? 'text-purple-300' :
                            fIndex % 4 === 2 ? 'text-emerald-300' :
                            'text-pink-300'
                          }`}
                        >
                          <FaChevronRight className={`text-xs mt-1 flex-shrink-0 ${
                            fIndex % 4 === 0 ? 'text-cyan-400' :
                            fIndex % 4 === 1 ? 'text-purple-400' :
                            fIndex % 4 === 2 ? 'text-emerald-400' :
                            'text-pink-400'
                          }`} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 flex gap-3">
                    {/* GitHub Button */}
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-gray-700 to-gray-600 text-white px-4 py-3 rounded-lg hover:from-gray-600 hover:to-gray-500 transition-all duration-300 flex items-center justify-center gap-2 font-medium border border-gray-600/50 hover:border-gray-500/50 group"
                    >
                      <FaGithub className="group-hover:scale-110 transition-transform duration-300" />
                      <span>Code</span>
                    </a>

                    {/* Live Demo Button */}
                    {project.live ? (
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 bg-gradient-to-r ${project.gradient} text-white px-4 py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2 font-medium group relative overflow-hidden`}
                      >
                        <FaRocket className="group-hover:scale-110 transition-transform duration-300" />
                        <span>Live Demo</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                      </a>
                    ) : (
                      <div className="flex-1 bg-gray-600/50 text-gray-400 px-4 py-3 rounded-lg cursor-not-allowed flex items-center justify-center gap-2 font-medium border border-gray-600/30">
                        <FaExternalLinkAlt className="opacity-50" />
                        <span>Coming Soon</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center transform transition-all duration-1000 delay-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex flex-col items-center gap-6">
            <p className="text-gray-400 text-lg">Want to see more of my work?</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://github.com/dipsitarout"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white font-semibold px-8 py-4 rounded-full hover:from-gray-600 hover:to-gray-500 transition-all duration-300 hover:scale-105"
              >
                <FaGithub className="text-xl" />
                <span>More Projects on GitHub</span>
                <FaChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
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

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-1000 { 
          animation-delay: 1000ms; 
        }
      `}</style>
    </section>
  );
}