import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Briefcase, 
  Users, 
  TrendingUp, 
  Award, 
  Heart, 
  Linkedin, 
  Mail, 
  Menu, 
  X,
  Target,
  BookOpen,
  CheckCircle2
} from 'lucide-react';

const profileImage = "/assests/1000075236.jpg";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const NavLink = ({ id, label }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`text-sm font-medium transition-colors hover:text-blue-600 ${
        activeSection === id ? 'text-blue-700 font-semibold' : 'text-gray-600'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-slate-900 tracking-tight">
            DAVIS<span className="text-blue-600">.</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            <NavLink id="home" label="Home" />
            <NavLink id="about" label="My Journey" />
            <NavLink id="experience" label="Experience" />
            <NavLink id="values" label="Values" />
            <NavLink id="vision" label="Future Vision" />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg py-4 px-6 flex flex-col space-y-4">
            <NavLink id="home" label="Home" />
            <NavLink id="about" label="My Journey" />
            <NavLink id="experience" label="Experience" />
            <NavLink id="values" label="Values" />
            <NavLink id="vision" label="Future Vision" />
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/50 rounded-bl-[100px] opacity-60"></div>
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wide mb-6">
              Corporate Sales & Account Management
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-slate-900">
              Driving Growth through <br/>
              <span className="text-blue-700">Integrity & Empathy</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              Building lasting client relationships rooted in trust. I combine resilience, emotional intelligence, and strategic thinking to deliver measurable business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-lg shadow-blue-700/20 flex items-center justify-center"
              >
                Let's Connect <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-lg font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center"
              >
                Read My Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About / Journey Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-slate-200 rounded-2xl overflow-hidden relative shadow-2xl group">
                 {/* Image Component */}
                 <img 
                   src={profileImage} 
                   alt="Davis Professional Portrait" 
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
                <p className="text-blue-800 font-bold text-lg mb-1">"Growth comes from adaptability."</p>
                <p className="text-slate-500 text-sm">A core belief that guides my professional path.</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">My Journey</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  From my early years in group activities to my current career in corporate sales, my path has been defined by one constant: a passion for working with people.
                </p>
                <p>
                  Transitioning into sales was a pivotal challenge. It required me to build resilience in the face of rejection and develop deep emotional intelligence. I learned to view setbacks not as failures, but as opportunities to refine my communication and listen more actively to client needs.
                </p>
                <p>
                  Simultaneously, I expanded my skillset by balancing administrative and virtual assistant roles. This duality taught me the discipline of time management and organization—skills that now allow me to manage complex accounts with precision and reliability.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Briefcase className="text-blue-600 mb-3 h-6 w-6" />
                  <h3 className="font-semibold text-slate-900 mb-1">Sales Expertise</h3>
                  <p className="text-sm text-slate-500">Client acquisition, relationship building, and revenue growth.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Target className="text-blue-600 mb-3 h-6 w-6" />
                  <h3 className="font-semibold text-slate-900 mb-1">Admin Strategy</h3>
                  <p className="text-sm text-slate-500">Organization, prioritization, and efficient workflow management.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Defining Moment / Anecdote */}
      <section id="experience" className="py-20 bg-slate-900 text-white relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Defining Moment</h2>
            <p className="text-slate-300 text-lg">
              Character is revealed when challenges arise unexpectedly.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 md:p-12 border border-slate-700 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-blue-600 p-4 rounded-full shrink-0">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Stepping Up When It Mattered</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  "Early in my sales career, a colleague exited unexpectedly, leaving a high-value client account in limbo. Despite having limited experience at the time, I volunteered to manage it. I committed to learning quickly, communicating transparently, and staying highly organized."
                </p>
                <div className="flex flex-col sm:flex-row gap-6 mt-8 border-t border-slate-700 pt-8">
                  <div>
                    <span className="block text-3xl font-bold text-blue-400 mb-1">Retained</span>
                    <span className="text-sm text-slate-400">The account was successfully secured during the transition.</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-bold text-blue-400 mb-1">Expanded</span>
                    <span className="text-sm text-slate-400">Later grew the account through reliable service.</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-bold text-blue-400 mb-1">Proven</span>
                    <span className="text-sm text-slate-400">Demonstrated accountability and rapid adaptability.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              My cultural heritage and upbringing have instilled in me a set of unshakeable principles that guide every professional interaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-700">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Integrity & Trust</h3>
              <p className="text-slate-600">
                Consistency builds trust. I believe in transparent communication and doing what is right, even when it's difficult.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-700">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Service Leadership</h3>
              <p className="text-slate-600">
                Influenced by my community upbringing, I approach leadership as an act of service—supporting others to achieve their best.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-700">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Continuous Growth</h3>
              <p className="text-slate-600">
                I view every challenge as a lesson. My commitment to personal development ensures I am always bringing new strategies to the table.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section id="vision" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Future Aspirations</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <Target className="text-blue-600 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Short Term</h4>
                    <p className="text-slate-600">Excelling in corporate sales and account management by strengthening client relationships and driving measurable business growth.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <BookOpen className="text-blue-600 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Long Term</h4>
                    <p className="text-slate-600">Taking on leadership roles where I can shape strategy, mentor teams, and build high-performing units that deliver lasting client trust.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-xl mb-4 text-slate-900">Why Work With Me?</h3>
              <ul className="space-y-4">
                {[
                  "Proven resilience in high-pressure sales environments.",
                  "Strong administrative and organizational foundation.",
                  "A natural mentor who enjoys guiding others.",
                  "Ethical decision-making grounded in core values.",
                  "Adaptable to diverse client needs and corporate cultures."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact CTA */}
      <footer id="contact" className="bg-slate-900 text-slate-300 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Let's Build Something Great Together</h2>
          <p className="max-w-2xl mx-auto mb-10 text-slate-400">
            I am always open to discussing new opportunities in corporate sales, account management, and leadership.
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <a href="#" className="p-4 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors group">
              <Linkedin className="h-6 w-6 group-hover:text-white" />
            </a>
            <a href="mailto:contact@davis.com" className="p-4 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors group">
              <Mail className="h-6 w-6 group-hover:text-white" />
            </a>
          </div>

          <div className="border-t border-slate-800 pt-8 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Davis Portfolio. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}