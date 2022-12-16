import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className='bg-blue-400'>
      <ul className='p-2 gap-3 justify-center flex'>
        <Link href='/'>
          <li className=' hover:text-blue-600'>Home</li>
        </Link>
        <Link href='/about'>
          <li className=' hover:text-blue-600'>About</li>
        </Link>
        <Link href='/contact'>
          <li className=' hover:text-blue-600'>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
