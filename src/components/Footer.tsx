'use client'

import Link from 'next/link';


export function Footer(){
    
    return(
        <div className="bg-[#000000] p-4">
            <div className="flex flex-col items-center gap-3 md:justify-between mx-4">
                <Link href="/">
                    <div>
                        <img src="/logo.svg" alt="" className="w-10 h-10 rounded-full hover:cursor-pointer" />
                    
                    </div>
                </Link>
                <div></div>
                    <div className="text-white flex flex-col md:flex-row justify-center items-center gap-3">
                        <Link href="/about" className="hover:underline cursor-pointer mx-2">About</Link>
                        <Link href="https://github.com/kartiktyagi2001/IDKPass" className="hover:underline cursor-pointer mx-2">Source Code</Link>
                        <span className="mx-2">&copy; {new Date().getFullYear()}</span>
                    </div>
            </div>

            <div className="text-center mt-5 text-white">
                <p>Crafted by <Link href="https://arcbit.vercel.app/" target='_blank' className="text-[#ff7f4d] hover:underline">Kartik Tyagi</Link></p>
            </div>     
        </div>
    )
}