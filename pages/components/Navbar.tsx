import Link from 'next/link';
import ThemeButton from './ThemeButton';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import LogoTheme from '../components/LogoTheme'
import { Turn as Hamburger, Turn } from 'hamburger-react'
const Navbar = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const hide = () => setIsOpen(false);
  const show = () => setIsOpen(true)
  const [nav, setNav] = useState(false);
  const [navbar, setNavbar] = useState(false)

  const changeBg = () => {
    if(window.scrollY >= 80){
      setNavbar(true)
    }
    else{
      setNavbar(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeBg)
  }, [])
  
  const handleNav = () => {
    setNav(!nav);
  };
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
      path: "/gallery",
      pname: "gallery"
    },
  ]


  return (
    <div
      
      className={navbar ? 'left-0 top-0 w-full z-10 ease-in duration-300  pb-3  sticky backdrop-blur-xl dark:bg-white/5 bg-black/5 transition-all' : ' sticky  left-0 top-0 w-full z-10 ease-in  duration-300  pb-2 transition-all'}
    >
      <div className='max-w-7xl m-auto flex justify-between items-center pt-5 '>
        <Link href='/' className="ml-10 sm:ml-0">
          {/* <Image src={Logo} alt='CORE LOGO' className='w-12'></Image> */}
          <LogoTheme/>
        </Link>
        <ul className='hidden sm:flex font-medium'>
          {links.map(({label , path}) => (
 <ul key={label}> 
              <li className='px-6  '>
              <Link href={path} key={""} className={`${router.pathname === path ? 'text-primary-color underline ' : 'hover:text-primary-color transition-all dark:text-white text-black dark:hover:text-primary-color'} `} >{label }</Link>
              </li>
            </ul>
          ))}
          </ul>
        <ThemeButton/>
        {/* Mobile Button */}
        <div onClick={handleNav} className='block  mr-10 sm:hidden z-10'>
          {nav ? (
            // <AiOutlineClose size={24} className='cursor-pointer'/>
            <div>
              <button className='cursor-pointer'><Turn/></button>
              
            </div>
          ) : (
            <div>
              <button className='cursor-pointer' onClick={toggle}><Turn/></button>
              <span className={`menu ${isOpen ? 'cross' : 'hamburger'}`}></span>
            </div>
            
          )}
        </div>
        {/* Mobile Menu */}
        {/* <div
          className={
            nav
              ? 'sm:hidden absolute min-h-[100vh] top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-700 dark:bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-[100vh] bg-gra dark:bg-black text-center ease-in duration-300'
          }
        > */}
          <div
          className={
            nav
              ? 'sm:hidden absolute min-h-[100vh] top-0 left-0 right-0 bottom-0 flex justify-center m items-center  h-screen bg-gray-200 dark:text-white text-black dark:bg-black text-center transition-all ease-in duration-300'
              : 'max-w-[80%] flex justify-between items-center sm:hidden bg-black absolute top-0 left-0 right-10 transition-all dark:text-white text-black'
            }
        >
          <ul className={
            nav
              ? 'sm:hidden'
              : 'hidden sm:hidden'
          }>
          {links.map(({label , path, pname}) => (
            <ul key={path}>
              <li className='p-4 text-lg dark:text-white text-black'>
              <Link href={path} key={pname} className={`${router.pathname === path ? 'text-primary-color underline' : 'dark:text-white text-black'}`} onClick={toggle} onBlur={hide} onFocus={show}>{label}</Link>

              </li>
            </ul>
          ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;