import { NextUIProvider } from "@nextui-org/react";
import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const getThemeLocal = () => {
        return localStorage.getItem("theme");
    }

    const setThemeLocal = (value) => {
        console.log("setThemeLocal : " + value);
        localStorage.setItem("theme", value.toString()); // Store as string
    }

    const [theme, setTheme] = useState(getThemeLocal() === '0' ? 'light' : 'dark');
    const toggleTheme = () => {
        const themeLocal = parseInt(getThemeLocal(), 10); // Convert to integer for comparison

        if (themeLocal === 1) {
            setTheme('light');
            setThemeLocal(0);
        } else {
            setTheme('dark');
            setThemeLocal(1);
        }
    }
    return (
        <AppContext.Provider value={{  theme, toggleTheme}}>
            <NextUIProvider>
                <main className={`${theme} text-foreground bg-background`}>
                    {children}
                </main>
            </NextUIProvider>
        </AppContext.Provider>
    );



}