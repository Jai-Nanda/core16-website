import Link from 'next/link';
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Logo from '../../public/core _logo.png' 
import ThemeButton from './ThemeButton';
import { useRouter } from 'next/router';
import LogoTheme from '../components/LogoTheme'
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };
  const router = useRouter()
  const links = [
    {
      label: "HOME",
      path: "/"
    },
    {
      label: "NEWS",
      path: "/news"
    },
    {
      label: "EVENTS",
      path: "/events"
    },
    {
      label: "RESOURCES",
      path: "/resources"
    },
    {
      label: "THE TEAM",
      path: "/team"
    },
    {
      label: "CONTACT",
      path: "/contact"
    }
  ]

  return (
    <div
      
      className=' left-0 top-0 w-full z-10 ease-in duration-300 border-b border-b-primary-color pb-5'
    >
      <div className='max-w-7xl m-auto flex justify-between items-center pt-8 '>
        <Link href='/'>
          {/* <Image src={Logo} alt='CORE LOGO' className='w-12'></Image> */}
          <LogoTheme/>
        </Link>
        <ul className='hidden sm:flex font-medium'>
          {links.map(link => (
            <li className=''>
            <Link href={link.path}>{link.label}</Link>
          </li> 
          ))}
        </ul>
        {/* <TbArrowsExchange size={28}/> */}
        <ThemeButton/>
        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20}/>
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
          {links.map(link => (
            <li className='p-4'>
            <Link href={link.path}>{link.label}</Link>
          </li> 
          ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;