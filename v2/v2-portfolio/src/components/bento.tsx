import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconBrandGithub 
} from "@tabler/icons-react";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black shadow-[0_8px_16px_rgb(0_0_0/0.4)]"></div>
);
const items = [
  {
    title: "mindjourney",
    description: "Web application designed to offer AI-driven mental health support and resources. It leverages modern web development technologies and cloud services to provide users with personalized experiences.",
    header: <img src="https://th.bing.com/th/id/R.0ef007f011e0772fd137e38b309bcec7?rik=HkzvY4a8peZAsA&pid=ImgRaw&r=0" alt="MindJourney" className="w-auto h-40 rounded-xl" />, // Add image
    className: "md:col-span-2",
    icon: <IconBrandGithub className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/RyanTren/mindjourney", // Add link
  },
  {
    title: "flasher.io",
    description: "A flashcard SaaS with Next.js, Clerk, Firebase, OpenAI, and Stripe.",
    header: <img src="https://i.giphy.com/b29IZK1dP4aWs.webp" alt="Flasher.io" className="w-30 h-35 rounded-xl" />, // Add image
    className: "md:col-span-1",
    icon: <IconBrandGithub className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/RyanTren/AI-Flashcards-Stripe", // Add link
  },
  {
    title: "AI Customer Support",
    description: "an AI-powered customer support chatbot using Next.js and the OpenAI API.",
    header: <img src="https://camo.githubusercontent.com/0391f7b1ff92b1c865096b4488fbadfb38cd06e4c7fcc813b05eef62c8d980e0/68747470733a2f2f63646e2e686173686e6f64652e636f6d2f7265732f686173686e6f64652f696d6167652f75706c6f61642f76313539353333313034353738382f3744546335414b61772e6769663f6175746f3d666f726d61742c636f6d7072657373266769662d713d3630" alt="AI Customer Support" className="w-full h-auto rounded-xl" />, // Add image
    className: "md:col-span-1",
    icon: <IconBrandGithub className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/RyanTren/AI-Customer-Support", // Add link
  },
  {
    title: "Serenity",
    description:
      "A music player web application that allows users to create and manage playlists containing their friends' favorite songs. The application will utilize JavaScript and TypeScript for frontend development, with ReactJS/TS for building the user interface. One of my first ReactJS projects!",
    header: <img src="https://camo.githubusercontent.com/b6487bfa79439d91df4f2221526383749c13f7540f3c3c4380a66e29511fdad0/68747470733a2f2f6d656c6d6167617a696e652e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f30382f316f57352d3365704d5832424e675f6467625571586a772e676966" alt="Serenity" className="w-full h-40 rounded-xl" />, // Add image
    className: "md:col-span-2",
    icon: <IconBrandGithub className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/RyanTren/serenity.com", // Add link
  },
];

