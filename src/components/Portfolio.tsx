import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, MapPin, Phone, ExternalLink, ChevronDown } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const handleContactSubmit = () => {
    const subject = encodeURIComponent(contactForm.subject || 'Portfolio Contact');
    const body = encodeURIComponent(`Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`);
    window.location.href = `mailto:shivambhardwaj750000@gmail.com?subject=${subject}&body=${body}`;
  };

  const skills = {
    languages: ['JavaScript', 'Java', 'Python', 'C', 'SQL', 'TypeScript'],
    frontend: ['React.js', 'Redux', 'HTML5', 'CSS3', 'Tailwind CSS', 'Chart.js'],
    backend: ['Node.js', 'Express.js', 'Next.js', 'RESTful APIs', 'GraphQL', 'WebSockets'],
    databases: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Firebase'],
    tools: ['Git', 'Docker', 'Postman', 'Jira', 'Nginx', 'PM2']
  };

  const experience = [
    {
      title: 'Full Stack Developer (Node.js)',
      company: 'UdrCrafts',
      location: 'Rajasthan',
      period: 'Dec 2025 – Present',
      type: 'Remote',
      description: [
        'Developing E-Commerce applications with scalable architecture',
        'Implementing JWT authentication with RBAC'
      ],
      tags: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT']
    },
    {
      title: 'Backend Developer Intern',
      company: 'Blue PlanetInfo Solution',
      location: 'Pune',
      period: 'June 2025 – Dec 2025',
      type: 'Remote',
      description: [
        'Built RESTful APIs reducing response time from 850ms to 550ms (35% improvement)',
        'Managed production APIs for startupworld.in serving 10K+ monthly users',
        'Implemented error handling improving uptime from 94% to 99.2%'
      ],
      tags: ['Node.js', 'Express.js', 'MongoDB', 'API']
    },
    {
      title: 'MERN Stack Developer Intern',
      company: 'Glowlogics',
      location: 'Remote',
      period: 'May 2025 – June 2025',
      type: 'Remote',
      description: [
        'Integrated React.js frontend with Express.js backend APIs',
        'Built responsive UI components using Tailwind CSS'
      ],
      tags: ['React.js', 'Tailwind CSS', 'Express.js', 'MongoDB']
    }
  ];

  const projects = [
    {
      title: 'Restaurant Ordering System',
      description: 'Deployed on Render reducing page load from 3.2s to 1.8s (44% faster). Integrated payment gateway with 99.7% transaction success rate.',
      tags: ['MERN Stack', 'MongoDB Atlas', 'Render', 'Payment Gateway'],
      status: 'Completed',
      icon: '🍽️'
    },
    {
      title: 'Social Media Analytics Dashboard',
      description: 'Created aggregation APIs improving query time from 2.1s to 950ms (55% faster). Implemented Chart.js visualizations rendering 1000+ data points.',
      tags: ['React.js', 'Express.js', 'Chart.js', 'MongoDB'],
      status: 'Completed',
      icon: '📊'
    },
    {
      title: 'E-commerce Platform',
      description: 'Optimized product search API from 1.5s to 600ms (60% improvement). Implemented JWT auth with session management.',
      tags: ['MERN Stack', 'JWT', 'Payment Gateway', 'Redux'],
      status: 'In Progress',
      icon: '🛒'
    },
    {
      title: 'Task Management App',
      description: 'Real-time task collaboration tool with live updates, user roles, and team workspace features. Built using WebSockets for sync.',
      tags: ['React.js', 'Node.js', 'Socket.io', 'WebSockets'],
      status: 'Completed',
      icon: '✅'
    }
  ];

  const certifications = [
    { name: 'Data Analytics on AWS Certified', provider: 'SimpliLearn' },
    { name: 'Getting Started with AWS', provider: 'SimpliLearn' },
    { name: 'Cyber Security', provider: 'SimpliLearn' },
    { name: 'Introduction to MERN Stack', provider: 'SimpliLearn' },
    { name: 'Full Stack Java Development', provider: 'SimpliLearn' },
    { name: 'Frontend Development', provider: 'SimpliLearn' }
  ];

  const proficiencies = [
    { name: 'Python', level: 'Meta AI Programming Hub' },
    { name: 'Java & C Programming', level: 'Meta AI Programming Hub' },
    { name: 'JavaScript Proficiency', level: 'Meta AI Programming Hub' },
    { name: 'MongoDB Proficiency', level: 'MongoDB University' },
    { name: 'SQL', level: 'Meta AI Programming Hub' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-blue-500">SK</span> Shivam
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['Home', 'About', 'Experience', 'Projects', 'Achievements', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.toLowerCase() ? 'text-blue-500' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                ))}
                <button className="ml-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Resume
                </button>
              </div>
            </div>
            
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'About', 'Experience', 'Projects', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            Shivam Kumar Sharma
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">Full Stack Developer</p>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Full-stack developer with 1+ year of experience building scalable MERN applications and RESTful APIs. 
            Proven track record of optimizing API performance and managing production systems handling 10K+ users.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium transition-all hover:scale-105"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border border-gray-600 hover:border-gray-400 px-8 py-3 rounded-lg font-medium transition-all hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
          <div className="mt-16 animate-bounce">
            <ChevronDown className="mx-auto text-gray-500" size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-500">Education</h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-colors">
                  <h4 className="font-semibold text-lg mb-2">G.L. Bajaj Institute of Technology and Management</h4>
                  <p className="text-gray-400 mb-2">Bachelor of Technology in Computer Science</p>
                  <p className="text-blue-400 text-sm">2022 - 2026 • Greater Noida, UP</p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-colors">
                  <h4 className="font-semibold text-lg mb-2">Durga Prasad Baljeet Singh (PG) College</h4>
                  <p className="text-gray-400 mb-2">Bachelor of Science (PCM)</p>
                  <p className="text-blue-400 text-sm">2020 - 2023 • Anupshahr, UP</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-500">Technical Skills</h3>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800 transition-colors">
                    <h4 className="font-semibold mb-3 capitalize text-blue-400">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill: string, idx: number) => (
                        <span key={idx} className="px-3 py-1 bg-gray-700 rounded-full text-sm hover:bg-gray-600 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-colors">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">Extra-Curricular Activities</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Technophile with a keen interest in emerging digital tools and creative technologies</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Possess basic-level skills in video and graphic editing using Blender, CapCut, After Effects, and Photoshop</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all hover:shadow-xl">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">{exp.title}</h3>
                    <p className="text-gray-400">{exp.company} • {exp.type}</p>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-700 px-3 py-1 rounded">{exp.period}</span>
                </div>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <span className="text-blue-500 mr-2">→</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-gray-800/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all hover:shadow-2xl">
                <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <span className="text-6xl">{project.icon}</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${project.status === 'Completed' ? 'bg-green-900/30 text-green-400' : 'bg-yellow-900/30 text-yellow-400'}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-700 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded text-sm transition-colors">
                      View Details
                    </button>
                    <button className="px-4 border border-gray-600 hover:border-gray-400 rounded transition-colors">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Achievements & Certifications</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-500">Certifications</h3>
              <div className="grid gap-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="bg-gray-800/50 p-4 rounded-lg flex items-center justify-between hover:bg-gray-800 transition-colors">
                    <div>
                      <h4 className="font-semibold">{cert.name}</h4>
                      <p className="text-sm text-gray-400">{cert.provider}</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded text-xs">Verified</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-500">Proficiency Certifications</h3>
              <div className="grid gap-4">
                {proficiencies.map((prof, idx) => (
                  <div key={idx} className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800 transition-colors">
                    <h4 className="font-semibold mb-1">{prof.name}</h4>
                    <p className="text-sm text-gray-400">{prof.level}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-green-900/30 text-green-400 rounded text-xs">Certified</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-lg text-center border border-blue-800/30">
            <h3 className="text-2xl font-semibold mb-4">Always Learning & Growing</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Continuously expanding my knowledge and skills in web development technologies and best practices 
              through online courses, tutorials, and hands-on projects.
            </p>
            <div className="mt-6 flex justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-blue-900/30 rounded">250+ LeetCode Problems</span>
              <span className="px-4 py-2 bg-purple-900/30 rounded">RISE 1.0 Top Performer</span>
              <span className="px-4 py-2 bg-green-900/30 rounded">Team Leader</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Get In Touch</h2>
          <p className="text-gray-400 text-center mb-12">Feel free to reach out for collaborations or just a friendly chat</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  placeholder="Your name" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  placeholder="Your email" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                  placeholder="Subject of your message" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={4} 
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  placeholder="Your message" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                onClick={handleContactSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-medium transition-all hover:scale-105"
              >
                Send Message
              </button>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
                  <Mail className="text-blue-500" size={20} />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-sm">shivambhardwaj750000@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
                  <Phone className="text-blue-500" size={20} />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p>+91 7505611192</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
                  <MapPin className="text-blue-500" size={20} />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p>Greater Noida, India</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Aiden781Xx" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-110"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:shivambhardwaj750000@gmail.com" 
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-110"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4">
            <span className="text-2xl font-bold">
              <span className="text-blue-500">SK</span> Shivam Kumar Sharma
            </span>
          </div>
          <p className="text-gray-400 mb-4">Full Stack Developer specializing in MERN stack development</p>
          <p className="text-gray-500 text-sm">© 2025 Shivam Kumar Sharma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
