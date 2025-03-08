import React from 'react';
import { ArrowRight, Code2, Cloud, Shield, Cpu, Blocks, ChevronRight, Github, Linkedin, Twitter, Globe, Zap, Server } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header/Navigation */}
      <nav className="fixed w-full bg-slate-900/90 backdrop-blur-lg z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <Blocks className="h-10 w-10 text-emerald-400" />
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">
                Intelion
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#solutions" className="text-slate-300 hover:text-emerald-400 transition">Solutions</a>
              <a href="#services" className="text-slate-300 hover:text-emerald-400 transition">Services</a>
              <a href="#about" className="text-slate-300 hover:text-emerald-400 transition">About</a>
              <button className="bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
                Future-Proof Your Business
              </span>
            </h1>
            <p className="text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Harness the power of next-generation technology solutions to transform your enterprise and stay ahead in the digital age.
            </p>
            <div className="flex justify-center gap-6">
              <button className="group bg-emerald-500 text-white px-8 py-4 rounded-full hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105 flex items-center">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="solutions" className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-6">Innovative Solutions</h2>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto">
              Cutting-edge technology solutions designed to revolutionize your business operations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-12 w-12" />,
                title: "Global Infrastructure",
                description: "Enterprise-grade cloud solutions with worldwide reach and unmatched reliability"
              },
              {
                icon: <Shield className="h-12 w-12" />,
                title: "Advanced Security",
                description: "Military-grade protection for your critical business assets and data"
              },
              {
                icon: <Zap className="h-12 w-12" />,
                title: "AI-Powered Analytics",
                description: "Transform raw data into actionable insights with our advanced AI solutions"
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-slate-800 p-8 rounded-2xl hover:bg-slate-700/50 transition-all duration-300 border border-slate-700 hover:border-emerald-400/50">
                <div className="text-emerald-400 mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 mb-6">{feature.description}</p>
                <a href="#" className="inline-flex items-center text-emerald-400 group-hover:text-emerald-300">
                  Explore Solution <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h2 className="text-4xl font-bold text-white mb-8">Enterprise Solutions for the Digital Age</h2>
              <p className="text-slate-300 text-lg mb-12 leading-relaxed">
                Our comprehensive suite of enterprise services is designed to accelerate your digital transformation journey and maximize operational efficiency.
              </p>
              <div className="grid gap-6">
                {[
                  {
                    icon: <Server className="h-6 w-6 text-emerald-400" />,
                    title: "Cloud Migration & Management",
                    description: "Seamless transition to cloud infrastructure"
                  },
                  {
                    icon: <Shield className="h-6 w-6 text-emerald-400" />,
                    title: "Cybersecurity Operations",
                    description: "24/7 security monitoring and threat prevention"
                  },
                  {
                    icon: <Cpu className="h-6 w-6 text-emerald-400" />,
                    title: "AI Implementation",
                    description: "Custom AI solutions for your business needs"
                  }
                ].map((service, index) => (
                  <div key={index} className="flex items-start p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-emerald-400/50 transition-all duration-300">
                    <div className="mr-4 mt-1">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-slate-300">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-2xl transform rotate-3 blur-lg opacity-30"></div>
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
                  alt="IT Services"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Blocks className="h-8 w-8 text-emerald-400" />
                <span className="ml-2 text-xl font-bold text-white">Intelion</span>
              </div>
              <p className="text-slate-400">
                Empowering enterprises with next-generation technology solutions
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Solutions</h3>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-emerald-400 transition">Cloud Infrastructure</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Cybersecurity</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">AI & Analytics</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Digital Transformation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-emerald-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Careers</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
              <div className="mt-8">
                <button className="w-full bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition flex items-center justify-center">
                  Contact Sales <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Intelion. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;