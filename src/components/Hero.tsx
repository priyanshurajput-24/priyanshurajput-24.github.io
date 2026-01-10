import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent pb-2">
            Priyanshu Rajput Tirkit
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200">
            Jr. AI Scientist
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Transforming complex data into actionable insights through Deep Learning, XAI, and cutting-edge LLMs
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <a
              href="https://www.linkedin.com/in/priyanshu-rajput"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://github.com/priyanshu-rajput"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/50"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="mailto:rajputmanu024@gmail.com"
              className="group flex items-center gap-2 px-6 py-3 border-2 border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-500 hover:text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <Mail className="w-5 h-5" />
              <span>Email Me</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
