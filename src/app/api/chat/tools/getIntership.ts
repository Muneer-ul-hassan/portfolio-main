import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of what kind of internship I'm looking for, plus my contact info and how to reach me. Use this tool when the user asks about my internship search or how to contact me for opportunities.",
  parameters: z.object({ info: z.string().optional().describe('Optional info') }),
  execute: async () => {
    return `Here’s what I’m looking for 👇

- 📅 **Duration**: 6-month internship starting **September 2025**
- 🌍 **Location**: Preferably **remote** or **Germany**, **Ireland**, **Netherlands**, or **UAE**
- 🧑‍💻 **Focus**: AI/ML engineering, agentic AI systems, real-time automation, full-stack development
- 🛠️ **Stack**: Python, Django, JavaScript, GPT-4, LangChain, Groq, Coqui TTS, React, Tailwind CSS
- 💼 **Visa**: I’m based in Pakistan 🇵🇰 — may need **visa sponsorship** depending on location
- ✅ **What I bring**: Experience building agentic AI apps, Google My Business automation tools, robotics simulations (Johnson & Johnson internship), and hackathon projects using Groq & LLaMA
- 🔥 I build fast, think creatively, and turn chaos into working code

📬 **Contact me** via:
- Email: muneerulhassan404@gmail.com
- LinkedIn: [linkedin.com/in/Muneer-ul-hassan](https://www.linkedin.com/in/muneer-ul-hassan/)
- GitHub: [github.com/Muneer-ul-hassan](https://github.com/Muneer-ul-hassan)

Let's build cool shit together ✌️
    `;
  },
});
