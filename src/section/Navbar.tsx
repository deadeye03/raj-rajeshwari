"use client"

import * as React from "react"
import Link from "next/link"
import { Search, User, Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

import { MenuItems } from "@/constant"
import Image from "next/image"

// Menu data


export default function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = React.useState(false)

    return (
        <header className="sticky top-0 z-50 w-full shadow-lg bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center px-4 md:px-8 ">
                {/* Logo */}
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <Image
                        src="/logo.webp"
                        alt="Logo"
                        width={150}
                        height={40}
                        className=" rounded-full"
                    />
                    {/* <span className="text-xl font-normal flex flex-col justify-center items-center">Raj <span className="text-sm font-bold -mt-1 block">Rajeswari</span></span> */}
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex md:flex-1">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {MenuItems.map((category) => (
                                <NavigationMenuItem key={category.title}>
                                    <NavigationMenuTrigger className="capitalize cursor-pointer">{category.title}</NavigationMenuTrigger>
                                    <NavigationMenuContent className="bg-white">
                                        <ul className="grid w-[400px]  md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                            {category.items.map((item) => (
                                                <ListItem className="hover:bg-gray-100" key={item.title} title={item.title} href={item.href} />
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Desktop Search and Profile */}
                <div className="hidden md:flex md:items-center md:space-x-4">
                    <div className="relative">
                        {isSearchOpen ? (
                            <div className="absolute right-0 top-0 flex items-center">
                                <Input
                                    type="search"
                                    placeholder="Search..."
                                    className="w-[15x] lg:w-[300px]"
                                    autoFocus
                                    onBlur={() => setIsSearchOpen(false)}
                                />
                            </div>
                        ) : (
                            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                                <Search className="h-5 w-5" />
                                <span className="sr-only">Search</span>
                            </Button>
                        )}
                    </div>
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="/profile">
                            <User className="h-5 w-5" />
                            <span className="sr-only">Profile</span>
                        </Link>
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="flex flex-1 items-center justify-end md:hidden">
                    <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)} className="mr-2">
                        <Search className="h-5 w-5" />
                        <span className="sr-only">Search</span>
                    </Button>

                    <Button variant="ghost" size="icon" asChild className="mr-2">
                        <Link href="/profile">
                            <User className="h-5 w-5" />
                            <span className="sr-only">Profile</span>
                        </Link>
                    </Button>

                    {/* Mobile Menu Trigger */}
                    <Sheet>
                        <SheetTrigger asChild className=" lg:hidden">
                            <Button variant="outline" size="icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-menu"
                                >
                                    <line x1="4" x2="20" y1="12" y2="12" />
                                    <line x1="4" x2="20" y1="6" y2="6" />
                                    <line x1="4" x2="20" y1="18" y2="18" />
                                </svg>
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-white z-50">
                            <div className="flex flex-col gap-4 mt-8">
                                {MenuItems.map((item) => (
                                    <div key={item.title} className="space-y-3">
                                        <h3 className="font-medium text-lg capitalize ml-2">{item.title}</h3>
                                        <div className="pl-4 space-y-2">
                                            {item.items.map((subItem) => (
                                                <Link
                                                    key={subItem.title}
                                                    href={subItem.href}
                                                    className="block text-muted-foreground hover:text-foreground hover:bg-gray-100"
                                                >
                                                    {subItem.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

            {/* Mobile Search Bar (when open) */}
            {isSearchOpen && (
                <div className="border-t p-2 md:hidden">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="w-full pl-9"
                            autoFocus
                            onBlur={() => setIsSearchOpen(false)}
                        />
                    </div>
                </div>
            )}
        </header>
    )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
    ({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            className,
                        )}
                        {...props}
                    >
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
                    </a>
                </NavigationMenuLink>
            </li>
        )
    },
)
ListItem.displayName = "ListItem"

