import { PinContainer } from "./ui/3d-pin";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function AnimatedPinCard() {
  const handleClick = () => {
    console.log("Contact Me Pin Clicked");
    window.location.href = "https://linkedin.com/in/ryantren";
  };

  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="linkedin.com/in/ryantren"
        href="https://linkedin.com/in/ryantren"
        
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base  text-black dark:text-white">
            Connect with me on <LinkedInLogoIcon className="inline-block mr-2" />
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              I will reply to any queries within 24 hours.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 dark:from-red-500 dark:via-orange-400 dark:to-yellow-300" />
        </div>
      </PinContainer>
    </div>
  );
}