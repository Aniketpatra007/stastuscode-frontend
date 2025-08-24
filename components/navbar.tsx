"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun, Calendar } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import ThemeToggleButton from "./ui/theme-toggle-button";
import { useRouter } from "next/navigation";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const handlePractice = () => {
    router.push("/upload");
  };

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 top-0 left-0 sticky z-20 w-full">
      <div className=" flex h-16 items-center sm:justify-around justify-center mt-3 sm:mt-0 px-4 w-full flex-wrap sm:flex">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">M</span>
          </div>
          <span className="font-bold text-xl">MockMateAI</span>
        </Link>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            className="dark:hover:text-white dark:hover:bg-[#008b52]"
            onClick={handlePractice}
          >
            <Calendar className="h-4 w-4 mr-2 " />
            Start Practicing
          </Button>

          {/* <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button> */}
          <ThemeToggleButton />
        </div>
      </div>
    </nav>
  );
}
