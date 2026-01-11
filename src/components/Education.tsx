import { GraduationCap } from 'lucide-react';

const education = [
  {
    institution: 'IIT Madras',
    degree: 'B.S. in Data Science and Application',
    location: 'Chennai',
    period: 'Jan 2021 - Apr 2025',
    grade: 'CGPA: 7.1',
  },
  {
    institution: 'CSJMU Kanpur',
    degree: 'Mathematics B.Sc.',
    location: 'Kanpur',
    period: 'July 2019 - July 2022',
    grade: 'Percentage: 61%',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">{edu.institution}</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1">{edu.degree}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.location}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{edu.period}</span>
                <a
                href="https://drive.google.com/file/d/1M4rei5PSxg2i6nexJeXUilMKSyIGwWni/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl hover:shadow-md transition-all duration-300 hover:scale-105 border border-blue-200 dark:border-purple-800"
              >
                <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <span className="text-sm font-medium">View Doc</span>
                  </button> </a>
                <span className="px-4 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold border border-blue-200 dark:border-purple-800">
                  {edu.grade}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
