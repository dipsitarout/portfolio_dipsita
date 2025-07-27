import { useState, useEffect } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  User,
  MessageSquare,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  ExternalLink,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="text-sm" />,
      url: "https://linkedin.com/in/dipsita-rout",
      color: "from-blue-600 to-blue-400"
    },
    {
      name: "GitHub",
      icon: <Github className="text-sm" />,
      url: "https://github.com/dipsitarout",
      color: "from-gray-800 to-gray-600"
    },
    {
      name: "Instagram",
      icon: <Instagram className="text-sm" />,
      url: "https://instagram.com/dipsita__12",
      color: "from-pink-600 via-purple-600 to-indigo-600"
    },
    {
      name: "Twitter",
      icon: <Twitter className="text-sm" />,
      url: "https://twitter.com/yourusername",
      color: "from-sky-500 to-blue-500"
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="text-sm" />,
      label: "Email",
      value: "dipsitarout@gmail.com",
      href: "mailto:dipsitarout@gmail.com",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: <Phone className="text-sm" />,
      label: "Phone",
      value: "+91 70086 16156",
      href: "tel:+917008616156",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="text-sm" />,
      label: "Location",
      value: "Chennai, Tamil Nadu",
      href: "https://maps.google.com/?q=Chennai,Tamil+Nadu,India",
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Simple Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-40 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
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

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-6 mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-2xl">
                <Mail className="text-white text-3xl" />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl animate-pulse"></div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Let's</span>{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
                Connect
              </span>
            </h1>
          </div>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to bring your <strong className="text-cyan-400">ideas to life</strong>? 
            Let's discuss your next <strong className="text-purple-400">project</strong>!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details Side - Combined */}
          <div className="space-y-8">
            {/* Contact Information & Social Media Combined */}
            <div className="bg-gray-800/70 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 shadow-2xl hover:border-gray-600/70 transition-all duration-500">
              <h2 className="text-xl font-bold text-white mb-5">Get in Touch</h2>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="group flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className={`w-8 h-8 bg-gradient-to-r ${info.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-xs font-medium">{info.label}</p>
                      <p className="text-white text-sm font-semibold group-hover:text-gray-100 transition-colors">{info.value}</p>
                    </div>
                    <ExternalLink className="text-gray-400 text-sm group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-gray-700/50 my-5"></div>

              {/* Social Media */}
              <h3 className="text-lg font-bold text-white mb-4">Follow Me</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-gray-700/30 rounded-lg p-3 hover:bg-gray-700/50 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className={`w-7 h-7 bg-gradient-to-r ${social.color} rounded-md flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                      {social.icon}
                    </div>
                    <h4 className="text-white font-semibold text-xs">{social.name}</h4>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <div>
            <div className="relative bg-gray-800/70 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl hover:border-gray-600/70 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-6">Send Message</h2>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="text-green-500 text-6xl mx-auto mb-4 animate-bounce" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300">Thanks for reaching out. I'll get back to you soon!</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      <User className="inline text-sm mr-2" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      <Mail className="inline text-sm mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      <MessageSquare className="inline text-sm mr-2" />
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or just say hi!"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group ${
                      isSubmitting 
                        ? 'opacity-70 cursor-not-allowed' 
                        : 'hover:shadow-2xl hover:scale-105 hover:-translate-y-1'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="text-xl group-hover:translate-x-1 transition-transform" />
                        <span>Send Message</span>
                        <ArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              )}
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
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
      `}</style>
    </section>
  );
}