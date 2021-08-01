import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <div>
      <nav className='p-6'>
        <div className='flex navbar-container'>
          <Link href='/'>
            <>
              <span className='mr-4 text-white'>
                <div className='logo'>
                  <Image src={Logo} alt='blob' />
                </div>
              </span>
              <a className='logo-text'>ORDEN</a>
            </>
          </Link>
          <Link href='/homepage'>
            <a className='mr-4 text-white'>About</a>
          </Link>
          <Link href='/homepage'>
            <a className='mr-4 text-white'>Activity</a>
          </Link>
          <Link href='/homepage'>
            <a className='mr-4 text-white'>Dashboard</a>
          </Link>
          <Link href='/homepage'>
            <a className='mr-4 text-white'>Notifications</a>
          </Link>
          <Link href='/create'>
            <div className='create-btn'>
              <a>Create</a>
            </div>
          </Link>
          <div className='connect-wallet'>Connect Wallet</div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
