'use client'
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className="relative w-full flex items-center justify-center">
            <div
                className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", "top-2", className)}
            >
                <Menu setActive={setActive}>

                    {/* Need to fix it */}
                    <Link href="/">
                        <MenuItem setActive={setActive} active={active} item="Home"/>
                    </Link>
                                            
                    <MenuItem setActive={setActive} active={active} item="Our Courses">
                        <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                            <ProductItem
                                title="All Courses"
                                href={"/courses"}
                                src="https://assets.aceternity.com/demos/algochurn.webp"
                                description="Explore a range of music courses for all skill levels."
                            />
                            <ProductItem
                                title="Basic Music Theory"
                                href={"/courses/basic-music-theory"}
                                src="https://images.ctfassets.net/crb83veve8xb/2VaNf5PhpBlvKAUKYfmefe/5fdaf99f05704485b02e14e8d4addefb/vercel.webp"
                                description="Learn the basics of notes, scales, and chords."
                            />
                            <ProductItem
                                title="Advance Composition"
                                href="https://gomoonbeam.com"
                                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                                description="Master advanced techniques for composing music."
                            />
                            <ProductItem
                                title="Songwriting"
                                href="https://userogue.com"
                                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                                description="Write compelling lyrics and memorable melodies."
                            />
                            <ProductItem
                                title="Music Production"
                                href="https://userogue.com"
                                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                                description="Produce high-quality music with pro techniques."
                            />
                        </div>
                    </MenuItem>

                    <Link href={"/contact"}>
                        <MenuItem setActive={setActive} active={active} item="Contact"/>
                    </Link>
                    
                </Menu>
            </div>
        </div>
    )
}

export default Navbar