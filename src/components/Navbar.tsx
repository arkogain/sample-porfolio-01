import { FileUser, House, MonitorCheck, User } from "lucide-react";
import Link from "next/link";
import DarkMode from "./DarkMode";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <>
      <header className="fixed z-50 w-full border-b border-foreground/20 bg-background/10 shadow-sm backdrop-blur-sm">
        <div className="mx-auto flex max-w-screen-lg items-center justify-between px-6 py-4">
          <Link href="/">
            <div className="text-5xl font-bold text-fuchsia-700">AG.</div>
          </Link>

          <div className="hidden gap-4 sm:flex">
            <Link href="/" className="flex items-center gap-1 text-xl">
              <House size={20} />
              <span>Home</span>
            </Link>

            <Link href="/about" className="flex items-center gap-1 text-xl">
              <User size={20} />
              <span>About</span>
            </Link>

            <Link href="/skills" className="flex items-center gap-1 text-xl">
              <FileUser size={20} />
              <span>Resume</span>
            </Link>
            <Link href="/projects" className="flex items-center gap-1 text-xl">
              <MonitorCheck size={20} />
              <span>Projects</span>
            </Link>
          </div>

          <div className="hidden sm:flex">
            <DarkMode />
          </div>

          <div className="flex gap-3 sm:hidden">
            <DarkMode />

            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
