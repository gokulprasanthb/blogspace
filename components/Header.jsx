import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
   <header>
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                    <Link href="/"><h1 className="text-2xl font-semibold text-violet-500 pl-24">BlogSpace</h1></Link>
                    <nav className="space-x-14 pr-20 font-medium text-lg">
                        <Link href="/" className="text-violet-500 hover:text-white duration-300">Home</Link>
                        <Link href="/about" className="text-violet-500 hover:text-white duration-300">About</Link>
                        <Link href="/contact" className="text-violet-500 hover:text-white duration-300">Contact</Link>
                    </nav>
      </div>
   </header>
  )
}

export default Header
