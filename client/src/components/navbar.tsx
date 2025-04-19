import { useState } from "react";
import { Menu, Search, Bell, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuLabel,
 DropdownMenuSeparator,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router";

function Navbar() {
 const [searchQuery, setSearchQuery] = useState("");
 const [isSearchOpen, setIsSearchOpen] = useState(false);

 const handleSearch = (e: React.FormEvent) => {
  e.preventDefault();
  console.log("Searching for:", searchQuery);
  // Implement search functionality here
 };

 return (
  <header className="sticky top-0 w-full  border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center items-center">
   <div className="container flex h-16 items-center">
    {/* Mobile Menu */}
    <Sheet>
     <SheetTrigger asChild>
      <Button variant="ghost" size="icon" className="md:hidden">
       <Menu className="h-5 w-5" />
       <span className="sr-only">Toggle menu</span>
      </Button>
     </SheetTrigger>
     <SheetContent side="left" className="w-[200px] sm:w-[200px]">
      <nav className="flex flex-col gap-4 mt-6 ml-5">
       <Link to="/home" className="text-lg font-medium">
        Home
       </Link>
       <Link to="/dashboard" className="text-lg font-medium">
        Dashboard
       </Link>
       <Link to="/projects" className="text-lg font-medium">
        Projects
       </Link>
       <Link to="/settings" className="text-lg font-medium">
        Settings
       </Link>
      </nav>
     </SheetContent>
    </Sheet>

    {/* Logo */}
    <div className="flex items-center gap-2 mr-4">
     <Link to="/" className="flex items-center space-x-2">
      <div className="bg-primary text-primary-foreground size-8 rounded-full flex items-center justify-center font-bold">
       L
      </div>
      <span className="hidden sm:inline-block font-bold text-xl">Logo</span>
     </Link>
    </div>

    {/* Desktop Navigation */}
    <nav className="hidden md:flex items-center gap-3 mx-6">
     <Link
      to="/"
      className="text-sm font-medium transition-colors hover:text-primary"
     >
      Home
     </Link>
     <Link
      to="/dashboard"
      className="text-sm font-medium transition-colors hover:text-primary"
     >
      Dashboard
     </Link>
     <Link
      to="/projects"
      className="text-sm font-medium transition-colors hover:text-primary"
     >
      Projects
     </Link>
     <Link
      to="/settings"
      className="text-sm font-medium transition-colors hover:text-primary"
     >
      Settings
     </Link>
    </nav>

    {/* Spacer to push search to center */}

    {/* Search - Desktop */}
    <div className="hidden md:flex flex-1 items-center justify-center px-2">
     <form onSubmit={handleSearch} className="w-full max-w-sm">
      <div className="relative">
       <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
       <Input
        type="search"
        placeholder="Search..."
        className="w-full pl-8 bg-background"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
       />
      </div>
     </form>
    </div>

    {/* Spacer to push notifications and profile to right */}
    <div className="hidden md:block flex-1"></div>

    {/* Search - Mobile */}
    <div className="flex md:hidden flex-1 items-center justify-end">
     {isSearchOpen ? (
      <div className="absolute inset-0 z-50 flex items-center px-4 bg-background">
       <form onSubmit={handleSearch} className="flex-1">
        <div className="relative">
         <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
         <Input
          type="search"
          placeholder="Search..."
          className="w-full pl-8 bg-background"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoFocus
         />
        </div>
       </form>
       <Button
        variant="ghost"
        size="icon"
        className="ml-2"
        onClick={() => setIsSearchOpen(false)}
       >
        <X className="h-5 w-5" />
        <span className="sr-only">Close search</span>
       </Button>
      </div>
     ) : (
      <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
       <Search className="h-5 w-5" />
       <span className="sr-only">Search</span>
      </Button>
     )}
    </div>

    {/* Notifications */}
    <DropdownMenu>
     <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="icon" className="relative">
       <Bell className="h-5 w-5" />
       <span className="sr-only">Notifications</span>
       <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-600"></span>
      </Button>
     </DropdownMenuTrigger>
     <DropdownMenuContent align="end" className="w-80">
      <DropdownMenuLabel>Notifications</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <div className="max-h-[300px] overflow-y-auto">
       {[1, 2, 3].map((i) => (
        <DropdownMenuItem key={i} className="cursor-pointer p-0">
         <div className="flex w-full items-start gap-2 p-2 hover:bg-accent">
          <Avatar className="h-9 w-9">
           <AvatarFallback>{`U${i}`}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
           <p className="text-sm font-medium leading-none">
            New notification {i}
           </p>
           <p className="text-xs text-muted-foreground">
            User {i} sent you a message
           </p>
           <p className="text-xs text-muted-foreground">2 min ago</p>
          </div>
         </div>
        </DropdownMenuItem>
       ))}
      </div>
      <DropdownMenuSeparator />
      <DropdownMenuItem className="cursor-pointer justify-center text-center">
       View all notifications
      </DropdownMenuItem>
     </DropdownMenuContent>
    </DropdownMenu>

    {/* Profile */}
    <div className="ml-2">
     <DropdownMenu>
      <DropdownMenuTrigger asChild>
       <Button variant="ghost" className="relative size-8 rounded-full">
        <Avatar className="size-8">
         <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Profile" />
         <AvatarFallback>JD</AvatarFallback>
        </Avatar>
       </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
       <DropdownMenuLabel className="font-normal">
        <div className="flex flex-col space-y-1">
         <p className="text-sm font-medium leading-none">John Doe</p>
         <p className="text-xs leading-none text-muted-foreground">
          john.doe@example.com
         </p>
        </div>
       </DropdownMenuLabel>
       <DropdownMenuSeparator />
       <DropdownMenuItem>Profile</DropdownMenuItem>
       <DropdownMenuItem>Account settings</DropdownMenuItem>
       <DropdownMenuItem>Dashboard</DropdownMenuItem>
       <DropdownMenuSeparator />
       <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
     </DropdownMenu>
    </div>
   </div>
  </header>
 );
}

export default Navbar;
