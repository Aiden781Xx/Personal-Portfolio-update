import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { fadeIn, staggerContainer } from '../lib/motion';

const WorkExperience: React.FC = () => {
  const experiences = [
    {
      title: "Backend Developer Intern-CJN",
      company: "StartUpWorld",
      location: "Remote",
      period: "June 2025 – Present",
      responsibilities: [
        "Developed secure RESTful APIs using Node.js and Express.js for scalable backend services.",
        "Collaborated with the SMCNJ team in remote agile sprints, handling code reviews and backend deployments."
      ],
      tags: ["Node.js", "Express.js", "RESTful APIs", "Agile"]
    },
    {
      title: "MERN Stack Developer Intern",
      company: "VaultOfCodes",
      location: "Remote",
      period: "June 2025",
      responsibilities: [
        "Built a full-stack web app with React.js frontend and Node.js/Express.js backend.",
        "Implemented JWT authentication, MongoDB integration, and efficient form validation with React Hooks."
      ],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"]
    },
    {
      title: "MERN Stack Developer Intern",
      company: "Glowlogics",
      location: "Remote",
      period: "May 2025 – June 2025",
      responsibilities: [
        "Designed responsive UI with React.js and TailwindCSS, ensuring reusable components.",
        "Connected frontend to backend APIs using Express.js and MongoDB Atlas for complete full-stack functionality."
      ],
      tags: ["React.js", "TailwindCSS", "Express.js", "MongoDB Atlas"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-zinc-950">
      <motion.div 
        className="container px-4 md:px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            variants={fadeIn('up', 'tween', 0.1, 1)}
          >
            Work Experience
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-blue-600 mx-auto mt-4"
            variants={fadeIn('up', 'tween', 0.2, 1)}
          ></motion.div>
        </div>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={fadeIn('up', 'tween', 0.2 + index * 0.1, 1)}
              className="relative"
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900/50"></div>
              )}
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full border-4 border-white dark:border-zinc-900">
                    <motion.div 
                      className="w-8 h-8 bg-blue-500 rounded-full"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    ></motion.div>
                  </div>
                </div>
                <div className="ml-6 w-full">
                  <Card className="border-none shadow-lg backdrop-blur-sm dark:bg-zinc-800/60 overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-2 md:mt-0">{exp.period}</span>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                          <span className="font-medium">{exp.company}</span>
                          <span className="mx-2">•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 mb-4">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start">
                            <span className="mr-2 text-blue-500">›</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WorkExperience;