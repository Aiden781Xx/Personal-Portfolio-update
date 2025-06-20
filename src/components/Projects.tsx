import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { fadeIn, staggerContainer } from '../lib/motion';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Restaurant Food App",
      period: "June 2025 - Present",
      description: "Backend with JWT auth, role-based, and REST APIs for orders, cart, and restaurant management.",
      details: "Deployed on Render with MongoDB Atlas and built using MVC architecture with secure practices.",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "MVC", "REST API"],
      image: "/assets/images/restaurant-app.jpg"
    },
    {
      title: "Social Media Analytics Dashboard",
      period: "May - June 2025",
      description: "Interactive dashboard to track and visualize user engagement metrics in real-time.",
      details: "Includes custom filters and Chart.js-powered graphs backed by Express.js APIs.",
      technologies: ["React.js", "Chart.js", "MongoDB", "Express.js", "Data Visualization"],
      image: "/assets/images/analytics-dashboard.jpg"
    },
    {
      title: "E-commerce Platform",
      period: "Dec – Feb 2025",
      description: "Full-stack e-commerce solution with product management, payment gateway, and admin dashboard.",
      details: "Supports authentication, order flow, and secure checkout using modern web stack.",
      technologies: ["React.js", "Node.js", "MongoDB", "Payment Gateway", "Authentication"],
      image: "assets/images/ecommerce-platform.jpg"
    },
    {
      title: "Task Management App",
      period: "Sep - 2024",
      description: "Real-time task collaboration tool with live updates, user roles, and team workspace features.",
      details: "Built using WebSockets for live sync and REST APIs for persistence.",
      technologies: ["React.js", "Node.js", "Socket.io", "WebSockets", "Real-time"],
      image: "assets/images/task-management.jpg"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-zinc-50 dark:bg-zinc-900">
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
            Projects
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-blue-600 mx-auto mt-4"
            variants={fadeIn('up', 'tween', 0.2, 1)}
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={fadeIn(
                index % 2 === 0 ? 'left' : 'right', 
                'tween', 
                0.2 + index * 0.1, 
                1
              )}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    title: string;
    period: string;
    description: string;
    details: string;
    technologies: string[];
    image: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="overflow-hidden border-none shadow-lg h-full dark:bg-zinc-800/60 backdrop-blur-sm">
      <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-zinc-800">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <span className="text-sm text-gray-500 dark:text-gray-400">{project.period}</span>
        </div>
        <CardDescription className="text-base mt-2">
          {project.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <p className="mb-4 text-gray-600 dark:text-gray-300">{project.details}</p>
        
        <div className="flex flex-wrap gap-2 mt-4 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <Badge 
              key={techIndex} 
              variant="secondary" 
              className="bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300"
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">View Details</Button>
          <Button size="sm">Live Demo</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;