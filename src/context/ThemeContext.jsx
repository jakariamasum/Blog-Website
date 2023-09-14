'use client'
import { createContext, useEffect, useState } from "react";
export const ThemContext= createContext();

const getFromLocalStorag=()=>{
    if(typeof window!== undefined){
        const value= localStorage.getItem('theme'); 
        return value || 'light';
    }
}

export const ThemContextProvider=({children})=>{
    const [theme,setTheme]=useState(()=>{
        return getFromLocalStorag()
    });

    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
      };
    
      useEffect(() => {
        localStorage.setItem("theme", theme);
      }, [theme]);
    

    return <ThemContext.Provider value={{theme,toggle}}>{children}</ThemContext.Provider>
}