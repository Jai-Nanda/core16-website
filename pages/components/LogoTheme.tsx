import { useState , useEffect } from 'react'
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Logo from '../../public/core _logo.png'
import Logo2 from '../../public/core_logo2.png'
export default function ThemeButton() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if(!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;
    
    if(currentTheme === 'dark') {
      return (
        <Image className="w-14 h-14" src={Logo} alt='CORE LOGO' 
        >
      
        </Image>
      )
    } else {
      return (
        <Image className="w-14 h-14" src={Logo2} alt='CORE LOGO'
        >
       
        </Image>
      )
    }

    

  }
  return (
    <div>
      {/* <button><TbArrowsExchange size={28}/></button> */}
      {renderThemeChanger()}
    </div>
  )
}
