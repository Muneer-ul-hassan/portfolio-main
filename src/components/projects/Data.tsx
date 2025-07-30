import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
 {
  title: 'SmartCam Answer Bot',
  description:
    'SmartCam Answer Bot is an interactive AI assistant that uses a live camera feed to detect and identify objects in real-time. Users can ask, either by voice or via a GUI button, "What do you see?" and the assistant will respond with a spoken description of the scene, including object types and counts. This project demonstrates a practical implementation of visual question answering (VQA) using computer vision and speech synthesis.',
  techStack: [
    'Python 3.x',
    'OpenCV',
    'Ultralytics YOLOv8',
    'pyttsx3',
    'Tkinter',
    'threading'
  ],
  date: '2025',
  links: [
    {
      name: 'GitHub',
      url: 'https://github.com/Muneer-ul-hassan/VisionSphere_Projects/tree/main/smartcam-answer-bot',
    },
  ],
  images: [
    {
      src: '/smartcam1.png', 
      alt: 'SmartCam Answer Bot object detection',
    },
    {
      src: '/smartcam2.png', 
      alt: 'SmartCam Answer Bot live feed',
    },
  
  ],
},
  {
  title: 'VocalGenAI',
  description:
    'VocalGenAI is a web-based Text-to-Speech (TTS) application that uses the Coqui TTS library. It allows users to input text, choose from a variety of voices and languages, and generate speech audio. Additionally, it displays the audio\'s waveform and provides detailed data about the speech.',
  techStack: [
    'Coqui TTS',
    'Gradio',
    'Python',
    'NumPy',
    'Matplotlib',
    'Scipy',
    'HTML/CSS/JavaScript',
    'Waveform Generation (via Matplotlib)'
  ],
  date: 'Nov 2024',
  links: [
    {
      name: 'GitHub',
      url: 'https://github.com/Muneer-ul-hassan/-VocalGenAI',
    }
  ],
  images: [
    {
      src: '/VocalGenAi.png', 
      alt: 'VocalGenAI interface',
    },
  ],
},
  {
  title: 'Cat vs Dog Classifier',
  description:
    'This project involves building and deploying a deep learning image classifier using PyTorch. The classifier distinguishes between cats and dogs using a fine-tuned ResNet18 model. The project includes dataset preprocessing, model training, converting the model to TorchScript, and compiling it for deployment on Qualcomm-powered edge devices. It also includes profiling model performance (inference time, memory usage) and simulating on-device inference.',
  techStack: [
    'PyTorch',
    'Computer Vision',
    'Edge AI',
    'Model Optimization',
    'Deep Learning',
    'TorchScript',
    'Qualcomm AI Hub'
  ],
  date: 'Apr 2025',
  links: [
    {
      name: 'GitHub',
      url: 'https://github.com/Muneer-ul-hassan/cat-vs-dog-edge-ai',
    }
  ],
  images: [
    {
      src: '/classification.png', 
      alt: 'Cat vs Dog Classifier',
    }
  ],
},
  {
  title: 'Robotics & Controls',
  description:
    'This project showcases work completed during the Robotics & Controls Engineering Virtual Internship with Johnson & Johnson MedTech on Forage. As part of this job simulation, the intern role focused on diagnosing actuator and sensor issues, simulating system improvements using Python, proposing targeted design modifications, and delivering a professional engineering proposal with actionable insights.',
  techStack: [
    'Python',
    'Matplotlib',
    'NumPy',
    'Control Systems',
    'Robotics Simulation',
    'Engineering Design Documentation',
    'Problem Solving & Root Cause Analysis'
  ],
  date: 'May 2025',
  links: [
    {
      name: 'GitHub Repository',
      url: 'https://github.com/Muneer-ul-hassan/johnson-johnson-robotics-simulation',
    }
  ],
  images: [
    {
      src: '/output.jpeg', // Replace with actual image URL
      alt: 'Robotics Simulation Output',
    },
    {
      src: '/output1.jpeg', // Replace with actual image URL
      alt: 'Robotics Simulation Output 1',
    },
    {
      src: '/output2.jpeg', // Replace with actual image URL
      alt: 'Robotics Simulation Output 2',
    }

  ],
},
  {
  title: 'Spam-Mail Classifier',
  description:
    'The Spam-Mail Classifier is a self-learning project that involves building a spam email classifier using machine learning techniques. It was the first project aimed at learning about data science and machine learning. The project uses a dataset of emails and classifies them into spam or non-spam categories.',
  techStack: [
    'Machine Learning',
    'Python',
    'Google Colab',
    'Pandas',
    'Scikit-Learn'
  ],
  date: '2023',
  links: [
    {
      name: 'GitHub Repository',
      url: 'https://github.com/Muneer-ul-hassan/spam-mail',
    }
  ],
},
 {
  title: 'Mobile Buddy',
  description:
    'Mobile Buddy is an e-commerce platform where users can buy, sell, repair, and get support for mobile devices.',
  techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express'],
  date: '2025',
  images: [
    {
      src: '/mobilebuddy1.png', 
      alt: 'Mobile Buddy homepage',
    },
    {
      src: '/mobilebuddy2.png', 
      alt: 'Mobile Buddy phone details',
    },
    {
      src: '/mobilebuddy3.png', 
      alt: 'Mobile Buddy repair service',
    }
  ],
},
  {
  title: 'Wendy’s Menu',
  description:
    'Explore the full Wendy’s menu with updated prices, including breakfast options, value meals, burgers, salads, and exclusive deals. Enjoy a variety of mouth-watering options from our signature Baconator to delicious Frosty desserts, available at affordable prices.',
  techStack: ['WordPress', 'PHP', 'HTML', 'CSS', 'JavaScript', 'WooCommerce'],
  date: '2025',
  links: [
    {
      name: 'Home',
      url: 'Wendymenue.com', 
    },
  ],
  images: [
    {
      src: '/wendys.png', // Replace with actual image URL
      alt: 'Wendy’s Menu',
    },
    {
      src: '/wendys1.png', // Replace with actual image URL
      alt: 'Wendy’s Breakfast Menu',
    },
    {
      src: '/wendys2.png', // Replace with actual image URL
      alt: 'Wendy’s Burgers',
    },
    {
      src: '/wendys3.png', // Replace with actual image URL
      alt: 'Wendy’s Fries & Sides',
    },
    {
      src: '/wendys4.png', // Replace with actual image URL
      alt: 'Wendy’s Frosty & Desserts',
    }
  ],
},
  
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
                <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
                >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'Startup AI Project',
    title: 'SmartCam Answer Bot',
    src: '/smartcam-preview.png',
    content: <ProjectContent project={{ title: 'SmartCam Answer Bot' }} />,
  },
  {
    category: 'AI Tool',
    title: 'VocalGenAI',
    src: '/vocalgen-preview.png',
    content: <ProjectContent project={{ title: 'VocalGenAI' }} />,
  },
  {
    category: 'Machine Learning Project',
    title: 'Cat vs Dog Classifier',
    src: '/Cat-Dog-preview.png',
    content: <ProjectContent project={{ title: 'Cat vs Dog Classifier' }} />,
  },
  {
    category: 'Robotics & Controls',
    title: 'Robotics & Controls',
    src: '/robotic-preview.png',
    content: <ProjectContent project={{ title: 'Robotics & Controls' }} />,
  },
  {
    category: 'Data Science Project',
    title: 'Spam-Mail Classifier',
    src: '/Spam-Mail-preview.png',
    content: <ProjectContent project={{ title: 'Spam-Mail Classifier' }} />,
  },
  {
    category: 'Wordpress Project',
    title: 'Mobile Buddy',
    src: '/mobilebuddy-preview.png',
    content: <ProjectContent project={{ title: 'Mobile Buddy' }} />,
  },
  {
    category: 'Wordpress Project',
    title: 'Wendy’s Menu ',
    src: '/Wendy-preview.png',
    content: <ProjectContent project={{ title: 'Wendy’s Menu' }} />,
  },
  
];
