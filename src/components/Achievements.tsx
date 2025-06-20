import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { fadeIn, staggerContainer } from '../lib/motion';

const Achievements: React.FC = () => {
  const certifications = [
    { name: "Data Analytics on AWS Certified", provider: "Coursera", year: "2024" },
    { name: "Getting Started with AWS", provider: "Simplilearn", year: "2024" },
    { name: "Cyber Security", provider: "Coursera", year: "2024" },
    { name: "Introduction to MERN Stack", provider: "Simplilearn", year: "2024" },
    { name: "Full Stack Java Development", provider: "Simplilearn", year: "2024" },
    { name: "Frontend Development", provider: "Simplilearn", year: "2023" },
  ];

  const skills = [
    { name: "Python", provider: "Mimo & Programming Hub", level: "Certified" },
    { name: "Java & C Programming", provider: "Mimo & Programming Hub", level: "Certified" },
    { name: "JavaScript Proficiency", provider: "Mimo & Programming Hub", level: "Certified" },
    { name: "MongoDB Proficiency", provider: "MongoDB University", level: "Certified" },
    { name: "SQL", provider: "Mimo & Programming Hub", level: "Certified" },
  ];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-zinc-950">
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
            Achievements & Certifications
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-blue-600 mx-auto mt-4"
            variants={fadeIn('up', 'tween', 0.2, 1)}
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <motion.div
            variants={fadeIn('right', 'tween', 0.3, 1)}
          >
            <h3 className="text-2xl font-bold mb-6">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full border-none shadow-md dark:bg-zinc-800/60 backdrop-blur-sm">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-3">
                        <Badge className="bg-blue-500 hover:bg-blue-600">{cert.year}</Badge>
                      </div>
                      <h4 className="font-semibold text-lg mb-2">{cert.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-auto">
                        {cert.provider}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={fadeIn('left', 'tween', 0.4, 1)}
          >
            <h3 className="text-2xl font-bold mb-6">Proficiency Certifications</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="border-none shadow-md dark:bg-zinc-800/60 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold">{skill.name}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{skill.provider}</p>
                        </div>
                        <Badge variant="outline" className="border-green-300 bg-green-50 dark:bg-green-950 dark:border-green-800 text-green-700 dark:text-green-300">
                          {skill.level}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          variants={fadeIn('up', 'tween', 0.5, 1)}
        >
          <Card className="max-w-2xl mx-auto border-none shadow-md dark:bg-zinc-800/60 backdrop-blur-sm">
            <CardContent className="p-6">
              <p className="text-lg font-medium mb-2">Always Learning & Growing</p>
              <p className="text-gray-600 dark:text-gray-300">
                Continuously expanding my knowledge and skills in web development technologies
                and best practices through online courses, tutorials, and hands-on projects.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Achievements;