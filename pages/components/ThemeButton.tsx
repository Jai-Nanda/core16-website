import { TbArrowsExchange, TbArrowsExchange2 } from 'react-icons/tb'
import { useState , useEffect } from 'react'
import { useTheme } from 'next-themes';
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
        <button className=""
          onClick={() => setTheme('light')}
        >
        <TbArrowsExchange size={28}/>
        </button>
      )
    } else {
      return (
        <button className=""
          onClick={() => setTheme('dark')}
          style={{ transition: "ease-in"}}
        >
        <TbArrowsExchange2 size={28}  />
        </button>
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
