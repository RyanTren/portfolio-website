import { useEffect, useState } from 'react';
import { ModeToggle } from '@/components/ModeToggle';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import '@/styles/globals.css';

export function NavBar() {
  const [theme, setTheme] = useState('light');

  // Load the theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme !== theme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, [theme]);

  // Toggle theme between light and dark
  const handleToggleClick = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center space-x-4 py-4">
      <div className="flex space-x-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>open me</NavigationMenuTrigger>
              <NavigationMenuContent className="z-999">
                <ul className="z-999 row-span-3 flex flex-col gap-1">
                  <NavigationMenuLink asChild>
                    <a
                      style={{ width: "16rem" }}
                      className="sticky z-999 flex h-full w-full select-none flex-col justify-end rounded-md bg-transparent hover:bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:w-70 transition-all duration-300"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        🏠 home
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        get to know me
                      </p>
                    </a>
                  </NavigationMenuLink>

                  <NavigationMenuLink asChild>
                    <a
                      className="sticky z-999 flex h-full w-full select-none flex-col justify-end rounded-md bg-transparent hover:bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:w-64 transition-all duration-300"
                      href="/resume"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        🗂️ resume
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        see what i've been up to
                      </p>
                    </a>
                  </NavigationMenuLink>

                  <NavigationMenuLink asChild>
                    <a
                      className="sticky z-999 flex h-full w-full select-none flex-col justify-end rounded-md bg-transparent hover:bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:w-64 transition-all duration-300"
                      href="/projects"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        🚧 projects
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        some stuff i've built over the years
                      </p>
                    </a>
                  </NavigationMenuLink>

                  <NavigationMenuLink asChild>
                    <a
                      className="z-999 flex h-full w-full select-none flex-col justify-end rounded-md bg-transparent hover:bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:w-64 transition-all duration-300"
                      href="/contact"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        📲 contact
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        reach out to me
                      </p>
                    </a>
                  </NavigationMenuLink>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="sticky ml-auto text-2xl font-thin">
        {/* <button id="theme-toggle" onClick={handleToggleClick}>
          {theme === 'dark' ? (
            <svg className="icon-moon lucide lucide-moon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
          ) : (
            <svg className="icon-sun lucide lucide-sun" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
          )}
        </button> */}
        <ModeToggle />
      </div>
    </div>
  );
}
