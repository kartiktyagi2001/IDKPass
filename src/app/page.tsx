'use client'

import Link from 'next/link';
import { Button } from '../components/ui/button'
import { Star } from "lucide-react"
import { Form } from '@/components/Form';
import { Features } from '@/components/Features';
// import { BouncingBall } from '@/components/BouncingBall';

export default function Home() {

  return (
    <div>
      <div className='h-full mt-15 mb-20 px-20 flex flex-col lg:flex-row lg:pl-0 justify-around items-center'>

        <div className='max-w-2xl'>
          <div className='flex justify-center items-center mb-4'>
            {/* <Button onClick={starOnGithub} variant="destructive" size="sm" className='p-1 bg-purple-600'>Star on GitHub</Button> */}

            <Link href="https://github.com/kartiktyagi2001/IDKPass" target='_blank'>
              <Button
                className="bg-[#c58ef9] text-black font-semibold rounded-full px-4 py-1 h-auto text-xs hover:transform hover:scale-102 hover:bg-[#c58ef9]"
                variant="ghost">
                Give it a
                <Star className="mx-1 h-4 w-4 fill-black text-black" />
                on GitHub →
              </Button>
            </Link>
          </div>

          <div className='flex flex-col md:flex-row justify-center items-center gap-2 md:gap-2 text-center'>
            <h1 className='text-4xl font-bold'>The Magical</h1>
            <h1 className='text-4xl font-bold'>Password Manager</h1>
          </div>

          <div className='flex flex-col justify-center items-center text-center gap-1 mt-4'>
            <p className='font-light'>
              &quot;Forgot your password? Don&apos;t worry — so did we.&quot;
            </p>
            <p className=''>
              <b>idk</b> is your forgetful friend who somehow remembers your secrets only when you ask in the right way - a little magical, but always reliable. 😉
            </p>
          </div>

          <div>
            {/* <BouncingBall /> */}
          </div>
        </div>

        <div className='mt-10 flex justify-center items-center'>
          <Form />
        </div>
      </div>

      <div className="mt-30 lg:mt-45 mb-10">
        <Features />
      </div>
    </div>
  )
}

// function starOnGithub() {
//   window.open('https://github.com/kartiktyagi2001/IDKPass', '_blank');
// }
