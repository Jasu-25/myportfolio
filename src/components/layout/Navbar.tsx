import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navLinks, personalInfo } from "@/data";
import { ThemeToggle } from "../ThemeToggle";
export function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const closeSheet = () => setIsSheetOpen(false);
  return (
    <header className="sticky top-0 z-50 w-full p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 rounded-full bg-background/80 backdrop-blur-lg border shadow-sm">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold font-display text-foreground">
              {personalInfo.name}
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 rounded-full text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <ThemeToggle />
          </nav>
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full max-w-xs bg-background/95 backdrop-blur-lg p-0"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                     <Link to="/" className="flex items-center space-x-2" onClick={closeSheet}>
                        <span className="text-xl font-bold font-display text-foreground">
                          {personalInfo.name}
                        </span>
                      </Link>
                      <SheetClose asChild>
                        <Button variant="ghost" size="icon">
                          <X className="h-6 w-6" />
                          <span className="sr-only">Close menu</span>
                        </Button>
                      </SheetClose>
                  </div>
                  <nav className="flex-1 flex flex-col p-4 space-y-2">
                    {navLinks.map((link) => (
                      <NavLink
                        key={link.href}
                        to={link.href}
                        onClick={closeSheet}
                        className={({ isActive }) =>
                          cn(
                            "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                            isActive
                              ? "bg-accent text-accent-foreground"
                              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                          )
                        }
                      >
                        <div className="flex items-center gap-3">
                          <link.icon className="h-5 w-5" />
                          {link.label}
                        </div>
                      </NavLink>
                    ))}
                  </nav>
                  <div className="p-4 border-t">
                    <ThemeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}