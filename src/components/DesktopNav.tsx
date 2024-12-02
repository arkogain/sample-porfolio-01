"use client";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { Link, House, User, FileUser, MonitorCheck } from "lucide-react";
import DarkMode from "./DarkMode";

const DesktopNav = () => {
  return (
    <>
      <header className="border-b fixed w-full">
        <div className="flex justify-between items-center container max-w-screen-lg mx-auto px-6 py-3 ">
          <div className="">
            <Link href="/">
              <div className="text-5xl text-fuchsia-700 font-bold">AG.</div>
            </Link>
          </div>
          <div className="">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <Link href="/" className="flex items-center gap-1 text-xl">
                      <span>
                        <House size={20} />
                      </span>
                      <span>Home</span>
                    </Link>
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <Link
                      href="/about"
                      className="flex items-center gap-1 text-xl"
                    >
                      <span>
                        <User size={20} />
                      </span>
                      <span>About</span>
                    </Link>
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex items-center gap-1 text-xl">
                    <span>
                      <FileUser size={20} />
                    </span>
                    <span>Resume</span>
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex items-center gap-1 text-xl">
                    <span>
                      <MonitorCheck size={20} />
                    </span>
                    <span>Project</span>
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="">
            <DarkMode />
          </div>
        </div>
      </header>
    </>
  );
};

export default DesktopNav;
