import { useState, useEffect } from "react";
import { FaCalendarAlt, FaBriefcase, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";

// Since we can't import images in this environment, I'll use placeholder URLs
// Replace these with your actual imported image paths
import tpcodl from '../assets/tpcodl.png';
import ieee from '../assets/ieee.png';
import robotics from '../assets/robotics.png';
import vibrance from '../assets/vibrancevit.png';
import kalinga from '../assets/kalinga.png';


export default function ExperienceSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'experience') {
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

    const section = document.getElementById('experience');
    if (section) observer.observe(section);

    setTimeout(() => {
      document.querySelectorAll('[data-index]').forEach(el => {
        observer.observe(el);
      });
      // Force show all items after a delay to ensure they're visible
      setTimeout(() => {
        setVisibleItems(new Set([0, 1, 2, 3, 4]));
      }, 500);
    }, 100);

    return () => observer.disconnect();
  }, []);

 const experiences = [
  {
    role: "Summer Intern",
    company: "Tata Power Central Odisha Distribution Limited",
    duration: "May 2025 - Jun 2025",
    type: "Internship",
    location: "Bhubaneswar, India",
    description:
      "Developed real-world Android apps and tools to improve utility services and user accessibility.",
    highlights: [
      "Built a Spot Billing App using Android Studio & REST APIs",
      "Reduced manual billing errors by 60%, boosted speed by 70%",
      "Created OCR app using ML Kit supporting 20+ languages",
    ],
    image: tpcodl,
    color: "from-blue-500 to-cyan-500",
  },
  {
    role: "Treasurer",
    company: "IEEE Photonics Society",
    duration: "Mar 2024 - Present",
    type: "Leadership",
    location: "VIT Chennai",
    description:
      "Organized and led technical discussions, expanding knowledge in photonics and emerging technologies.",
    highlights: [
      "Conducted 5+ webinars with industry experts",
      "Facilitated 200+ student discussions on AI, IoT, Quantum",
      "Delivered deep insights into photonics applications",
    ],
    image: ieee,
    color: "from-purple-500 to-pink-500",
  },
  {
    role: "Core Member ECC",
    company: "Kalinga Jyoti ",
    duration: "Aug 2024 - May 2025",
    type: "Leadership",
    location: "VIT Chennai",
    description:
      "Managed technical events, on-day operations, and contributed to creative initiatives like poster design.",
    highlights: [
      "Handled logistics and event day execution",
      "Created event posters and visual content",
      "Organized and supported offline workshops",
    ],
    image: kalinga,
    color: "from-emerald-500 to-teal-500",
  },
  {
    role: "Web Developer",
    company: "Robotics Club",
    duration: "Jan 2025 - Present",
    type: "Technical",
    location: "VIT Chennai",
    description:
      "Built and maintained the official event website for the club, supporting community and tech outreach.",
    highlights: [
      "Created responsive event website for club activities",
      "Implemented real-time updates and forms",
      "Enhanced digital visibility of robotics events",
    ],
    image: robotics,
    color: "from-green-500 to-teal-500",
  },
  {
    role: "Discipline Committee Member",
    company: "Vibrance 2025",
    duration: "Jan 2025 – Mar 2025",
    type: "Event Management",
    location: "VIT Chennai",
    description:
      "Oversaw discipline and logistics at the cultural fest, ensuring a seamless experience for all participants.",
    highlights: [
      "Managed event-day logistics for 3,000+ participants",
      "Achieved 100% schedule adherence across events",
      "Boosted operational efficiency by 40%",
    ],
    image: vibrance,
    color: "from-orange-500 to-red-500",
  },
];

  return (
    <section
      id="experience"
      className="relative w-full min-h-screen py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 -left-32 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl">
              <FaBriefcase className="text-white text-xl" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Experience</span>
            </h1>
          </div>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            My journey through professional experiences, leadership roles, and contributions to various organizations.
          </p>
        </div>

        {/* Compact Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                data-index={index}
                className={`relative transform transition-all duration-700 ${
                  visibleItems.has(index) 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline Line - only show for items that aren't the last one */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-24 bg-gradient-to-b from-cyan-500/50 to-purple-500/50"></div>
                )}
                
                {/* Timeline Dot */}
                <div className={`absolute left-4 top-6 w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full shadow-lg border-2 border-gray-900 transition-all duration-500 ${
                  visibleItems.has(index) ? 'scale-100' : 'scale-0'
                }`}></div>

                {/* Content Card */}
                <div className="ml-16 group">
                  <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <div className="flex items-center gap-3 mb-2 sm:mb-0">
                        {/* Image Container with Gradient Background */}
                        <div className={`relative w-12 h-12 bg-gradient-to-r  rounded-lg flex items-center justify-center shadow-lg overflow-hidden group-hover:scale-110 transition-transform duration-300`}>
                          <img 
                            src={exp.image} 
                            alt={`${exp.company} logo`}
                            className="w-20 h-20 object-contain rounded transition-transform duration-300 group-hover:scale-110"
                            onError={(e) => {
                              // Fallback if image fails to load
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            }}
                          />
                          {/* Fallback text (hidden by default) */}
                          <span className="hidden text-white text-xs font-bold">
                            {exp.company.charAt(0)}
                          </span>
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-gray-300 font-medium">{exp.company}</p>
                        </div>
                      </div>
                      
                      {/* Badges */}
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30">
                          <FaCalendarAlt className="inline w-3 h-3 mr-1" />
                          {exp.duration}
                        </span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full border border-purple-500/30">
                          {exp.type}
                        </span>
                        <span className="px-3 py-1 bg-pink-500/20 text-pink-400 text-xs rounded-full border border-pink-500/30">
                          <FaMapMarkerAlt className="inline w-3 h-3 mr-1" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Key Achievements</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        {exp.highlights.map((highlight, hIndex) => (
                          <div
                            key={hIndex}
                            className="flex items-center gap-2 text-sm text-gray-300"
                          >
                            <FaChevronRight className="text-cyan-400 text-xs flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-gray-400">Interested in working together?</p>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Let's Connect</span>
              <FaChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .delay-1000 { 
          animation-delay: 1000ms; 
        }
      `}</style>
    </section>
  );
}