import { tool } from 'ai';
import { z } from 'zod';

export const getSkills = tool({
  description:
    'This tool show a list of my skills.',
  parameters: z.object({ info: z.string().optional().describe('Optional info') }),
  execute: async () => {
    return "You can see all my skills above.";
  },
});
