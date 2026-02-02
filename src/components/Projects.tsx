import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Hand-Written Text Detection',
    description:
      'Developed a robust hand-written text detection system using PyTorch and Transformer models, optimized with CUDA for enhanced performance and accuracy. The solution, deployed as an API with FastAPI, supports easy integration and scalability. Trained to recognize diverse handwriting styles, the model achieves high precision in real-world scenarios.',
    technologies: ['PyTorch', 'Transformers', 'AWS Textract', 'Deep Learning', 'CUDA', 'FastAPI'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'AI ChatBot with RAG',
    description:
      'AI chatbot leveraging RAG (Retrieval-Augmented Generation) to enhance response accuracy by integrating external data sources. NLP techniques, supported by libraries like NLTK, enable efficient text processing and understanding. Models like BERT provide deep contextual comprehension, allowing chatbots to interpret complex queries and engage in meaningful conversations.',
    technologies: ['RAG', 'NLP', 'LLM', 'NLTK', 'BERT', 'Python'],
    gradient: 'from-purple-500 to-pink-500',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent pb-2">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-700 dark:text-gray-300 rounded-full border border-blue-200 dark:border-purple-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

        
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
