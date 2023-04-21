import React, { useState } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Header() {
    const [mode, setMode] = useState(true);
    const [toggleBtn, setToggleBtn] = useState(<LightModeIcon />)

    const toggleDarkMode = () => {
        if (mode) {
            document.documentElement.classList.add("dark")
            setToggleBtn(<DarkModeIcon />)
            setMode(current => !current)
        }
        if (!mode) {
            document.documentElement.classList.remove('dark')
            setToggleBtn(<LightModeIcon />)
            setMode(current => !current)
        }
    }
  return (
    <header>
        <div 
        className="bg-gray-100 dark:bg-gray-800 dark:text-white shadow-lg shadow-opacity-95 w-screen h-10"
        >
          <div className='w-screen shadow-md bg-white dark:bg-gray-800 dark:text-white'>
            <div className="flex container mx-auto align-center">
                <h1 className="font-bold flex align-center pl-2 text-xl">Advice Slip Program</h1>
                <div className='pr-2 ml-auto font-medium'>
                    <button className='text-green-200' onClick={() => toggleDarkMode()}>{toggleBtn}</button>
                </div>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header