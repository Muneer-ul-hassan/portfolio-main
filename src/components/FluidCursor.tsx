'use client';
import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Container } from '@tsparticles/engine';

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container) => {
    console.log(container);
  };

  if (!init) return null;

  return (
    <div className="fixed top-0 left-0 z-0 w-full h-full">
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 120,
          interactivity: {
            detectOn: 'canvas',
            events: {
              onClick: {
                enable: true,
                mode: 'repulse',
              },
              onHover: {
                enable: true,
                mode: 'grab',
              },
              resize: {
                delay: 0,
              },
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
                distance: 150,
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
              value: '#000000',
            },
            links: {
              color: '#000000',
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 7,
              direction: 'none',
              random: true,
              straight: false,
              outModes: {
                default: 'out',
              },
              attract: {
                enable: false,
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
            },
            number: {
              density: {
                enable: false, // Disable density area (it’s no longer valid)
                   // Set the number of particles directly
              },
              value: 150,      // This specifies how many particles to show
            },
            opacity: {
              value: 0.5,
           
              animation: {
                enable: false,
                speed: 1,
              
                sync: false,
              },
            },
            shape: {
              type: 'triangle',
              
              
            },
            size: {
              value: 3,
        
              animation: {
                enable: false,
                speed: 40,
              
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
