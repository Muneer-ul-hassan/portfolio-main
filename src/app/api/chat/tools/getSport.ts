
import { tool } from "ai";
import { z } from "zod";


export const getSports = tool({
  description:
    "This tool will show some photos of Muneer doing sports",
  parameters: z.object({ info: z.string().optional().describe('Optional info') }),
  execute: async () => {
    return "Here my best pictures of me doing sports!";
  },
});