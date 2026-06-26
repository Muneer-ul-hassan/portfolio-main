import { tool } from 'ai';
import { z } from 'zod';

export const getResume = tool({
  description:
    'This tool show my resume.',
  parameters: z.object({ info: z.string().optional().describe('Optional info') }),
  execute: async () => {
    return "You can download my resume by clicking on the link above.";
  },
});
