import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { fadeIn, staggerContainer } from '../lib/motion';

const TechStack: React.FC = () => {
  const techCategories = [
    {
      title: "Frontend",
      techs: [
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      ]
    },
    {
      title: "Backend",
      techs: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "REST APIs", icon: "https://www.svgrepo.com/show/375531/api.svg" },
        { name: "Socket.io", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
      ]
    },
    {
      title: "Tools & DevOps",
      techs: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      ]
    },
    {
      title: "Programming Languages",
      techs: [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "SQL", icon: "https://www.svgrepo.com/show/331760/sql-database-generic.svg" },
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-white dark:bg-zinc-950">
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
            Tech Stack
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-blue-600 mx-auto mt-4"
            variants={fadeIn('up', 'tween', 0.2, 1)}
          ></motion.div>
          <motion.p 
            className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={fadeIn('up', 'tween', 0.3, 1)}
          >
            Technologies and tools I work with to bring ideas to life
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={fadeIn(
                index % 2 === 0 ? 'left' : 'right', 
                'tween', 
                0.2 + index * 0.1, 
                1
              )}
            >
              <Card className="h-full border-none shadow-md dark:bg-zinc-800/60 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">{category.title}</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4">
                    {category.techs.map((tech) => (
                      <motion.div
                        key={tech.name}
                        className="flex flex-col items-center p-3 rounded-lg"
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="w-12 h-12 mb-3 flex items-center justify-center">
                          <img 
                            src={tech.icon} 
                            alt={tech.name} 
                            className="max-w-full max-h-full" 
                          />
                        </div>
                        <span className="text-sm text-center">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechStack;