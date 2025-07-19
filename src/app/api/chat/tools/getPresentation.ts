import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Muneer ul Hassan. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
      "I'm Syed Muneer Ul Hassan, a developer and AI enthusiast from Pakistan with a background in Computer Science. I specialize in building agentic AI systems, full-stack web apps, and real-time automations. I'm passionate about AI, automation, Web3, and using technology to solve real-world problems."
    };
  },
});
