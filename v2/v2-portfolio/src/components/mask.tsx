import { MaskContainer } from "@/components/ui/svg-mask-effect";

export function SVGMaskEffect() {
  return (
    <div className="h-full w-100vw flex items-center justify-center overflow-hidden">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-neutral-700 dark:text-neutral-400 text-center text-4xl font-bold">
            hover your mouse to reveal top seceret, breaking, edward snowden type beat, information on me...
          </p>
        }
        className="h-[50rem] w-100vw rounded-md dark:bg-transparent bg-transparent"
      >
        I’m currently a <span className="text-blue-500">SWE Intern at Aayats</span> and conducting <span className="text-yellow-500">AI Research at KSU</span> on Emotional AI. 
        Previously as a SWE Fellow at Headstarter, I led a team of engineers, taking projects from design to deployment while learning <span className="text-green-300">Agile and CI/CD practices</span>. 
        With this role, I have built and optimized <span className="text-purple-400">5+ apps and APIs</span> using technologies like <span className="text-green-400">Next.js, OpenAI, and Stripe API</span>. 
        At Outlier, I’ve improved AI-generated code across multiple programming languages, increasing output quality by 20%. 
        I’m skilled in <span className="text-green-500">Python, Java, Swift, and cloud infrastructure like Amazon EC2</span>. 
        I’m always looking to expand my knowledge and contribute to innovative projects in AI and software development.
      </MaskContainer>
    </div>
  );
}
