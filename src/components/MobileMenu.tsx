import { FileUser, House, MonitorCheck, User } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const MobileMenu = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger className="transition-all duration-500 ease-in-out">
          Open
        </SheetTrigger>

        <SheetContent className="">
          <SheetTitle key={"Menu"}>Menu</SheetTitle>

          <Link href="/" className="flex items-center gap-1 text-xl">
            <House size={20} />
            <span>Home</span>
          </Link>

          <SheetClose asChild>
            <Link href="/about" className="flex items-center gap-1 text-xl">
              <User size={20} />
              <span>About</span>
            </Link>
          </SheetClose>

          <Link href="/skills" className="flex items-center gap-1 text-xl">
            <FileUser size={20} />
            <span>Resume</span>
          </Link>
          <Link href="/projects" className="flex items-center gap-1 text-xl">
            <MonitorCheck size={20} />
            <span>Projects</span>
          </Link>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileMenu;
