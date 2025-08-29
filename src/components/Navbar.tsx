'use client'

import {Button} from "./ui/button"

export function Navbar(){
    
    return(
        <div className="">
            <div className="flex justify-between items-center p-4">
                <div className="hover:cursor-pointer" onClick={() => window.location.href = '/'}><img src="/logo.svg"className="w-15 h-10" alt="" /></div>
                <Button className="bg-[#ff7f4d] border-1 border-black border-b-4 border-r-4 hover:shadow-[2px_1px_0px_0px_black]" variant="outline" size="lg" onClick={() => window.location.href = '/about'}>
                    How it Works?
                </Button>
            </div>
        </div>
    )
}