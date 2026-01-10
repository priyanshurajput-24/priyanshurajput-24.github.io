import { Brain, Lightbulb, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate AI Scientist specializing in Deep Learning and Explainable AI, currently working at Data POEM in Bengaluru.
              With a strong foundation in Data Science from IIT Madras, I transform complex, unstructured data into meaningful insights.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My expertise lies in building robust deep learning models, implementing XAI techniques for model interpretability,
              and fine-tuning custom LLMs to meet specific business requirements. I'm driven by the challenge of making AI
              more transparent and accessible.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Beyond model development, I optimize performance through CUDA and C++ implementations, ensuring scalable and
              efficient solutions for real-world applications.
            </p>
          </div>

          <div className="space-y-6">
            <div className="group p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1">
              <Brain className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Deep Learning Expert</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building sophisticated neural networks for pattern recognition in complex datasets
              </p>
            </div>

            <div className="group p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
              <Lightbulb className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">XAI Specialist</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Implementing explainable AI techniques to enhance model transparency and trust
              </p>
            </div>

            <div className="group p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1">
              <Sparkles className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">LLM Fine-tuning</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Customizing large language models for specific business needs and applications
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
