// import { createContext, useEffect, useState, useContext } from "react";

// const ThemeContext = createContext();

// export function ThemeProvider({ children }) {
//     const [theme, setTheme] = useState(() => {
//         const saved = localStorage.getItem("theme");
//         if (saved) return saved === "dark";
//         return window.matchMedia("(prefers-color-scheme: dark)").matches;
//     });

//     useEffect(() => {
//         const root = document.documentElement;
//         if (theme) {
//             root.classList.add("dark");
//         } else {
//             root.classList.remove("dark");
//         }
//         localStorage.setItem("theme", theme ? "dark" : "light");
//     }, [theme]);

//     return (
//         <ThemeContext.Provider
//             value={{ theme, toggle: () => setTheme((prev) => !prev) }}
//         >
//             {children}
//         </ThemeContext.Provider>
//     );
// }

// export const useTheme = () => useContext(ThemeContext);
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "../components/Button";
import { useState, useEffect } from "react";

export default function ThemeToggle(){
    const [dark, setDark] = useState (
        () => localStorage.getItem("theme") === "dark"
    );


    useEffect(() => {
        const root = window.document.documentElement;

        if(dark){
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else{
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);


    return(
        <Button variant="ghost" size="icon" aria-label="toggle theme" onClick={() => setDark(!dark)}>
            {dark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
        </Button>
    )
}
