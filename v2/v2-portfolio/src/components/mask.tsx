import { MaskContainer } from "@/components/ui/svg-mask-effect";

export function SVGMaskEffect() {
  return (
    <div className="h-full w-100vw flex items-center justify-center overflow-hidden">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-neutral-700 dark:text-neutral-400 text-center text-4xl font-thin">
            I’m currently a SWE Intern at Aayats and conducting AI Research at KSU on Emotional AI. 
            Previously as a SWE Fellow at Headstarter, I led a team of engineers, taking projects from design to deployment while learning Agile and CI/CD practices. 
            With this role, I have built and optimized 5+ apps and APIs using technologies like Next.js, OpenAI, and Stripe API. 
            At Outlier, I’ve improved AI-generated code across multiple programming languages, increasing output quality by 20%. 
            I’m skilled in Python, Java, Swift, and cloud infrastructure like Amazon EC2. 
            I’m always looking to expand my knowledge and contribute to innovative projects in AI and software development.          
          </p>
        }
        className="h-[50rem] w-100vw rounded-md dark:bg-transparent bg-transparent"
      >
        <p className="font-thin">
        I’m currently a <span className="text-blue-500 ">SWE Intern at Aayats</span> and conducting <span className="text-yellow-500">AI Research at KSU</span> on Emotional AI. 
        Previously as a SWE Fellow at Headstarter, I led a team of engineers, taking projects from design to deployment while learning <span className="text-green-300">Agile and CI/CD practices</span>. 
        With this role, I have built and optimized <span className="text-red-400">5+ apps and APIs</span> using technologies like <span className="text-purple-400">Next.js, OpenAI, and Stripe API</span>. 
        At Outlier, I’ve improved AI-generated code across multiple programming languages, increasing output quality by 20%. 
        I’m skilled in <span className="text-blue-300">Python</span>, <span className="text-orange-500">Java</span>, <span className="text-red-500">Swift</span>, and <span className="text-pink-500">cloud infrastructure like Amazon EC2</span>. 
        I’m always looking to expand my knowledge and contribute to innovative projects in AI and software development.
        </p>
      </MaskContainer>
    </div>
  );
}
