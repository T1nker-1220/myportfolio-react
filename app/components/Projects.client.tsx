'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  { title: 'Project 1', image: '/project1.jpg', description: '...' },
  { title: 'Project 2', image: '/project2.jpg', description: '...' },
  { title: 'Project 3', image: '/project3.jpg', description: '...' },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">Projects</h2>
        <div className="relative h-[600px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="absolute top-0 left-0 w -full h-full flex items-center justify-center"
              style={{
                zIndex: index === activeProject ? 1 : -1,
                filter: index === activeProject ? 'blur(0)' : 'blur(10px)',
                transform: `translateX(${index * 100}%)`
              }}
              whileHover={{ scale: 1.1 }}
              onClick={() => setActiveProject(index)}
            >
              <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-lg" />
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-1/2 bg-black bg-opacity-50 rounded-b-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-lg">{project.description}</p>
              </motion.div>
            </motion.div>
          ))}
          <motion.button 
            className="absolute right-0 bottom-0 w-12 h-12 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition-colors"
            whileHover={{ scale: 1.1 }}
            onClick={() => setActiveProject((prev) => (prev + 1) % projects.length)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};