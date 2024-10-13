import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { Moon, Phone, Search } from "lucide-react";
import { FC } from "react";
import { PiGraph } from "react-icons/pi";

const Navbar: FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <PiGraph className="h-6 w-6" />
          <span className="uppercase font-mono">AdminSight</span>
        </Link>

        <div>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Search className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="sr-only">Search</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[300px]">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="pl-8 w-full"
                  />
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="hidden items-center gap-2 text-sm font-medium md:flex">
              <Phone className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">
                123-456-7890
              </span>
            </div>

            <Toggle aria-label="Toggle dark mode" className="rounded-full">
              <Moon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </Toggle>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
