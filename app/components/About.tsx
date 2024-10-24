'use client';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const About = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-[url('/abstract-bg.jpg')] bg-cover bg-center"
        style={{ scale }}
      />
      <div className="container mx-auto px-4 z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg mb-8"
        >
          I am an aspiring web designer with a passion for creating visually appealing and user-friendly websites. With a solid understanding of HTML and CSS, I'm excited to explore the world of web design further.
        </motion.p>
        <div className="flex justify-center space-x-4">
          {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'].map((skill) => (
            <motion.div
              key={skill}
              className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-lg font-bold"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.8 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};