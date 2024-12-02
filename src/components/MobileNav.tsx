import { FileUser, House, MenuSquare, MonitorCheck, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";

const MobileNav = () => {
  return (
    <>
      <div className="md:hidden sticky top-0 border-b w-full h-14">
        <Sheet>
          <SheetTrigger className="flex justify-end w-full items-center h-14">
            {" "}
            <MenuSquare />{" "}
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            <Link href="/" className="flex items-center gap-1 text-xl">
              <span>
                <House size={20} />
              </span>
              <span>Home</span>
            </Link>

            <Link href="/about" className="flex items-center gap-1 text-xl">
              <span>
                <User size={20} />
              </span>
              <span>About</span>
            </Link>
            <Link href="/skills" className="flex items-center gap-1 text-xl">
              <span>
                <FileUser size={20} />
              </span>
              <span>Resume</span>
            </Link>
            <Link href="/projects" className="flex items-center gap-1 text-xl">
              <span>
                <MonitorCheck size={20} />
              </span>
              <span>Projects</span>
            </Link>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default MobileNav;
