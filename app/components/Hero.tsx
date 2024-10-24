'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";

const Hero = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const skills = ['Web Developer', 'Web Designer', 'Image Editor', 'Image Designer', 'Content Creator'];
  const controls = useAnimation();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-500">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="text-center text-white z-10">
        <motion.h1 
          className="text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          John Nathaniel Marquez
        </motion.h1>
        <div className="text-4xl font-light h-16 overflow-hidden">
          <motion.div 
            className="transition-transform duration-500 ease-in-out"
            animate={{ y: `-${currentSkill * 4}rem` }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="h-16 flex items-center justify-center">{skill}</div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;