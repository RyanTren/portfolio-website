import { ModeToggle } from '@/components/ModeToggle';
import '@/styles/globals.css';

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export function NavBar() {
    return (
        <div className="relative z-999 flex justify-between items-center space-x-4 py-4">
            <div className="flex space-x-4">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>open me</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="row-span-3 flex flex-col gap-1">
                                    <NavigationMenuLink asChild>
                                        <a
                                            style={{ width: "16rem" }}
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-transparent hover:bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:w-70 transition-all duration-300"
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
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-transparent hover:bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:w-64 transition-all duration-300"
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
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-transparent hover:bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:w-64 transition-all duration-300"
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
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-transparent hover:bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:w-64 transition-all duration-300"
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

            {/* ModeToggle positioned to the far right */}
            <div className="ml-auto text-2xl font-thin">
                <ModeToggle />
            </div>
        </div>
    )
}
