import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { fadeIn, staggerContainer } from '../lib/motion';

const AboutSection: React.FC = () => {
  const education = [
    {
      institution: "G.L. Bajaj Institute of Technology and Management",
      location: "Greater Noida, Uttar Pradesh",
      degree: "Bachelor of Technology in Computer Science",
      period: "2023 - 2026",
    },
    {
      institution: "Durga Prasad Baljeet Singh (PG) College",
      location: "Anupshahr, Uttar Pradesh",
      degree: "Bachelor Of Science | PCM",
      period: "2020 - 2023",
    },
  ];

  const skills = [
    { category: "Core Technologies", items: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "RESTful APIs", "WebSockets"] },
    { category: "Programming Languages", items: ["Java", "C", "Python", "TypeScript", "SQL"] },
    { category: "Dev Tools & Platforms", items: ["Git", "Docker", "Postman", "JWT", "Bcrypt.js", "Chart.js", "Netlify/Vercel"] },
    { category: "UI/UX & Styling", items: ["Tailwind CSS", "Responsive Design", "React Hooks", "Figma"] },
    { category: "Additional Skills", items: ["MVC Architecture", "API Testing", "Backend Debugging", "Code Optimization", "Authentication & Authorization", "RBAC", "Deployment", "Version Control (Git/GitHub)"] },
  ];

  return (
    <section id="about" className="py-20 bg-zinc-50 dark:bg-zinc-900">
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
            About Me
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-blue-600 mx-auto mt-4"
            variants={fadeIn('up', 'tween', 0.2, 1)}
          ></motion.div>
        </div>

        <motion.div className="mb-8 max-w-3xl mx-auto text-center" variants={fadeIn('up', 'tween', 0.2, 1)}>
          <p className="text-gray-600 dark:text-gray-300">
            Full-stack developer with 1+ year of experience building scalable MERN applications and
            RESTful APIs. Experienced in optimizing API performance, implementing secure authentication
            (JWT, RBAC), and deploying production systems. Skilled in backend engineering and frontend
            development with a strong problem-solving background.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            variants={fadeIn('right', 'tween', 0.3, 1)}
          >
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-md dark:bg-zinc-800/60 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-2">
                      <h4 className="font-semibold text-xl">{edu.institution}</h4>
                      <p className="text-gray-500 dark:text-gray-400">{edu.location}</p>
                      <div className="flex justify-between items-center mt-2">
                        <p className="font-medium">{edu.degree}</p>
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm px-3 py-1 rounded-full">{edu.period}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            variants={fadeIn('left', 'tween', 0.4, 1)}
          >
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Extra-Curricular Activities */}
        <motion.div 
          className="mt-16"
          variants={fadeIn('up', 'tween', 0.5, 1)}
        >
          <h3 className="text-2xl font-bold mb-6">Extra-Curricular Activities</h3>
          <Card className="border-none shadow-md dark:bg-zinc-800/60 backdrop-blur-sm">
            <CardContent className="p-6">
              <ul className="list-disc pl-5 space-y-2">
                <li>Technophile with a keen interest in emerging digital tools and creative technologies.</li>
                <li>Possess basic-level skills in video and graphic editing using Blender, CapCut, After Effects, and Photoshop.</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;