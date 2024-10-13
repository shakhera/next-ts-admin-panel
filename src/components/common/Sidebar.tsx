import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu, Moon, Phone, Search } from "lucide-react";
import { GrDashboard } from "react-icons/gr";
import { FC } from "react";
import { Separator } from "@/components/ui/separator";

const Sidebar: FC = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <>
      <header className="min-h-screen dark:border-gray-800 dark:bg-gray-950">
        <div className="">
          <Command className="hidden lg:block dark:bg-gray-900 p-4 rounded-lg shadow-lg">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList className="min-h-screen overflow-y-auto">
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Dashboard Actions">
                <CommandItem>View Dashboard</CommandItem>
                <CommandItem>Manage Users</CommandItem>
                <CommandItem>Generate Reports</CommandItem>
                <CommandItem>View Analytics</CommandItem>
              </CommandGroup>
              <CommandSeparator />

              <CommandGroup heading="Quick Tools">
                <CommandItem>Search Users</CommandItem>
                <CommandItem>Create New Invoice</CommandItem>
                <CommandItem>Task Manager</CommandItem>
              </CommandGroup>

              <CommandSeparator />

              <CommandGroup heading="Admin Settings">
                <CommandItem>Profile Settings</CommandItem>
                <CommandItem>Billing Information</CommandItem>
                <CommandItem>System Preferences</CommandItem>
                <CommandItem>Access Control</CommandItem>
              </CommandGroup>

              <CommandSeparator />

              <CommandGroup heading="Utilities">
                <CommandItem>Calculator</CommandItem>
                <CommandItem>Search Emoji</CommandItem>
                <CommandItem>Toggle Dark Mode</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>

          <div className="flex items-center gap-4 lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full lg:hidden"
                >
                  <Menu className="h-5 w-5 text-black dark:text-gray-400" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="left" className="w-full h-full lg:hidden">
                <div className="grid gap-4 p-4">
                  <Command className="w-full  dark:bg-gray-900 p-4 rounded-lg shadow-lg">
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList className="min-h-screen overflow-y-auto">
                      <CommandEmpty>No results found.</CommandEmpty>
                      <CommandGroup heading="Dashboard Actions">
                        <CommandItem>View Dashboard</CommandItem>
                        <CommandItem>Manage Users</CommandItem>
                        <CommandItem>Generate Reports</CommandItem>
                        <CommandItem>View Analytics</CommandItem>
                      </CommandGroup>
                      <CommandSeparator />

                      <CommandGroup heading="Quick Tools">
                        <CommandItem>Search Users</CommandItem>
                        <CommandItem>Create New Invoice</CommandItem>
                        <CommandItem>Task Manager</CommandItem>
                      </CommandGroup>

                      <CommandSeparator />

                      <CommandGroup heading="Admin Settings">
                        <CommandItem>Profile Settings</CommandItem>
                        <CommandItem>Billing Information</CommandItem>
                        <CommandItem>System Preferences</CommandItem>
                        <CommandItem>Access Control</CommandItem>
                      </CommandGroup>

                      <CommandSeparator />

                      <CommandGroup heading="Utilities">
                        <CommandItem>Calculator</CommandItem>
                        <CommandItem>Search Emoji</CommandItem>
                        <CommandItem>Toggle Dark Mode</CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};
export default Sidebar;
