import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description:
    'This tool show a my contact informations.',
  parameters: z.object({ info: z.string().optional().describe('Optional info') }),
  execute: async () => {
    return "Here is my contact informations above, Feel free to contact me I will be happy to answer you 😉";
  },
});
