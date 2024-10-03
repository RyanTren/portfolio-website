import { ModeToggle } from '@/components/ModeToggle';
import '@/styles/globals.css';

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

export function NavBar(){
    return (
        <div className="flex justify-between items-center space-x-4 py-4 ">
            <div className="text-2xl font-thin"><ModeToggle /></div>
            <div className="flex space-x-4">
                {/* <a href="/">Home</a>
                <a href="/resume">Resume</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a> */}

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                        <NavigationMenuTrigger></NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Home</NavigationMenuLink>
                        </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    )
}