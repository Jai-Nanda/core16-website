import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import ThemeButton from './ThemeButton';
import { useRouter } from 'next/router';
import LogoTheme from '../components/LogoTheme'
const Navbar = () => {
  const router = useRouter()
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const handleNav = () => {
    setNav(!nav);
  };
  const controlNavbar = () => {
    if (window.scrollY > 200) {
        if (window.scrollY > lastScrollY && !handleNav) {
            setShow("-translate-y-[80px]");
        } else {
            setShow("shadow-sm");
        }
    } else {
        setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
};

useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
        window.removeEventListener("scroll", controlNavbar);
    };
}, [lastScrollY]);

useEffect(() => {
}, []);
  const links = [
    {
      label: "HOME",
      path: "/",
      pname: "home"
    },
    {
      label: "NEWS",
      path: "/news",
      pname: "news"
    },
    {
      label: "EVENTS",
      path: "/events",
      pname: "events"
    },
    {
      label: "RESOURCES",
      path: "/resources",
      pname: "resources"
    },
    {
      label: "THE TEAM",
      path: "/team",
      pname: "team"
    },
    {
      label: "CONTACT",
      path: "/contact",
      pname: "contact"
    },
    {
      label: "GALLERY",
      path: "/gallary",
      pname: "gallery"
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
          {/* {links.map(link => (
            <li className='p-4' key={""}>
            <Link  href={link.path} className={`${router.pathname === }`}>{link.label}</Link>

            
          </li> 
          ))} */}

          {links.map(({label , path}) => (
            <ul key={""}>
              <li className='px-6 py-4 '>
              <Link href={path} key={label} className={`${router.pathname === path ? 'text-primary-color underline' : ''} `} >{label }</Link>
              </li>
            </ul>
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
          {/* <ul>
          {links.map(({label , path, pname}) => (
            <ul>
              <li className='p-4'>
              <Link href={path} key={pname} className={`${router.pathname === path ? 'text-primary-color underline' : 'text-white'}`}>{label}</Link>

              </li>
            </ul>
          ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;