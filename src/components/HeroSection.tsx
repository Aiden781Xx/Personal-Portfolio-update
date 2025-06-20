import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { fadeIn, slideIn, staggerContainer } from '../lib/motion';

const HeroSection: React.FC = () => {
  return (
    <motion.section 
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-black to-zinc-900 text-white"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        >
          <source src="/assets/videos/tech-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay with animated tech gadget graphics */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-black/60"></div>
      
      {/* Floating tech elements */}
      <motion.div 
        className="absolute right-20 bottom-28 hidden lg:block"
        variants={fadeIn('up', 'tween', 0.4, 1)}
      >
        <div className="w-32 h-32 border border-blue-500/30 rounded-full flex items-center justify-center backdrop-blur-sm">
          <span className="text-blue-500 font-mono">{'<Code/>'}</span>
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute left-20 top-28 hidden lg:block"
        variants={fadeIn('down', 'tween', 0.6, 1)}
      >
        <div className="w-24 h-24 border border-green-500/30 rounded-full flex items-center justify-center backdrop-blur-sm">
          <span className="text-green-500 font-mono">{'{ }'}</span>
        </div>
      </motion.div>
      
      <div className="container z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            variants={slideIn('left', 'tween', 0.2, 1)}
          >
            Shivam Kumar Sharma
          </motion.h1>
          
          <motion.div 
            className="flex items-center space-x-3"
            variants={fadeIn('up', 'tween', 0.3, 1)}
          >
            <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
            <p className="text-xl md:text-2xl font-medium text-gray-200">Full Stack Developer</p>
            <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
          </motion.div>
          
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl"
            variants={fadeIn('up', 'tween', 0.4, 1)}
          >
            Specialized in MERN Stack Development with expertise in building scalable web applications
            and secure backend systems.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            variants={fadeIn('up', 'tween', 0.5, 1)}
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              View My Work
            </Button>
 <a href="/ShivamGLBajaj_781.pdf" download>
  <Button variant="outline" className="border-blue-600 text-blue-500 hover:bg-blue-600/10">
    Download Resume
  </Button>
</a>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        variants={fadeIn('up', 'tween', 0.7, 1)}
        animate={{ 
          y: [0, 10, 0],
          transition: { 
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop" 
          }
        }}
      >
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-400 mb-2">Scroll Down</p>
          <div className="w-5 h-9 border-2 border-gray-400 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gray-200 rounded-full animate-ping"></div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;