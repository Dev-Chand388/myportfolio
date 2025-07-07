import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Code, 
  Monitor, 
  Server, 
  Database, 
  Wrench, 
  Award, 
  Trophy, 
  ExternalLink, 
  Building, 
  Calendar, 
  GraduationCap,
  Download,
  FileText
} from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/KetheDevChand.Resume.pdf';
    link.download = 'KetheDevChand_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200 transition-shadow ${isScrolled ? 'shadow-lg' : ''}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-blue-600">Kethe Dev Chand</div>
            <div className="hidden md:flex space-x-8 items-center">
              {['about', 'skills', 'projects', 'certifications', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-600 hover:text-blue-600 transition-colors capitalize"
                >
                  {section}
                </button>
              ))}
              <button
                onClick={downloadResume}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Download className="w-4 h-4" />
                Resume
              </button>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              {['about', 'skills', 'projects', 'certifications', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block text-gray-600 hover:text-blue-600 transition-colors capitalize w-full text-left"
                >
                  {section}
                </button>
              ))}
              <button
                onClick={downloadResume}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full justify-center font-medium"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600/5 to-teal-600/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Kethe Dev Chand
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-6 animate-fade-in-delay">
              Aspiring Software Engineer
            </p>
            
            {/* Email prominently displayed */}
            <div className="mb-8 animate-fade-in-delay">
              <a 
                href="mailto:devchand059@gmail.com" 
                className="inline-flex items-center gap-2 text-lg text-blue-600 hover:text-blue-500 transition-colors font-medium"
              >
                <Mail className="w-5 h-5" />
                devchand059@gmail.com
              </a>
            </div>

            {/* Resume Download Button - Large and Prominent */}
            <div className="mb-10 animate-fade-in-delay">
              <button
                onClick={downloadResume}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-10 py-5 rounded-2xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-bold text-xl border-2 border-transparent hover:border-white/20"
              >
                <FileText className="w-7 h-7" />
                Download My Resume
                <Download className="w-6 h-6" />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a 
                href="https://www.linkedin.com/in/kethe-dev-chand-b6782027a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-500 transition-all transform hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a 
                href="https://github.com/Dev-Chand388" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-all transform hover:scale-105"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a 
                href="https://leetcode.com/u/KetheDevChand/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105"
              >
                <Code className="w-5 h-5" />
                LeetCode
              </a>
            </div>

            {/* Contact Info */}
            <div className="text-gray-600">
              <p className="flex items-center justify-center gap-2 mb-2">
                <Phone className="w-4 h-4" />
                +91 7989404873
              </p>
              <p className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                Telangana, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Aspiring Software Engineer with hands-on experience in building scalable, componentized, and responsive full-stack applications using Java, Python, React, SpringBoot and Node.js. Proficient in writing clean, reusable, and testable code following best practices such as object-oriented design and modular development.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Monitor className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Frontend</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Server className="w-8 h-8 text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold">Backend</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>Java</li>
                <li>Node.js</li>
                <li>Spring Boot</li>
              </ul>
            </div>

            {/* Database */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Database className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold">Database</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>SQL</li>
                <li>MongoDB</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Wrench className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold">Tools & Practices</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>Git</li>
                <li>GitHub</li>
                <li>VS Code</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-blue-600/10 text-blue-600 px-4 py-2 rounded-full">Problem-Solving</span>
              <span className="bg-teal-600/10 text-teal-600 px-4 py-2 rounded-full">Clear Communication</span>
              <span className="bg-orange-600/10 text-orange-600 px-4 py-2 rounded-full">Collaborative Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Quiz Master */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Quiz Master</h3>
                <p className="text-gray-600 mb-4 text-sm">JavaScript | React | Node.js | MongoDB</p>
                <ul className="text-sm text-gray-700 space-y-2 mb-6">
                  <li>• Built a scalable full-stack quiz platform improving engagement by 40% with responsive design</li>
                  <li>• Integrated real-time feedback and smooth animations to boost completion rate by 35%</li>
                  <li>• Applied modular JavaScript and clean component-based architecture for maintainability</li>
                  <li>• Ensured data flow, error handling, and results rendering across client-server layers</li>
                </ul>
                <div className="flex gap-3">
                  <a 
                    href="https://github.com/Dev-Chand388/Quiz-Mastery" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-500 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a 
                    href="https://quizmasteryy.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-teal-600 hover:text-teal-500 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Indian Real Estate Platform */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Indian Real Estate Platform</h3>
                <p className="text-gray-600 mb-4 text-sm">JavaScript | React | Node.js | MongoDB</p>
                <ul className="text-sm text-gray-700 space-y-2 mb-6">
                  <li>• Developed a responsive UI with advanced filtering to enhance property discovery and retention</li>
                  <li>• Optimized Node.js backend APIs reducing mock data load time by 35%</li>
                  <li>• Employed reusable React components and RESTful integration to streamline property discovery</li>
                  <li>• Added dashboard and favourite listing features to improve UX and repeat visits</li>
                </ul>
                <div className="flex gap-3">
                  <a 
                    href="https://github.com/Dev-Chand388/Indian-Real-Estate-Platform" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-500 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a 
                    href="https://realestateplatformm.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-teal-600 hover:text-teal-500 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Medical Management System */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Medical Management System</h3>
                <p className="text-gray-600 mb-4 text-sm">JavaScript | React | Node.js | SQLite</p>
                <ul className="text-sm text-gray-700 space-y-2 mb-6">
                  <li>• Engineered a medication CRUD module with real-time adherence tracking (up to 90% compliance)</li>
                  <li>• Enabled daily medication logging to improve health tracking visibility by 80%</li>
                  <li>• Enhanced user experience by integrating a dashboard view for tracking medication status and missed doses</li>
                  <li>• Utilized JavaScript ES6 modules to ensure clean code architecture and enhance application scalability</li>
                </ul>
                <div className="flex gap-3">
                  <a 
                    href="https://github.com/Dev-Chand388/Medical-Management-System" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-500 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a 
                    href="https://medicalmanagementsystemm.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-teal-600 hover:text-teal-500 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Achievements</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "HTML & CSS",
                provider: "NxtWave | Static Website Development with HTML & CSS",
                color: "blue-600",
                link: "https://certificates.ccbp.in/intensive/static-website?id=ETNGRBEAJJ"
              },
              {
                title: "React.js",
                provider: "NxtWave | Modern Front-End Development with React.js",
                color: "blue-600",
                link: "https://drive.google.com/file/d/1QXR7P9riN5iXUKz7Iv6Zmwc8dAitjfNn/view?usp=sharing"
              },
              {
                title: "Java (Basic)",
                provider: "Hacker Rank | Core Java Programming Skills",
                color: "teal-600",
                link: "https://www.hackerrank.com/certificates/e6f37f615332"
              },
              {
                title: "JavaScript",
                provider: "NxtWave | Frontend Web Interactions with JavaScript",
                color: "orange-600",
                link: "https://certificates.ccbp.in/intensive/javascript-essentials?id=YWCWQVLXUJ"
              },
              {
                title: "Python",
                provider: "NxtWave | Programming Fundamentals Skills",
                color: "purple-600",
                link: "https://certificates.ccbp.in/intensive/programming-foundations?id=VFCMYTXYSV"
              },
              {
                title: "SQL",
                provider: "NxtWave | Efficient Query Handling and DBMS (SQL)",
                color: "green-600",
                link: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=TOASQIDGKE"
              },
              {
                title: "Node.js",
                provider: "NxtWave | Server-Side Development with Node.js",
                color: "yellow-600",
                link: "https://certificates.ccbp.in/intensive/node-js?id=BITSPISHCI"
              },
              {
                title: "LeetCode",
                provider: "Solved 60+ DSA Problems – Data Structures & Algorithms Practice",
                color: "red-600",
                link: "https://leetcode.com/u/KetheDevChand/",
                icon: Trophy
              }
            ].map((cert, index) => (
              <a 
                key={index}
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-3">
                  {cert.icon ? (
                    <cert.icon className={`w-6 h-6 text-${cert.color} mr-3`} />
                  ) : (
                    <Award className={`w-6 h-6 text-${cert.color} mr-3`} />
                  )}
                  <h3 className="font-semibold">{cert.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{cert.provider}</p>
                <div className={`mt-3 flex items-center text-${cert.color} text-sm`}>
                  <ExternalLink className="w-4 h-4 mr-1" />
                  {cert.icon ? 'View Profile' : 'View Certificate'}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600/5 to-teal-600/5 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="bg-blue-600/10 p-3 rounded-lg mr-6">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Bachelor of Technology - Computer Science</h3>
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Building className="w-4 h-4 mr-2" />
                      <span className="font-medium">Vaagdevi College of Engineering</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Warangal, Telangana, India</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-6 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>2020 - 2024</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-2 text-green-600" />
                      <span className="font-semibold text-green-600">CGPA: 6.92</span>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: "Data Structures & Algorithms", color: "blue-600" },
                        { name: "Object-Oriented Programming", color: "teal-600" },
                        { name: "Database Management Systems", color: "orange-600" },
                        { name: "Software Engineering", color: "green-600" },
                        { name: "Web Technologies", color: "yellow-600" }
                      ].map((course, index) => (
                        <span 
                          key={index}
                          className={`bg-${course.color}/10 text-${course.color} px-3 py-1 rounded-full text-sm`}
                        >
                          {course.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl mb-8 opacity-90">Ready to bring your ideas to life? Let's work together!</p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a 
              href="mailto:devchand059@gmail.com" 
              className="flex items-center gap-3 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-5 h-5" />
              devchand059@gmail.com
            </a>
            <a 
              href="tel:+917989404873" 
              className="flex items-center gap-3 bg-white/10 backdrop-blur px-6 py-3 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +91 7989404873
            </a>
          </div>
          
          {/* Resume Download in Contact Section */}
          <div className="border-t border-white/20 pt-8">
            <h3 className="text-xl font-semibold mb-4">Download My Resume</h3>
            <button
              onClick={downloadResume}
              className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg font-semibold"
            >
              <FileText className="w-6 h-6" />
              Download Resume
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white text-center">
        <p>&copy; 2024 Kethe Dev Chand. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;