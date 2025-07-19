
'use client';
import { useEffect, useState, useRef } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container } from "@tsparticles/engine";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);
  const [particleCount, setParticleCount] = useState(67);
  const containerRef = useRef<Container | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      containerRef.current = container;
    }
  };

  const handleClick = () => {
    // Increase particles on click
    setParticleCount(prev => prev + 20);
    
    // Clear any existing timeout/interval
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    // Start decreasing particles after 1 second
    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setParticleCount(prev => {
          if (prev <= 67) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return 67; // Return to default
          }
          return prev - 2; // Gradually decrease
        });
      }, 100); // Decrease every 100ms
    }, 1000);
  };

  if (!init) return null;

  return (
    <div 
      className="fixed top-0 left-0 z-0 w-full h-full cursor-pointer" 
      onClick={handleClick}
      style={{ backgroundColor: '#f7e6d5' }}
    >
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
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
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 194.89853095232286,
                links: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
              remove: {
                quantity: 2,
              },
            },
          },
          particles: {
            color: {
              value: "#000000",
            },
            links: {
              color: "#000000",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "out",
              },
              random: true,
              speed: 7,
              straight: false,
            },
            number: {
              density: {
                enable: false,
                area: 0,
              },
              value: particleCount,
            },
            opacity: {
              value: 0.5,
              animation: {
                enable: false,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
              },
            },
            shape: {
              type: "triangle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                sides: 5,
              },
            },
            size: {
              value: { min: 0.1, max: 3 },
              random: true,
              animation: {
                enable: false,
                speed: 40,
                minimumValue: 0.1,
                sync: false,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticleBackground;
