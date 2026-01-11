import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Data POEM',
    url: "https://datapoem.ai",
    role: 'Jr. AI Scientist',
    location: 'Bengaluru, India',
    period: 'April 2025 - Present',
    responsibilities: [
      'Built deep learning models to uncover patterns in complex, unstructured marketing data',
      'Applied XAI techniques (feature attribution, missingness analysis) to interpret model decisions and enhance transparency',
    ],
  },
  {
    company: 'Itech India',
    url: "https://itechindia.co",
    role: 'ML Engineer Trainee',
    location: 'Chennai, India',
    period: 'Dec 2023 - Jan 2025',
    responsibilities: [
      'Spearheaded the development of table detection, text detection, and text recognition techniques for CAD documents',
      'Fine tuning custom LLM model based on business requirements',
      'Enhanced performance by implementing optimizations using CUDA and C++ within the pipeline',
      'Worked on statistical techniques, including regression analysis, hypothesis testing, and model validation',
    ],
  },
  {
    company: 'Itech India',
    url: "https://itechindia.co",
    role: 'ML Intern',
    location: 'Chennai, India',
    period: 'June 2023 - Nov 2023',
    responsibilities: [
      'Identified key regions of interest within each file and consolidated findings for actionable insights',
      'Contributed to the optimization of data analysis procedures, resulting in enhanced efficiency',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              <div className="flex items-start gap-6">
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600 opacity-30 mt-4"></div>
                  )}
                </div>

                <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{exp.role}</h3>
                      <a href={exp.url} ><p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p> </a>
                      <p className="text-gray-600 dark:text-gray-400">{exp.location}</p>
                    </div>
                    <span className="text-sm font-medium px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
