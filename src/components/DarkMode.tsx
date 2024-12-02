"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const DarkMode = () => {
  const { theme, setTheme } = useTheme();

  const darkToggleFn = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      <button className="relative flex items-center" onClick={darkToggleFn}>
        <Moon
          size={24}
          className="rotate-0 scale-100 transition-all duration-500 ease-in-out dark:rotate-90 dark:scale-0"
        />
        <Sun
          size={24}
          className="absolute rotate-90 scale-0 transition-all duration-500 ease-in-out dark:-rotate-0 dark:scale-100"
        />
      </button>
    </>
  );
};

export default DarkMode;
