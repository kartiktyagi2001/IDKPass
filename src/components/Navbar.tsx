'use client'

import Link from 'next/link';
import {Button} from "./ui/button"

export function Navbar(){
    
    return(
        <div className=" bg-[#ffe4a6]/98">
            <div className="flex justify-between items-center p-4">
                <Link href="/">
                    <div className="hover:cursor-pointer"><img src="/logo.svg"className="w-18 h-12" alt="" /></div>
                </Link>

                <Link href="/about">
                    <Button className="bg-[#ff7f4d] border-1 border-black border-b-4 border-r-4 hover:shadow-[2px_1px_0px_0px_black] lg:mx-10" variant="outline" size="lg">
                        How it Works?
                    </Button>
                </Link>
            </div>
        </div>
    )
}

// sticky top-0 z-50 for making navbar fixed at top