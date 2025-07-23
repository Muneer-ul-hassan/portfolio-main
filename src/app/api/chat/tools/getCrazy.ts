
import { tool } from "ai";
import { z } from "zod";


export const getCrazy = tool({
  description:
    "This tool will the craziest thing I've ever done. use it when the user ask someting like : 'What the craziest thing you've ever done?'",
  parameters: z.object({}),
  execute: async () => {
    return "Here's a photo of me at Lake Saif-ul-Malook — a stunning alpine lake in the mountains of northern Pakistan. We went without a guide, and the ride up was full of bumps, turns, and wild views. I was in a half-sleeve shirt, soaking in the fresh air and sunlight surrounded by towering peaks and turquoise water. It was peaceful, surreal, and one of the most spontaneous things I’ve ever done.";
  },
});