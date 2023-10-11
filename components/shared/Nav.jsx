"use client"

import Link from "next/link";
import { useState } from 'react';
import { useUser } from "@clerk/nextjs";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user } = useUser();

  return (
    <nav className="mt-[20px]">
      {/* Desktop Navigation */}
      <div className="container mx-auto">
        <div className="max-sm:hidden flex justify-between items-center">
          <div className="text-black font-[900] text-2xl">
            Logo
          </div>
          <ul className="flex space-x-4 gap-4 font-semibold">
            <Link href="/" className="p-3">
              Home   
            </Link>
            <Link href="/" className="p-3">
              About Us  
            </Link>
            {user? (
              <Link href="/dashboard" className="rounded-full gradient_dark text-white p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                Dashboard 
              </Link>
            ):(
              <Link href="/sign-in" className="rounded-full gradient_dark text-white p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                Sign In 
              </Link>
            )}
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden container flex justify-between p-3 items-center">
          <div className="text-black font-bold text-2xl ">
            Logo
          </div>
          <button 
            type="button" 
            className=""
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            >
            Menu
          </button>
        
        </div>
        {isMenuOpen && (
            <ul className="flex items-center gap-6 p-3 justify-between">
              <Link href="/" 
                className=""
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                >
                Home   
              </Link>
              <br />
              <Link href="/" 
                className=""
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                About Us  
              </Link>
              <br />
              {user? (
                <Link href="/dashboard" className="rounded-full gradient_dark text-white p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                  Dashboard 
                </Link>
               ):(
                <Link href="/sign-in" className="rounded-full gradient_dark text-white p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                 Sign In 
                </Link>
            )}
            </ul>
          )}
      </div>
    </nav>
  )
}

export default Nav;