import { useState, useEffect } from "react";
import { 
  Trophy, 
  Award, 
  Briefcase,
  Shield,
  Code,
  Medal,
  Star,
  Crown,
  ExternalLink,
  Calendar,
  MapPin,
  ShieldCheck
} from "lucide-react";

export default function AchievementsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'achievements') {
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

    const section = document.getElementById('achievements');
    if (section) observer.observe(section);

    setTimeout(() => {
      document.querySelectorAll('[data-index]').forEach(el => {
        observer.observe(el);
      });
      setTimeout(() => {
        setVisibleItems(new Set([0, 1, 2, 3, 4, 5, 6, 7]));
      }, 500);
    }, 100);

    return () => observer.disconnect();
  }, []);

  const allItems = [
    {
      id: 0,
      title: "TechnoVIT 2024 - Full Stack Hackathon Winner",
      organization: "VIT University",
      description: "Won the prestigious full-stack hackathon competing among 100+ teams from VIT and other colleges with a team of three members.",
      date: "2024",
      icon: <Trophy className="text-xl" />,
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      bgGradient: "from-yellow-500/20 to-orange-500/20",
      type: "Winner",
      link: "https://drive.google.com/file/d/1oHz0RqHkmr9GI1zFZgYnDsgE6XEyLaQs/view?usp=drive_link"
    },
    {
      id: 1,
      title: "Best Idea at Web Works'24",
      organization: "Android Club",
      description: "Recognized for the most innovative idea in the Web Works'24 competition organized by Android Club.",
      date: "2024",
      icon: <Star className="text-xl" />,
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      type: "Best Idea",
      link: "https://drive.google.com/file/d/1dUeCMptwzzkzTG2kha4l0GvBDNw4Y0VO/view?usp=drive_link"
    },
    {
      id: 2,
      title: "CRTFHQ First 60 Fellowship",
      organization: "CRTFHQ",
      description: "Selected among the first 60 fellows for the prestigious CRTFHQ Fellowship program, recognizing outstanding potential in technology.",
      date: "2024",
      icon: <Crown className="text-xl" />,
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      bgGradient: "from-cyan-500/20 to-blue-500/20",
      type: "Fellowship",
      link: "https://drive.google.com/file/d/1e71Rst2tPbIDlxzdD5pgpSaC7iKiQnYs/view?usp=drive_link"
    },
    {
      id: 3,
      title: "Summer Internship",
      organization: "Tata Power Central Odisha Distribution Limited",
      description: "Successfully completed summer internship at Tata Power Central Odisha Distribution Limited, gaining valuable industry experience.",
      date: "Summer 2024",
      icon: <Briefcase className="text-xl" />,
      gradient: "from-emerald-500 via-teal-500 to-green-500",
      bgGradient: "from-emerald-500/20 to-teal-500/20",
      type: "Internship",
      link: "https://drive.google.com/file/d/1vIYEAluIvcKXFgyD2d1qfwF3LPRatV71/view?usp=drive_link"
    },
    {
      id: 4,
      title: "NCC Cadet",
      organization: "National Cadet Corps",
      description: "Active member of National Cadet Corps (NCC) during school level, developing leadership skills and discipline.",
      date: "School Level",
      icon: <Shield className="text-xl" />,
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      bgGradient: "from-orange-500/20 to-amber-500/20",
      type: "Service",
      link: ""
    },
    {
      id: 5,
      title: "The Complete Web Development Bootcamp",
      organization: "Angela Yu - Udemy",
      description: "Comprehensive full-stack web development certification covering HTML, CSS, JavaScript, Node.js, React, and databases.",
      date: "2024",
      icon: <Code className="text-xl" />,
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      bgGradient: "from-blue-500/20 to-indigo-500/20",
      type: "Certification",
      link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
    },
    {
      id: 6,
      title: "Discipline Committee Member",
      organization: "Vibrance 2025 - VIT Chennai",
      description: "Managed event operations and logistics, ensuring 100% schedule adherence and enhancing experience for 3,000+ participants.",
      date: "Jan 2025 – Mar 2025",
      icon: <ShieldCheck className="text-xl" />,
      gradient: "from-green-500 via-lime-500 to-emerald-500",
      bgGradient: "from-green-500/20 to-lime-500/20",
      type: "Leadership",
      link: "https://drive.google.com/file/d/1amn4r8_whGg6P1fhHrbwJUK72zOb5wh-/view?usp=drive_link"
    },
    {
      id: 7,
      title: "Hackathon Participation Certificates",
      organization: "Various Competitions",
      description: "Multiple hackathon participation certificates showcasing consistent involvement in competitive programming events.",
      date: "2024",
      icon: <Medal className="text-xl" />,
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      bgGradient: "from-green-500/20 to-emerald-500/20",
      type: "Participation",
      link: "https://drive.google.com/file/d/13fdFKJQsgoUFykJBcdQtdqKoS4FcQSbj/view?usp=drive_link"
    }
  ];

  const handleViewDetails = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="achievements"
      className="relative w-full min-h-screen py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-r from-yellow-500/15 to-orange-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-40 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
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
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-6 mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-3xl flex items-center justify-center shadow-2xl">
                <Trophy className="text-white text-3xl" />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 rounded-3xl blur-xl animate-pulse"></div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Achievements</span>{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient-x">
                & Certifications
              </span>
            </h1>
          </div>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A collection of <strong className="text-yellow-400">competitive wins</strong>, 
            <strong className="text-purple-400"> professional experiences</strong>, and 
            <strong className="text-cyan-400"> continuous learning milestones</strong>.
          </p>
        </div>

        {/* Grid - Updated to 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {allItems.map((item, index) => (
            <div
              key={item.id}
              data-index={item.id}
              className={`group relative transform transition-all duration-1000 ${
                visibleItems.has(item.id) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              } hover:scale-102`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-gray-800/70 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-600/70 hover:shadow-xl h-full flex flex-col">
                
                {/* Header */}
                <div className={`relative p-6 bg-gradient-to-br ${item.bgGradient} backdrop-blur-sm`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-1 bg-gradient-to-r ${item.gradient} text-white text-xs font-bold rounded-md`}>
                          {item.type}
                        </span>
                        <span className="text-gray-300 text-sm">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1 text-gray-200 text-sm">
                        <MapPin className="text-xs flex-shrink-0" />
                        <span className="truncate">{item.organization}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                    {item.description}
                  </p>

                  {/* View Details Button */}
                  <button 
                    onClick={() => handleViewDetails(item.link)}
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${item.gradient} text-white text-sm font-medium py-2 px-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 mt-auto`}
                  >
                    <span>View Details</span>
                    <ExternalLink className="text-xs" />
                  </button>
                </div>

                {/* Hover Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 blur-xl rounded-2xl transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            </div>
          ))}
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
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}