import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className='font-bold p-10'>
      <ul className='p-2 gap-12 justify-center flex'>
        <Link href='/'>
          <li className=' hover:text-blue-600'>Home</li>
        </Link>
        <Link href='/about'>
          <li className=' hover:text-blue-600'>About</li>
        </Link>
        <Link href='/blog'>
          <li className=' hover:text-blue-600'>Blog</li>
        </Link>
        <Link href='/contact'>
          <li className=' hover:text-blue-600'>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
